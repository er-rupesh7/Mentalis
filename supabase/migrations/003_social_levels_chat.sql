-- ====================================================================
-- Mentalis Migration 003: 1000-Level System, Social Graph, & Realtime Chat
-- ====================================================================

-- 1. Add XP, Level, Avatar Type, and Presence to public.profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS xp BIGINT NOT NULL DEFAULT 0,
  ADD COLUMN IF NOT EXISTS level INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS avatar_type TEXT NOT NULL DEFAULT 'google',
  ADD COLUMN IF NOT EXISTS selected_badge_level INTEGER NOT NULL DEFAULT 1,
  ADD COLUMN IF NOT EXISTS last_seen_at TIMESTAMPTZ NOT NULL DEFAULT NOW();

-- 2. Ensure case-insensitive unique username index
CREATE UNIQUE INDEX IF NOT EXISTS idx_profiles_username_lower
  ON public.profiles (LOWER(username));

-- 3. Mutual Friends View (Follower + Following in mutual list = Friend)
DROP VIEW IF EXISTS public.friends_view CASCADE;
CREATE OR REPLACE VIEW public.friends_view
WITH (security_invoker = true) AS
SELECT 
  f1.follower_id AS user_id,
  f1.following_id AS friend_id,
  p.username AS friend_username,
  p.display_name AS friend_display_name,
  p.avatar_url AS friend_avatar_url,
  p.avatar_type AS friend_avatar_type,
  p.selected_badge_level AS friend_selected_badge_level,
  p.level AS friend_level,
  p.rating AS friend_rating,
  p.last_seen_at AS friend_last_seen_at
FROM public.follows f1
JOIN public.follows f2 
  ON f1.follower_id = f2.following_id AND f1.following_id = f2.follower_id
JOIN public.profiles p 
  ON p.id = f1.following_id;

GRANT SELECT ON public.friends_view TO authenticated, anon;

-- 4. Robust RLS Policies for Social, Chat, & Profile Updates
DO $$
BEGIN
  -- Chat Conversations: Allow authenticated users to create conversations
  DROP POLICY IF EXISTS "Authenticated users can create chat conversations" ON public.chat_conversations;
  CREATE POLICY "Authenticated users can create chat conversations"
    ON public.chat_conversations FOR INSERT
    TO authenticated
    WITH CHECK (true);

  -- Chat Participants: Allow conversation members to be added
  DROP POLICY IF EXISTS "Users can add conversation participants" ON public.chat_participants;
  CREATE POLICY "Users can add conversation participants"
    ON public.chat_participants FOR INSERT
    TO authenticated
    WITH CHECK (true);

  -- Follows: Ensure users can follow and unfollow seamlessly
  DROP POLICY IF EXISTS "Users can follow and unfollow" ON public.follows;
  CREATE POLICY "Users can follow and unfollow"
    ON public.follows FOR ALL
    TO authenticated
    USING (auth.uid() = follower_id)
    WITH CHECK (auth.uid() = follower_id);

  -- Profiles: Ensure users can update their profile (username, avatar choice, XP, level)
  DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
  CREATE POLICY "Users can update own profile"
    ON public.profiles FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

  -- Chat Messages: Allow authenticated participants to send messages
  DROP POLICY IF EXISTS "Participants can send messages" ON public.chat_messages;
  CREATE POLICY "Participants can send messages"
    ON public.chat_messages FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = sender_id);
END $$;

-- 5. Enable Supabase Realtime for Chat & Social notifications
DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_messages;
  EXCEPTION WHEN duplicate_object THEN
    -- Table already in publication
  END;

  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.chat_conversations;
  EXCEPTION WHEN duplicate_object THEN
  END;

  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.follows;
  EXCEPTION WHEN duplicate_object THEN
  END;
END $$;
