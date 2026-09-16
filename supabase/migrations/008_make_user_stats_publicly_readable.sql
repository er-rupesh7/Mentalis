-- ==============================================================================
-- MIGRATION 008: Make User Stats Publicly Readable for Brain Matrix Profiles & Full Realtime DP Sync
-- ==============================================================================

-- 1. Allow public and authenticated read access to public.user_stats
-- Enables public profiles (e.g. /boss) to display calculation stats, speed CPM,
-- streaks, accuracy, practice time, activity heatmap, and mastery feats.
DROP POLICY IF EXISTS "Users can view own stats" ON public.user_stats;
DROP POLICY IF EXISTS "Public user stats are readable by everyone" ON public.user_stats;

CREATE POLICY "Public user stats are readable by everyone"
  ON public.user_stats FOR SELECT
  USING (true);

-- Ensure user can still insert and update their own stats with robust upsert support
DROP POLICY IF EXISTS "Users can insert/update own stats" ON public.user_stats;
DROP POLICY IF EXISTS "Users can insert own stats" ON public.user_stats;
DROP POLICY IF EXISTS "Users can update own stats" ON public.user_stats;

CREATE POLICY "Users can insert own stats"
  ON public.user_stats FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own stats"
  ON public.user_stats FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 2. Full Replica Identity on profiles table for robust Realtime updates across devices
ALTER TABLE public.profiles REPLICA IDENTITY FULL;

-- Ensure public.profiles and public.user_stats are published to Supabase Realtime
DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
  EXCEPTION WHEN duplicate_object THEN
    -- already added
  END;

  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.user_stats;
  EXCEPTION WHEN duplicate_object THEN
    -- already added
  END;
END $$;

-- 3. Security Definer RPC helper: get_public_user_stats
-- Reliable fallback function for reading public statistics of any learner
CREATE OR REPLACE FUNCTION public.get_public_user_stats(target_user_id UUID)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_stats RECORD;
BEGIN
  SELECT * INTO v_stats FROM public.user_stats WHERE user_id = target_user_id;
  IF NOT FOUND THEN
    RETURN NULL;
  END IF;

  RETURN jsonb_build_object(
    'user_id', v_stats.user_id,
    'total_questions_answered', v_stats.total_questions_answered,
    'total_correct', v_stats.total_correct,
    'current_streak', v_stats.current_streak,
    'longest_streak', v_stats.longest_streak,
    'total_time_spent_seconds', v_stats.total_time_spent_seconds,
    'last_active_date', v_stats.last_active_date,
    'overall_cpm', v_stats.overall_cpm,
    'overall_accuracy', v_stats.overall_accuracy,
    'progress_map', v_stats.progress_map,
    'anzan_stats', v_stats.anzan_stats,
    'updated_at', v_stats.updated_at
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_public_user_stats(UUID) TO anon, authenticated;

-- 4. Ensure existing account associated with insanrupesh retains username 'boss' and display name 'Mr. Boss'
UPDATE public.profiles
SET username = 'boss',
    display_name = CASE WHEN display_name = 'Mentalist' OR display_name IS NULL THEN 'Mr. Boss' ELSE display_name END,
    updated_at = NOW()
WHERE id = 'e509a080-f745-405b-a9f8-663fc850ca12';

-- 5. Security Definer RPC helper: sync_user_stats
-- Fail-safe UPSERT helper for user statistics that verifies auth.uid()
CREATE OR REPLACE FUNCTION public.sync_user_stats(
  p_total_questions_answered INTEGER DEFAULT 0,
  p_total_correct INTEGER DEFAULT 0,
  p_current_streak INTEGER DEFAULT 0,
  p_longest_streak INTEGER DEFAULT 0,
  p_total_time_spent_seconds INTEGER DEFAULT 0,
  p_last_active_date DATE DEFAULT NULL,
  p_overall_cpm NUMERIC DEFAULT 0,
  p_overall_accuracy NUMERIC DEFAULT 0,
  p_progress_map JSONB DEFAULT '{}'::JSONB,
  p_anzan_stats JSONB DEFAULT '{}'::JSONB
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_uid UUID;
BEGIN
  v_uid := auth.uid();
  IF v_uid IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  INSERT INTO public.user_stats (
    user_id,
    total_questions_answered,
    total_correct,
    current_streak,
    longest_streak,
    total_time_spent_seconds,
    last_active_date,
    overall_cpm,
    overall_accuracy,
    progress_map,
    anzan_stats,
    updated_at
  ) VALUES (
    v_uid,
    COALESCE(p_total_questions_answered, 0),
    COALESCE(p_total_correct, 0),
    COALESCE(p_current_streak, 0),
    COALESCE(p_longest_streak, 0),
    COALESCE(p_total_time_spent_seconds, 0),
    p_last_active_date,
    COALESCE(p_overall_cpm, 0),
    COALESCE(p_overall_accuracy, 0),
    COALESCE(p_progress_map, '{}'::JSONB),
    COALESCE(p_anzan_stats, '{}'::JSONB),
    NOW()
  )
  ON CONFLICT (user_id) DO UPDATE SET
    total_questions_answered = EXCLUDED.total_questions_answered,
    total_correct = EXCLUDED.total_correct,
    current_streak = EXCLUDED.current_streak,
    longest_streak = EXCLUDED.longest_streak,
    total_time_spent_seconds = EXCLUDED.total_time_spent_seconds,
    last_active_date = EXCLUDED.last_active_date,
    overall_cpm = EXCLUDED.overall_cpm,
    overall_accuracy = EXCLUDED.overall_accuracy,
    progress_map = EXCLUDED.progress_map,
    anzan_stats = EXCLUDED.anzan_stats,
    updated_at = NOW();

  RETURN jsonb_build_object('success', true);
END;
$$;

GRANT EXECUTE ON FUNCTION public.sync_user_stats(INTEGER, INTEGER, INTEGER, INTEGER, INTEGER, DATE, NUMERIC, NUMERIC, JSONB, JSONB) TO authenticated;
