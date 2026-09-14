-- ====================================================================
-- Mentalis Platform: Comprehensive Supabase Schema Migration 001
-- Covers: Authentication, Full User State Sync, Leaderboards,
-- Friends & Follows, 1v1 Challenges, and Realtime Chat
-- ====================================================================

-- 1. PROFILES TABLE (Public user profiles linked to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  rating INTEGER NOT NULL DEFAULT 1200,
  tier TEXT NOT NULL DEFAULT 'Bronze',
  bio TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Index for username search & ranking queries
CREATE INDEX IF NOT EXISTS idx_profiles_rating ON public.profiles(rating DESC);
CREATE INDEX IF NOT EXISTS idx_profiles_username ON public.profiles(username);

-- 2. USER STATS TABLE (High-level aggregated progress & mastery metrics)
CREATE TABLE IF NOT EXISTS public.user_stats (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  total_questions_answered INTEGER NOT NULL DEFAULT 0,
  total_correct INTEGER NOT NULL DEFAULT 0,
  current_streak INTEGER NOT NULL DEFAULT 0,
  longest_streak INTEGER NOT NULL DEFAULT 0,
  last_active_date DATE,
  overall_cpm NUMERIC NOT NULL DEFAULT 0,
  overall_accuracy NUMERIC NOT NULL DEFAULT 0,
  progress_map JSONB NOT NULL DEFAULT '{}'::JSONB,
  anzan_stats JSONB NOT NULL DEFAULT '{}'::JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. LEARNER PROFILES TABLE (Bayesian modeling & cognitive state)
CREATE TABLE IF NOT EXISTS public.learner_profiles (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  profile_data JSONB NOT NULL DEFAULT '{}'::JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. FACT MEMORY STATES (Item-level memory strength & spaced repetition)
CREATE TABLE IF NOT EXISTS public.fact_memory_states (
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  fact_key TEXT NOT NULL,
  state_data JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, fact_key)
);

CREATE INDEX IF NOT EXISTS idx_fact_memory_user ON public.fact_memory_states(user_id);

-- 5. TECHNIQUE MASTERY TABLE
CREATE TABLE IF NOT EXISTS public.technique_mastery (
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  technique_id TEXT NOT NULL,
  mastery_state JSONB NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, technique_id)
);

-- 6. USER SETTINGS TABLE (Preferences, active module state, sound & accessibility)
CREATE TABLE IF NOT EXISTS public.user_settings (
  user_id UUID PRIMARY KEY REFERENCES public.profiles(id) ON DELETE CASCADE,
  sound_enabled BOOLEAN NOT NULL DEFAULT TRUE,
  reduced_motion BOOLEAN NOT NULL DEFAULT FALSE,
  timer_visible BOOLEAN NOT NULL DEFAULT TRUE,
  locale TEXT NOT NULL DEFAULT 'en',
  has_completed_language_onboarding BOOLEAN NOT NULL DEFAULT FALSE,
  learning_mode TEXT NOT NULL DEFAULT 'standard',
  active_add_sub_level INTEGER NOT NULL DEFAULT 1,
  active_table INTEGER NOT NULL DEFAULT 2,
  active_square_track TEXT NOT NULL DEFAULT 'squares_1_25',
  anzan_config JSONB NOT NULL DEFAULT '{}'::JSONB,
  custom_drill_config JSONB,
  ai_coaching_enabled BOOLEAN NOT NULL DEFAULT TRUE,
  ai_coach_state JSONB NOT NULL DEFAULT '{}'::JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. LEADERBOARD ENTRIES (Global & category-specific rankings)
CREATE TABLE IF NOT EXISTS public.leaderboard_entries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  category TEXT NOT NULL, -- 'global_cpm', 'tables_sprint', 'anzan_master', 'streak', 'rating'
  score NUMERIC NOT NULL DEFAULT 0,
  period TEXT NOT NULL DEFAULT 'all_time', -- 'all_time', 'monthly', 'weekly', 'daily'
  rank_position INTEGER,
  metadata JSONB DEFAULT '{}'::JSONB,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, category, period)
);

CREATE INDEX IF NOT EXISTS idx_leaderboard_lookup ON public.leaderboard_entries(category, period, score DESC);

-- 8. SOCIAL: FRIENDSHIPS (Mutual connections)
CREATE TABLE IF NOT EXISTS public.friendships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  friend_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'accepted', 'declined', 'blocked'
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, friend_id),
  CONSTRAINT different_users CHECK (user_id != friend_id)
);

CREATE INDEX IF NOT EXISTS idx_friendships_user ON public.friendships(user_id, status);
CREATE INDEX IF NOT EXISTS idx_friendships_friend ON public.friendships(friend_id, status);

-- 9. SOCIAL: FOLLOWS (One-way social graph)
CREATE TABLE IF NOT EXISTS public.follows (
  follower_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  following_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (follower_id, following_id),
  CONSTRAINT no_self_follow CHECK (follower_id != following_id)
);

CREATE INDEX IF NOT EXISTS idx_follows_following ON public.follows(following_id);

-- 10. MULTIPLAYER: 1v1 CHALLENGES (Real-time and async math duels)
CREATE TABLE IF NOT EXISTS public.challenges_1v1 (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  creator_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  opponent_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  challenge_type TEXT NOT NULL DEFAULT 'multiplication', -- 'multiplication', 'tables_sprint', 'mixed'
  status TEXT NOT NULL DEFAULT 'waiting', -- 'waiting', 'active', 'completed', 'cancelled'
  config JSONB NOT NULL DEFAULT '{"questionCount": 15, "timeLimitSec": 60}'::JSONB,
  creator_score NUMERIC NOT NULL DEFAULT 0,
  opponent_score NUMERIC NOT NULL DEFAULT 0,
  creator_time_ms INTEGER NOT NULL DEFAULT 0,
  opponent_time_ms INTEGER NOT NULL DEFAULT 0,
  winner_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_challenges_status ON public.challenges_1v1(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_challenges_participants ON public.challenges_1v1(creator_id, opponent_id);

-- 11. MESSAGING & CHAT: CONVERSATIONS
CREATE TABLE IF NOT EXISTS public.chat_conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL DEFAULT 'direct', -- 'direct', 'challenge', 'global'
  challenge_id UUID REFERENCES public.challenges_1v1(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 12. MESSAGING & CHAT: PARTICIPANTS
CREATE TABLE IF NOT EXISTS public.chat_participants (
  conversation_id UUID NOT NULL REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  last_read_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (conversation_id, user_id)
);

-- 13. MESSAGING & CHAT: MESSAGES
CREATE TABLE IF NOT EXISTS public.chat_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID NOT NULL REFERENCES public.chat_conversations(id) ON DELETE CASCADE,
  sender_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  message_text TEXT NOT NULL,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_chat_messages_conv ON public.chat_messages(conversation_id, created_at ASC);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learner_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.fact_memory_states ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.technique_mastery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leaderboard_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.friendships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.follows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenges_1v1 ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- Profiles: Anyone authenticated or public can read profiles; user can update own profile
CREATE POLICY "Public profiles are readable by everyone"
  ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

-- User Stats: User can read and update their own stats
CREATE POLICY "Users can view own stats"
  ON public.user_stats FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert/update own stats"
  ON public.user_stats FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Learner Profiles:
CREATE POLICY "Users manage own learner profile"
  ON public.learner_profiles FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Fact Memory States:
CREATE POLICY "Users manage own fact memory"
  ON public.fact_memory_states FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Technique Mastery:
CREATE POLICY "Users manage own technique mastery"
  ON public.technique_mastery FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- User Settings:
CREATE POLICY "Users manage own settings"
  ON public.user_settings FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Leaderboards: Anyone can read, user can update own entry
CREATE POLICY "Leaderboards are readable by everyone"
  ON public.leaderboard_entries FOR SELECT USING (true);

CREATE POLICY "Users can manage own leaderboard entry"
  ON public.leaderboard_entries FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Friendships:
CREATE POLICY "Users can view their friendships"
  ON public.friendships FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() = friend_id);

CREATE POLICY "Users can insert friendships"
  ON public.friendships FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their friendships"
  ON public.friendships FOR UPDATE
  USING (auth.uid() = user_id OR auth.uid() = friend_id);

-- Follows:
CREATE POLICY "Anyone can view follows"
  ON public.follows FOR SELECT USING (true);

CREATE POLICY "Users can manage their follows"
  ON public.follows FOR ALL
  USING (auth.uid() = follower_id);

-- Challenges:
CREATE POLICY "Users can view challenges they participate in or open challenges"
  ON public.challenges_1v1 FOR SELECT
  USING (auth.uid() = creator_id OR auth.uid() = opponent_id OR status = 'waiting');

CREATE POLICY "Users can create challenges"
  ON public.challenges_1v1 FOR INSERT
  WITH CHECK (auth.uid() = creator_id);

CREATE POLICY "Participants can update their challenges"
  ON public.challenges_1v1 FOR UPDATE
  USING (auth.uid() = creator_id OR auth.uid() = opponent_id OR status = 'waiting');

-- Chat:
CREATE POLICY "Conversation participants can view conversations"
  ON public.chat_conversations FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.chat_participants
      WHERE conversation_id = public.chat_conversations.id AND user_id = auth.uid()
    ) OR type = 'global'
  );

CREATE POLICY "Participants can view conversation members"
  ON public.chat_participants FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.chat_participants cp2
      WHERE cp2.conversation_id = public.chat_participants.conversation_id AND cp2.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can join conversations"
  ON public.chat_participants FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Participants can read messages"
  ON public.chat_messages FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.chat_participants
      WHERE conversation_id = public.chat_messages.conversation_id AND user_id = auth.uid()
    )
  );

CREATE POLICY "Participants can send messages"
  ON public.chat_messages FOR INSERT
  WITH CHECK (
    auth.uid() = sender_id AND
    EXISTS (
      SELECT 1 FROM public.chat_participants
      WHERE conversation_id = public.chat_messages.conversation_id AND user_id = auth.uid()
    )
  );

-- ====================================================================
-- AUTOMATIC USER PROVISIONING TRIGGER (auth.users -> public.profiles)
-- ====================================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  -- 1. Insert Profile
  INSERT INTO public.profiles (id, username, display_name, avatar_url)
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data->>'user_name',
      NEW.raw_user_meta_data->>'preferred_username',
      SPLIT_PART(NEW.email, '@', 1) || '_' || SUBSTRING(NEW.id::TEXT, 1, 4)
    ),
    COALESCE(
      NEW.raw_user_meta_data->>'full_name',
      NEW.raw_user_meta_data->>'name',
      SPLIT_PART(NEW.email, '@', 1)
    ),
    COALESCE(
      NEW.raw_user_meta_data->>'avatar_url',
      NEW.raw_user_meta_data->>'picture'
    )
  )
  ON CONFLICT (id) DO NOTHING;

  -- 2. Insert User Stats
  INSERT INTO public.user_stats (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  -- 3. Insert Learner Profile
  INSERT INTO public.learner_profiles (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  -- 4. Insert User Settings
  INSERT INTO public.user_settings (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger execution on auth.users creation
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
