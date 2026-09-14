-- ==============================================================================
-- MIGRATION 006: Fix Supabase Security Definer View Warning on public.friends_view
--
-- Resolves the Supabase Database Linter critical advisory:
-- "View public.friends_view is defined with the SECURITY DEFINER property."
--
-- Note: Postgres does not allow CREATE OR REPLACE VIEW to change the order or
-- names of existing columns in an existing view (Postgres error 42P16).
-- We safely DROP the view first to recreate it cleanly with WITH (security_invoker = true).
-- ==============================================================================

-- 1. Drop existing view to allow column schema updates cleanly
DROP VIEW IF EXISTS public.friends_view CASCADE;

-- 2. Recreate view with explicit WITH (security_invoker = true) and all profile columns
CREATE VIEW public.friends_view
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
  p.equipped_badge_type AS friend_equipped_badge_type,
  p.equipped_badge_id AS friend_equipped_badge_id,
  p.last_seen_at AS friend_last_seen_at
FROM public.follows f1
JOIN public.follows f2 
  ON f1.follower_id = f2.following_id AND f1.following_id = f2.follower_id
JOIN public.profiles p 
  ON p.id = f1.following_id;

-- 3. Ensure permissions for authenticated and anonymous callers
GRANT SELECT ON public.friends_view TO authenticated, anon;
