-- ====================================================================
-- Mentalis Migration 002: Fix Row Level Security (RLS) & Clean Names
-- ====================================================================

-- 1. Profiles: allow users to insert and update their own profile
DROP POLICY IF EXISTS "Users can insert own profile" ON public.profiles;
CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 2. User Stats: explicitly add WITH CHECK for upsert
DROP POLICY IF EXISTS "Users can insert/update own stats" ON public.user_stats;
CREATE POLICY "Users can insert/update own stats"
  ON public.user_stats FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 3. Learner Profiles
DROP POLICY IF EXISTS "Users manage own learner profile" ON public.learner_profiles;
CREATE POLICY "Users manage own learner profile"
  ON public.learner_profiles FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 4. Fact Memory States
DROP POLICY IF EXISTS "Users manage own fact memory" ON public.fact_memory_states;
CREATE POLICY "Users manage own fact memory"
  ON public.fact_memory_states FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 5. Technique Mastery
DROP POLICY IF EXISTS "Users manage own technique mastery" ON public.technique_mastery;
CREATE POLICY "Users manage own technique mastery"
  ON public.technique_mastery FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 6. User Settings
DROP POLICY IF EXISTS "Users manage own settings" ON public.user_settings;
CREATE POLICY "Users manage own settings"
  ON public.user_settings FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 7. Leaderboard Entries
DROP POLICY IF EXISTS "Users can manage own leaderboard entry" ON public.leaderboard_entries;
CREATE POLICY "Users can manage own leaderboard entry"
  ON public.leaderboard_entries FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 8. Clean up any existing 'Unknown' display names in profiles table
UPDATE public.profiles
SET display_name = CASE
  WHEN display_name IS NULL OR LOWER(display_name) = 'unknown' OR TRIM(display_name) = ''
  THEN INITCAP(SPLIT_PART(username, '_', 1))
  ELSE display_name
END
WHERE display_name IS NULL OR LOWER(display_name) = 'unknown' OR TRIM(display_name) = '';

-- 9. Robust User Provisioning Trigger
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  v_name TEXT;
  v_username TEXT;
  v_avatar TEXT;
BEGIN
  -- Determine clean display name
  v_name := COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name');
  IF v_name IS NULL OR LOWER(TRIM(v_name)) = 'unknown' OR TRIM(v_name) = '' THEN
    v_name := INITCAP(SPLIT_PART(NEW.email, '@', 1));
  END IF;

  -- Determine username
  v_username := COALESCE(
    NEW.raw_user_meta_data->>'user_name',
    NEW.raw_user_meta_data->>'preferred_username',
    SPLIT_PART(NEW.email, '@', 1) || '_' || SUBSTRING(NEW.id::TEXT, 1, 4)
  );

  -- Determine avatar
  v_avatar := COALESCE(
    NEW.raw_user_meta_data->>'avatar_url',
    NEW.raw_user_meta_data->>'picture'
  );

  -- Insert/Update Profile
  INSERT INTO public.profiles (id, username, display_name, avatar_url)
  VALUES (NEW.id, v_username, v_name, v_avatar)
  ON CONFLICT (id) DO UPDATE
    SET display_name = EXCLUDED.display_name,
        avatar_url = COALESCE(EXCLUDED.avatar_url, public.profiles.avatar_url),
        updated_at = NOW();

  -- Insert User Stats
  INSERT INTO public.user_stats (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  -- Insert Learner Profile
  INSERT INTO public.learner_profiles (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  -- Insert User Settings
  INSERT INTO public.user_settings (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
