-- ====================================================================
-- Mentalis Migration 005: Practice Time, Mastery Equipment & Follow Notifications
-- ====================================================================

-- 1. Add total_time_spent_seconds to user_stats and rating to profiles
ALTER TABLE public.user_stats
  ADD COLUMN IF NOT EXISTS total_time_spent_seconds BIGINT NOT NULL DEFAULT 0;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS equipped_badge_type TEXT NOT NULL DEFAULT 'google',
  ADD COLUMN IF NOT EXISTS equipped_badge_id TEXT NOT NULL DEFAULT '1',
  ADD COLUMN IF NOT EXISTS rating INTEGER NOT NULL DEFAULT 1200,
  ADD COLUMN IF NOT EXISTS rank_tier TEXT NOT NULL DEFAULT 'Bronze Novice';

-- 2. In-Web Notifications Table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  actor_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL, -- 'follow', 'follow_back', 'badge_unlock', 'challenge'
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  metadata JSONB NOT NULL DEFAULT '{}'::JSONB,
  is_read BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_notifications_user_unread ON public.notifications(user_id, is_read, created_at DESC);

-- 3. RLS Policies for Notifications
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  -- Users can view their own received notifications
  DROP POLICY IF EXISTS "Users can view own notifications" ON public.notifications;
  CREATE POLICY "Users can view own notifications"
    ON public.notifications FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

  -- Authenticated users can create notifications for other users (e.g. following someone)
  DROP POLICY IF EXISTS "Users can create notifications for others" ON public.notifications;
  CREATE POLICY "Users can create notifications for others"
    ON public.notifications FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = actor_id);

  -- Users can update/mark their own notifications as read
  DROP POLICY IF EXISTS "Users can update own notifications" ON public.notifications;
  CREATE POLICY "Users can update own notifications"
    ON public.notifications FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id)
    WITH CHECK (auth.uid() = user_id);

  -- Users can delete their own notifications
  DROP POLICY IF EXISTS "Users can delete own notifications" ON public.notifications;
  CREATE POLICY "Users can delete own notifications"
    ON public.notifications FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);
END $$;

-- 4. Enable Supabase Realtime for Notifications
DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.notifications;
  EXCEPTION WHEN duplicate_object THEN
    -- Table already in publication
  END;
END $$;
