-- ====================================================================
-- Mentalis Platform: Migration 010 — Mentalab Mind Engagement & Anti-Spam
-- ====================================================================
-- Privacy-Preserving Engagement Architecture:
-- 1. Hardened RLS for psychology_reactions (Users can ONLY view their own rows)
-- 2. Security Definer RPC for aggregate reaction counts (Zero identity exposure)
-- 3. Server-side anti-spam reaction toggle, change, and removal
-- 4. Anti-spam share recording with rate-limiting and deduplication
-- 5. Atomic view count increment
-- 6. User saved bookmarks query with multilingual topic metadata
-- ====================================================================

-- 1. HARDEN REACTIONS RLS (Never expose user_ids or who reacted to whom)
DROP POLICY IF EXISTS "Public can read reaction aggregates" ON public.psychology_reactions;
DROP POLICY IF EXISTS "Users can view own reaction" ON public.psychology_reactions;

CREATE POLICY "Users can view own reaction"
  ON public.psychology_reactions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- 2. AGGREGATE REACTION COUNTS RPC (Zero identity exposure)
CREATE OR REPLACE FUNCTION public.get_topic_reaction_counts(p_topic_id TEXT)
RETURNS JSONB AS $$
DECLARE
  counts_result JSONB;
BEGIN
  SELECT jsonb_build_object(
    'helpful', COUNT(*) FILTER (WHERE reaction_type = 'helpful'),
    'interesting', COUNT(*) FILTER (WHERE reaction_type = 'interesting'),
    'surprising', COUNT(*) FILTER (WHERE reaction_type = 'surprising'),
    'learned', COUNT(*) FILTER (WHERE reaction_type = 'learned'),
    'thinking', COUNT(*) FILTER (WHERE reaction_type = 'thinking'),
    'total', COUNT(*)
  ) INTO counts_result
  FROM public.psychology_reactions
  WHERE topic_id = p_topic_id;

  RETURN COALESCE(counts_result, jsonb_build_object(
    'helpful', 0,
    'interesting', 0,
    'surprising', 0,
    'learned', 0,
    'thinking', 0,
    'total', 0
  ));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. SERVER-SIDE ANTI-SPAM REACTION TOGGLE
-- Supports:
-- - Reaction set
-- - Reaction change
-- - Reaction removal (when clicking same reaction type)
-- - Duplicate active reaction prevention (at most 1 active per user per topic)
-- - Rate-limiting against bot spam
CREATE OR REPLACE FUNCTION public.toggle_mind_reaction(
  p_topic_id TEXT,
  p_reaction_type TEXT
)
RETURNS JSONB AS $$
DECLARE
  v_user_id UUID;
  v_existing RECORD;
  v_action TEXT;
BEGIN
  v_user_id := auth.uid();
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Authentication required to register reaction';
  END IF;

  IF p_reaction_type NOT IN ('helpful', 'interesting', 'surprising', 'learned', 'thinking') THEN
    RAISE EXCEPTION 'Invalid reaction type: %', p_reaction_type;
  END IF;

  -- Verify topic exists
  IF NOT EXISTS (SELECT 1 FROM public.psychology_topics WHERE id = p_topic_id) THEN
    RAISE EXCEPTION 'Topic does not exist: %', p_topic_id;
  END IF;

  -- Check existing reaction
  SELECT id, reaction_type, updated_at INTO v_existing
  FROM public.psychology_reactions
  WHERE user_id = v_user_id AND topic_id = p_topic_id;

  IF v_existing.id IS NOT NULL THEN
    -- Anti-spam: enforce at least 500ms between rapid reaction flips
    IF v_existing.updated_at > NOW() - INTERVAL '500 milliseconds' THEN
      RETURN jsonb_build_object('success', false, 'reason', 'rate_limited');
    END IF;

    IF v_existing.reaction_type = p_reaction_type THEN
      -- Removal: User tapped the already-active reaction
      DELETE FROM public.psychology_reactions
      WHERE id = v_existing.id;
      v_action := 'removed';
    ELSE
      -- Change: User switched to a different reaction
      UPDATE public.psychology_reactions
      SET reaction_type = p_reaction_type,
          updated_at = NOW()
      WHERE id = v_existing.id;
      v_action := 'changed';
    END IF;
  ELSE
    -- Set: New reaction
    INSERT INTO public.psychology_reactions (user_id, topic_id, reaction_type)
    VALUES (v_user_id, p_topic_id, p_reaction_type);
    v_action := 'added';
  END IF;

  RETURN jsonb_build_object(
    'success', true,
    'action', v_action,
    'activeReaction', CASE WHEN v_action = 'removed' THEN NULL ELSE p_reaction_type END,
    'counts', public.get_topic_reaction_counts(p_topic_id)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. ANTI-SPAM SHARE RECORDING (Prevents duplicate share inflation)
CREATE OR REPLACE FUNCTION public.record_mind_share_event(
  p_topic_id TEXT,
  p_platform TEXT,
  p_language_code TEXT DEFAULT 'en'
)
RETURNS JSONB AS $$
DECLARE
  v_recent_share_exists BOOLEAN;
BEGIN
  IF p_platform NOT IN ('whatsapp', 'twitter', 'telegram', 'facebook', 'linkedin', 'clipboard', 'native_share', 'other') THEN
    p_platform := 'other';
  END IF;

  -- Anti-spam: check if this topic was shared to the exact same platform within the last 15 seconds
  SELECT EXISTS (
    SELECT 1 FROM public.psychology_shares
    WHERE topic_id = p_topic_id
      AND platform = p_platform
      AND created_at > NOW() - INTERVAL '15 seconds'
  ) INTO v_recent_share_exists;

  IF NOT v_recent_share_exists THEN
    INSERT INTO public.psychology_shares (topic_id, platform, language_code)
    VALUES (p_topic_id, p_platform, p_language_code);

    -- Atomically increment share_count on psychology_topics
    UPDATE public.psychology_topics
    SET share_count = share_count + 1
    WHERE id = p_topic_id;
  END IF;

  RETURN jsonb_build_object('success', true, 'recorded', NOT v_recent_share_exists);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. ATOMIC TOPIC VIEW TRACKING
CREATE OR REPLACE FUNCTION public.record_mind_topic_view(p_topic_id TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE public.psychology_topics
  SET view_count = view_count + 1
  WHERE id = p_topic_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 6. SAVED BOOKMARKS QUERY RPC
CREATE OR REPLACE FUNCTION public.get_user_mind_bookmarks(p_language_code TEXT DEFAULT 'en')
RETURNS TABLE (
  bookmark_id UUID,
  topic_id TEXT,
  topic_slug TEXT,
  title TEXT,
  one_line_explanation TEXT,
  short_description TEXT,
  category_id TEXT,
  category_title TEXT,
  difficulty TEXT,
  estimated_reading_minutes INTEGER,
  saved_at TIMESTAMPTZ,
  notes TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    b.id AS bookmark_id,
    t.id AS topic_id,
    t.slug AS topic_slug,
    COALESCE(tt.title, fallback_tt.title, t.slug) AS title,
    COALESCE(tt.one_line_explanation, fallback_tt.one_line_explanation) AS one_line_explanation,
    COALESCE(tt.short_description, fallback_tt.short_description, '') AS short_description,
    c.id AS category_id,
    COALESCE(ct.title, fallback_ct.title, c.slug) AS category_title,
    t.difficulty,
    t.estimated_reading_minutes,
    b.created_at AS saved_at,
    b.notes
  FROM public.psychology_bookmarks b
  JOIN public.psychology_topics t ON t.id = b.topic_id
  JOIN public.psychology_categories c ON c.id = t.category_id
  LEFT JOIN public.psychology_topic_translations tt ON tt.topic_id = t.id AND tt.language_code = p_language_code
  LEFT JOIN public.psychology_topic_translations fallback_tt ON fallback_tt.topic_id = t.id AND fallback_tt.language_code = 'en'
  LEFT JOIN public.psychology_category_translations ct ON ct.category_id = c.id AND ct.language_code = p_language_code
  LEFT JOIN public.psychology_category_translations fallback_ct ON fallback_ct.category_id = c.id AND fallback_ct.language_code = 'en'
  WHERE b.user_id = auth.uid()
  ORDER BY b.created_at DESC;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
