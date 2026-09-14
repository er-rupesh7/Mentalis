-- ====================================================================
-- Mentalis Migration 004: Username Change Rules & Suggestions Index
-- ====================================================================

-- 1. Add username_changed_at to public.profiles to enforce 30-day cooldown
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS username_changed_at TIMESTAMPTZ;

-- 2. Index on last_seen_at for suggested mentalists lookup
CREATE INDEX IF NOT EXISTS idx_profiles_last_seen
  ON public.profiles (last_seen_at DESC);
