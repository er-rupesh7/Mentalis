-- ====================================================================
-- Mentalis Migration 007: User Profile Deletion, Chat Anonymization & Realtime Avatar Sync
-- ====================================================================

-- 1. Add soft-delete flag and timestamp to public.profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS deleted_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_profiles_is_deleted ON public.profiles(is_deleted);

-- 2. Add public.profiles to Supabase Realtime publication for dynamic cross-device sync
DO $$
BEGIN
  BEGIN
    ALTER PUBLICATION supabase_realtime ADD TABLE public.profiles;
  EXCEPTION WHEN duplicate_object THEN
    -- Table already added to publication
  END;
END $$;

-- 3. Stored Procedure: delete_user_account()
-- Deletes all personal learner data, stats, memory states, follows, and notifications.
-- For past chat messages: masks the message text with "User is no longer available on the platform"
-- and marks metadata.is_hidden = true.
-- Retains anonymized profile row so foreign keys do not cascade-delete the chat history for their chat partners.
CREATE OR REPLACE FUNCTION public.delete_user_account()
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  current_user_id UUID;
BEGIN
  current_user_id := auth.uid();
  IF current_user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;

  -- 1. Wipe all personal progress, cognitive records, and settings
  DELETE FROM public.user_stats WHERE user_id = current_user_id;
  DELETE FROM public.learner_profiles WHERE user_id = current_user_id;
  DELETE FROM public.fact_memory_states WHERE user_id = current_user_id;
  DELETE FROM public.technique_mastery WHERE user_id = current_user_id;
  DELETE FROM public.user_settings WHERE user_id = current_user_id;
  DELETE FROM public.leaderboard_entries WHERE user_id = current_user_id;
  DELETE FROM public.follows WHERE follower_id = current_user_id OR following_id = current_user_id;
  DELETE FROM public.friendships WHERE user_id = current_user_id OR friend_id = current_user_id;
  DELETE FROM public.notifications WHERE user_id = current_user_id OR actor_id = current_user_id;

  -- 2. Cancel or clean up open 1v1 challenges
  DELETE FROM public.challenges_1v1 WHERE creator_id = current_user_id AND status = 'waiting';
  UPDATE public.challenges_1v1 SET opponent_id = NULL WHERE opponent_id = current_user_id AND status = 'waiting';

  -- 3. Anonymize/hide all chat messages sent by this user
  UPDATE public.chat_messages
  SET message_text = 'User is no longer available on the platform',
      metadata = jsonb_set(COALESCE(metadata, '{}'::jsonb), '{is_hidden}', 'true'::jsonb)
  WHERE sender_id = current_user_id;

  -- 4. Anonymize the profile row to mark user as unavailable
  UPDATE public.profiles
  SET is_deleted = TRUE,
      deleted_at = NOW(),
      display_name = 'User is no longer available',
      username = 'deleted_user_' || SUBSTRING(current_user_id::TEXT, 1, 8),
      avatar_url = NULL,
      avatar_type = 'deleted',
      bio = '',
      rating = 0,
      xp = 0,
      level = 1,
      equipped_badge_id = NULL,
      equipped_badge_type = 'deleted',
      updated_at = NOW()
  WHERE id = current_user_id;

  RETURN jsonb_build_object(
    'success', true,
    'message', 'User profile and all associated data have been permanently deleted and chats anonymized.'
  );
END;
$$;

GRANT EXECUTE ON FUNCTION public.delete_user_account() TO authenticated;
