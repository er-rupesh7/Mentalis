-- ====================================================================
-- Mentalis Platform: Migration 009 — Mentalab Mind (Psychology System)
-- ====================================================================
-- Comprehensive production database architecture for Mentalab Mind:
-- - 1. Categories & Multilingual Category Metadata
-- - 2. Canonical Topics, Life-Domain Categories, and Difficulty Tiers
-- - 3. Multilingual Topic Translations (13 Indian Languages + First-Class Hinglish)
-- - 4. Modular Progressive-Disclosure Sections & Translations
-- - 5. Real-World Concrete Examples & Translations
-- - 6. Indian Context & Relatable Scenarios
-- - 7. Interactive Practice ("Spot the Bias / Manipulation"), Questions, & Explanations
-- - 8. Question Options & Contextual Feedback
-- - 9. User Practice Attempts with Accuracy & Timing
-- - 10. Peer-Reviewed Scientific References & Evidence Hierarchy
-- - 11. Cognitive Tags & Cross-Topic Relations Graph
-- - 12. Media & Visual Illustrations (Images, Alt Text, Captions)
-- - 13. Anti-Spam Single-Reaction Mechanism (Helpful, Interesting, Surprising, Learned, Thinking)
-- - 14. User Bookmarks with Personal Notes
-- - 15. Privacy-Preserving Aggregate Share Analytics
-- - 16. Detailed User Learning Progress & Completion Tracking
-- - 17. Editorial Versioning & Snapshot History
-- - 18. Editorial Content Review & Peer-Review Workflow
-- - 19. Algorithmic Recommendations RPC Engine
-- - 20. Granular Row Level Security (RLS) with Role-Based Admin/Editor Protection
-- ====================================================================

-- 0. USER ROLES INFRASTRUCTURE (Integrate with existing public.profiles)
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'editor', 'admin'));

CREATE OR REPLACE FUNCTION public.is_admin_or_editor()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role IN ('editor', 'admin')
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 1. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.psychology_categories (
  id TEXT PRIMARY KEY, -- e.g. 'cognitive_biases', 'persuasion_influence'
  slug TEXT UNIQUE NOT NULL,
  icon_name TEXT NOT NULL DEFAULT 'Brain',
  accent_color TEXT NOT NULL DEFAULT 'violet',
  display_order INTEGER NOT NULL DEFAULT 0,
  is_active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psychology_categories_slug ON public.psychology_categories(slug);
CREATE INDEX IF NOT EXISTS idx_psychology_categories_order ON public.psychology_categories(display_order ASC);

-- 2. CATEGORY TRANSLATIONS (13 Indian languages + Hinglish)
CREATE TABLE IF NOT EXISTS public.psychology_category_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id TEXT NOT NULL REFERENCES public.psychology_categories(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL, -- 'en', 'hinglish', 'hi', 'gu', 'mr', 'te', 'ta', 'kn', 'ml', 'bn', 'pa', 'ur', 'or', 'as'
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (category_id, language_code)
);

CREATE INDEX IF NOT EXISTS idx_psych_cat_trans_lang ON public.psychology_category_translations(category_id, language_code);

-- 3. CANONICAL TOPICS TABLE
CREATE TABLE IF NOT EXISTS public.psychology_topics (
  id TEXT PRIMARY KEY, -- e.g. 'confirmation_bias'
  category_id TEXT NOT NULL REFERENCES public.psychology_categories(id) ON DELETE RESTRICT,
  slug TEXT UNIQUE NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')) DEFAULT 'beginner',
  estimated_reading_minutes INTEGER NOT NULL DEFAULT 4,
  featured_image_url TEXT,
  scientific_consensus_tier TEXT NOT NULL CHECK (scientific_consensus_tier IN ('established', 'debated', 'myth_debunked')) DEFAULT 'established',
  publication_status TEXT NOT NULL CHECK (publication_status IN ('draft', 'review', 'published', 'archived')) DEFAULT 'published',
  published_at TIMESTAMPTZ DEFAULT NOW(),
  sort_weight INTEGER NOT NULL DEFAULT 0,
  view_count BIGINT NOT NULL DEFAULT 0,
  share_count BIGINT NOT NULL DEFAULT 0,
  bookmark_count BIGINT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_topics_slug ON public.psychology_topics(slug);
CREATE INDEX IF NOT EXISTS idx_psych_topics_cat_pub ON public.psychology_topics(category_id, publication_status, sort_weight ASC);
CREATE INDEX IF NOT EXISTS idx_psych_topics_published_at ON public.psychology_topics(published_at DESC) WHERE publication_status = 'published';

-- 4. TOPIC TRANSLATIONS TABLE (Core multilingual content + Hinglish)
CREATE TABLE IF NOT EXISTS public.psychology_topic_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  short_description TEXT NOT NULL,
  one_line_explanation TEXT,
  summary_60s TEXT NOT NULL,
  core_concept TEXT,
  how_it_works TEXT,
  why_it_happens TEXT,
  where_you_encounter_it TEXT,
  common_misconceptions TEXT,
  visual_explanation JSONB,
  research_summary TEXT,
  limitations_and_controversies TEXT,
  how_to_recognize TEXT,
  how_to_respond TEXT,
  psychological_defenses JSONB NOT NULL DEFAULT '[]'::JSONB,
  reflection_prompt TEXT,
  quick_takeaways JSONB NOT NULL DEFAULT '[]'::JSONB,
  deep_explanation TEXT NOT NULL,
  evolutionary_mechanism TEXT,
  seo_title TEXT,
  seo_description TEXT,
  canonical_url TEXT,
  og_image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (topic_id, language_code)
);

CREATE INDEX IF NOT EXISTS idx_psych_topic_trans_lookup ON public.psychology_topic_translations(topic_id, language_code);

-- Safe Alterations for Topic Translations (30-second summary)
ALTER TABLE public.psychology_topic_translations ADD COLUMN IF NOT EXISTS summary_30s TEXT;

-- 5. MODULAR SECTIONS (Progressive disclosure content blocks)
CREATE TABLE IF NOT EXISTS public.psychology_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL CHECK (section_type IN ('summary', 'deep_dive', 'mechanism', 'misconception', 'defense', 'reflection', 'custom')),
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_sections_topic ON public.psychology_sections(topic_id, display_order ASC);

-- 6. SECTION TRANSLATIONS
CREATE TABLE IF NOT EXISTS public.psychology_section_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID NOT NULL REFERENCES public.psychology_sections(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  heading TEXT,
  body_markdown TEXT NOT NULL,
  callout_box JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (section_id, language_code)
);

-- 7. CONCRETE EXAMPLES
CREATE TABLE IF NOT EXISTS public.psychology_examples (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  domain TEXT NOT NULL CHECK (domain IN ('personal_finance', 'workplace', 'relationships', 'health', 'social_media', 'general')) DEFAULT 'general',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_examples_topic ON public.psychology_examples(topic_id, display_order ASC);

CREATE TABLE IF NOT EXISTS public.psychology_example_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  example_id UUID NOT NULL REFERENCES public.psychology_examples(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  takeaway TEXT,
  UNIQUE (example_id, language_code)
);

-- 8. REAL-WORLD SCENARIOS (Indian context & relatable life situations)
CREATE TABLE IF NOT EXISTS public.psychology_scenarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  scenario_type TEXT NOT NULL CHECK (scenario_type IN ('indian_context', 'workplace', 'personal_finance', 'social_media', 'interpersonal', 'general')) DEFAULT 'indian_context',
  display_order INTEGER NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_scenarios_topic ON public.psychology_scenarios(topic_id, display_order ASC);

-- 9. SCENARIO TRANSLATIONS
CREATE TABLE IF NOT EXISTS public.psychology_scenario_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  scenario_id UUID NOT NULL REFERENCES public.psychology_scenarios(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  narrative_context TEXT NOT NULL,
  bias_in_action TEXT NOT NULL,
  optimal_response TEXT NOT NULL,
  reflection_prompt TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (scenario_id, language_code)
);

-- 10. PRACTICE QUESTIONS ("Spot the Bias / Manipulation")
CREATE TABLE IF NOT EXISTS public.psychology_practice_questions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')) DEFAULT 'medium',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_questions_topic ON public.psychology_practice_questions(topic_id, display_order ASC);
ALTER TABLE public.psychology_practice_questions ADD COLUMN IF NOT EXISTS question_format TEXT CHECK (question_format IN ('identify_bias', 'identify_influence_principle', 'choose_best_explanation', 'scenario_analysis', 'misconception_detection', 'what_would_you_do', 'compare_situations')) DEFAULT 'identify_bias';

-- 11. QUESTION TRANSLATIONS
CREATE TABLE IF NOT EXISTS public.psychology_question_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES public.psychology_practice_questions(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  prompt TEXT NOT NULL,
  scenario_text TEXT,
  explanation TEXT NOT NULL,
  antidote_advice TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (question_id, language_code)
);

-- 12. QUESTION OPTIONS
CREATE TABLE IF NOT EXISTS public.psychology_question_options (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question_id UUID NOT NULL REFERENCES public.psychology_practice_questions(id) ON DELETE CASCADE,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  display_order INTEGER NOT NULL DEFAULT 0
);

CREATE INDEX IF NOT EXISTS idx_psych_options_question ON public.psychology_question_options(question_id, display_order ASC);

-- 13. QUESTION OPTION TRANSLATIONS
CREATE TABLE IF NOT EXISTS public.psychology_option_translations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  option_id UUID NOT NULL REFERENCES public.psychology_question_options(id) ON DELETE CASCADE,
  language_code TEXT NOT NULL,
  option_text TEXT NOT NULL,
  feedback_text TEXT,
  UNIQUE (option_id, language_code)
);

-- 14. USER PRACTICE ATTEMPTS (Granular user answers & accuracy tracking)
CREATE TABLE IF NOT EXISTS public.psychology_practice_attempts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  question_id UUID NOT NULL REFERENCES public.psychology_practice_questions(id) ON DELETE CASCADE,
  selected_option_id UUID NOT NULL REFERENCES public.psychology_question_options(id) ON DELETE CASCADE,
  is_correct BOOLEAN NOT NULL,
  time_spent_ms INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_attempts_user ON public.psychology_practice_attempts(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_psych_attempts_question ON public.psychology_practice_attempts(question_id);

-- 15. SCIENTIFIC REFERENCES & SOURCES
CREATE TABLE IF NOT EXISTS public.psychology_references (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  citation TEXT NOT NULL,
  authors TEXT,
  publication_year INTEGER,
  journal_or_publisher TEXT,
  doi_or_url TEXT,
  evidence_strength TEXT NOT NULL CHECK (evidence_strength IN ('peer_reviewed_meta_analysis', 'empirical_study', 'foundational_book', 'working_paper')) DEFAULT 'empirical_study',
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_refs_topic ON public.psychology_references(topic_id, display_order ASC);

-- Safe Alterations for Scientific References
ALTER TABLE public.psychology_references ADD COLUMN IF NOT EXISTS title TEXT;
ALTER TABLE public.psychology_references ADD COLUMN IF NOT EXISTS source_type TEXT CHECK (source_type IN ('systematic_review', 'meta_analysis', 'peer_reviewed_journal', 'academic_textbook', 'scientific_institution', 'replication_study')) DEFAULT 'peer_reviewed_journal';
ALTER TABLE public.psychology_references ADD COLUMN IF NOT EXISTS relevance_summary TEXT;
ALTER TABLE public.psychology_references ADD COLUMN IF NOT EXISTS consensus_status TEXT CHECK (consensus_status IN ('established', 'emerging', 'mixed_or_debated', 'replicated_limitation')) DEFAULT 'established';

-- 16. TAGS & TOPIC-TAG RELATIONSHIPS
CREATE TABLE IF NOT EXISTS public.psychology_tags (
  id TEXT PRIMARY KEY, -- e.g. 'heuristics', 'social_proof'
  name TEXT NOT NULL,
  category TEXT DEFAULT 'general',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.psychology_topic_tags (
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  tag_id TEXT NOT NULL REFERENCES public.psychology_tags(id) ON DELETE CASCADE,
  PRIMARY KEY (topic_id, tag_id)
);

CREATE INDEX IF NOT EXISTS idx_psych_topic_tags_tag ON public.psychology_topic_tags(tag_id);

-- 17. RELATED TOPICS GRAPH
CREATE TABLE IF NOT EXISTS public.psychology_related_topics (
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  related_topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  relationship_type TEXT NOT NULL CHECK (relationship_type IN ('frequently_confused_with', 'counteracted_by', 'amplified_by', 'foundational_to', 'general_related')) DEFAULT 'general_related',
  PRIMARY KEY (topic_id, related_topic_id)
);

CREATE INDEX IF NOT EXISTS idx_psych_related_lookup ON public.psychology_related_topics(related_topic_id);

-- 18. IMAGES & VISUAL ASSETS
CREATE TABLE IF NOT EXISTS public.psychology_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT REFERENCES public.psychology_topics(id) ON DELETE SET NULL,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL,
  caption TEXT,
  attribution TEXT,
  license_type TEXT DEFAULT 'original',
  width INTEGER,
  height INTEGER,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_images_topic ON public.psychology_images(topic_id);

-- 19. USER REACTIONS (Anti-spam: Exactly 1 active reaction per user per topic, modifiable)
CREATE TABLE IF NOT EXISTS public.psychology_reactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  reaction_type TEXT NOT NULL CHECK (reaction_type IN ('helpful', 'interesting', 'surprising', 'learned', 'thinking')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, topic_id)
);

CREATE INDEX IF NOT EXISTS idx_psych_reactions_topic ON public.psychology_reactions(topic_id, reaction_type);

-- 20. USER BOOKMARKS
CREATE TABLE IF NOT EXISTS public.psychology_bookmarks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (user_id, topic_id)
);

CREATE INDEX IF NOT EXISTS idx_psych_bookmarks_user ON public.psychology_bookmarks(user_id, created_at DESC);

-- 21. SHARE TRACKING (Aggregate & Privacy-Preserving)
CREATE TABLE IF NOT EXISTS public.psychology_shares (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  platform TEXT NOT NULL CHECK (platform IN ('whatsapp', 'twitter', 'telegram', 'linkedin', 'clipboard', 'native_share', 'other')) DEFAULT 'native_share',
  language_code TEXT DEFAULT 'en',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_shares_topic ON public.psychology_shares(topic_id, created_at DESC);

-- 22. USER LEARNING PROGRESS
CREATE TABLE IF NOT EXISTS public.psychology_user_progress (
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('not_started', 'in_progress', 'completed')) DEFAULT 'not_started',
  completion_percent INTEGER NOT NULL DEFAULT 0 CHECK (completion_percent >= 0 AND completion_percent <= 100),
  sections_viewed JSONB NOT NULL DEFAULT '[]'::JSONB,
  practice_attempted BOOLEAN NOT NULL DEFAULT FALSE,
  practice_score INTEGER,
  first_viewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_viewed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  PRIMARY KEY (user_id, topic_id)
);

CREATE INDEX IF NOT EXISTS idx_psych_progress_user ON public.psychology_user_progress(user_id, last_viewed_at DESC);

-- 23. EDITORIAL CONTENT VERSIONS
CREATE TABLE IF NOT EXISTS public.psychology_content_versions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  version_number INTEGER NOT NULL,
  editor_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  change_summary TEXT,
  content_snapshot JSONB NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_versions_topic ON public.psychology_content_versions(topic_id, version_number DESC);

-- Safe Alterations for Content Versioning & Audit
ALTER TABLE public.psychology_content_versions ADD COLUMN IF NOT EXISTS review_status TEXT CHECK (review_status IN ('draft', 'in_review', 'verified', 'archived')) DEFAULT 'draft';
ALTER TABLE public.psychology_content_versions ADD COLUMN IF NOT EXISTS sources JSONB DEFAULT '[]'::JSONB;
ALTER TABLE public.psychology_content_versions ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- 24. EDITORIAL CONTENT REVIEWS (Publishing & Fact-Checking Workflow)
CREATE TABLE IF NOT EXISTS public.psychology_content_reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id TEXT NOT NULL REFERENCES public.psychology_topics(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  review_status TEXT NOT NULL CHECK (review_status IN ('pending', 'approved', 'rejected', 'revision_requested')) DEFAULT 'pending',
  review_tier TEXT NOT NULL CHECK (review_tier IN ('editorial', 'scientific_fact_check', 'cultural_sensitivity')) DEFAULT 'editorial',
  feedback_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_psych_reviews_topic ON public.psychology_content_reviews(topic_id, review_status);

-- ====================================================================
-- TRIGGERS FOR AGGREGATE COUNTS & METRICS
-- ====================================================================

-- Trigger: Maintain psychology_topics.bookmark_count
CREATE OR REPLACE FUNCTION public.handle_psychology_bookmark_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE public.psychology_topics
    SET bookmark_count = bookmark_count + 1
    WHERE id = NEW.topic_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE public.psychology_topics
    SET bookmark_count = GREATEST(0, bookmark_count - 1)
    WHERE id = OLD.topic_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_psych_bookmark_count ON public.psychology_bookmarks;
CREATE TRIGGER trg_psych_bookmark_count
AFTER INSERT OR DELETE ON public.psychology_bookmarks
FOR EACH ROW EXECUTE FUNCTION public.handle_psychology_bookmark_count();

-- Trigger: Maintain psychology_topics.share_count
CREATE OR REPLACE FUNCTION public.handle_psychology_share_count()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE public.psychology_topics
  SET share_count = share_count + 1
  WHERE id = NEW.topic_id;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS trg_psych_share_count ON public.psychology_shares;
CREATE TRIGGER trg_psych_share_count
AFTER INSERT ON public.psychology_shares
FOR EACH ROW EXECUTE FUNCTION public.handle_psychology_share_count();

-- Atomic RPC to increment view count without race conditions
CREATE OR REPLACE FUNCTION public.increment_psychology_topic_view(topic_id_param TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE public.psychology_topics
  SET view_count = view_count + 1
  WHERE id = topic_id_param;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ====================================================================
-- RECOMMENDATIONS ENGINE (Personalized Topic Discovery)
-- ====================================================================
CREATE OR REPLACE FUNCTION public.get_psychology_recommendations(
  p_user_id UUID,
  p_limit INTEGER DEFAULT 6
)
RETURNS TABLE (
  topic_id TEXT,
  category_id TEXT,
  slug TEXT,
  difficulty TEXT,
  estimated_reading_minutes INTEGER,
  reason TEXT
) AS $$
BEGIN
  RETURN QUERY
  WITH user_completed AS (
    SELECT p.topic_id
    FROM public.psychology_user_progress p
    WHERE p.user_id = p_user_id AND p.status = 'completed'
  ),
  related_recs AS (
    SELECT 
      t.id AS topic_id,
      t.category_id,
      t.slug,
      t.difficulty,
      t.estimated_reading_minutes,
      'related_to_learned' AS reason,
      t.sort_weight
    FROM public.psychology_related_topics r
    JOIN public.psychology_topics t ON t.id = r.related_topic_id
    WHERE r.topic_id IN (SELECT topic_id FROM user_completed)
      AND t.id NOT IN (SELECT topic_id FROM user_completed)
      AND t.publication_status = 'published'
  ),
  general_popular AS (
    SELECT 
      t.id AS topic_id,
      t.category_id,
      t.slug,
      t.difficulty,
      t.estimated_reading_minutes,
      'popular_foundational' AS reason,
      t.sort_weight
    FROM public.psychology_topics t
    WHERE t.id NOT IN (SELECT topic_id FROM user_completed)
      AND t.publication_status = 'published'
  )
  SELECT 
    sub.topic_id,
    sub.category_id,
    sub.slug,
    sub.difficulty,
    sub.estimated_reading_minutes,
    sub.reason
  FROM (
    SELECT * FROM related_recs
    UNION ALL
    SELECT * FROM general_popular
  ) sub
  GROUP BY sub.topic_id, sub.category_id, sub.slug, sub.difficulty, sub.estimated_reading_minutes, sub.reason, sub.sort_weight
  ORDER BY sub.sort_weight ASC, sub.topic_id ASC
  LIMIT p_limit;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

-- Enable RLS on all psychology tables
ALTER TABLE public.psychology_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_category_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_topic_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_section_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_examples ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_example_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_scenario_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_practice_questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_question_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_question_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_option_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_practice_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_references ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_topic_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_related_topics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_reactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_shares ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_content_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.psychology_content_reviews ENABLE ROW LEVEL SECURITY;

-- 1. PUBLIC READ POLICIES (All published content is publicly accessible)
DROP POLICY IF EXISTS "Public can view active categories" ON public.psychology_categories;
CREATE POLICY "Public can view active categories"
  ON public.psychology_categories FOR SELECT
  USING (is_active = true);

DROP POLICY IF EXISTS "Public can view category translations" ON public.psychology_category_translations;
CREATE POLICY "Public can view category translations"
  ON public.psychology_category_translations FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view published topics" ON public.psychology_topics;
CREATE POLICY "Public can view published topics"
  ON public.psychology_topics FOR SELECT
  USING (publication_status = 'published');

DROP POLICY IF EXISTS "Public can view topic translations of published topics" ON public.psychology_topic_translations;
CREATE POLICY "Public can view topic translations of published topics"
  ON public.psychology_topic_translations FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.psychology_topics t
    WHERE t.id = topic_id AND t.publication_status = 'published'
  ));

DROP POLICY IF EXISTS "Public can view sections of published topics" ON public.psychology_sections;
CREATE POLICY "Public can view sections of published topics"
  ON public.psychology_sections FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.psychology_topics t
    WHERE t.id = topic_id AND t.publication_status = 'published'
  ));

DROP POLICY IF EXISTS "Public can view section translations" ON public.psychology_section_translations;
CREATE POLICY "Public can view section translations"
  ON public.psychology_section_translations FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view examples of published topics" ON public.psychology_examples;
CREATE POLICY "Public can view examples of published topics"
  ON public.psychology_examples FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.psychology_topics t
    WHERE t.id = topic_id AND t.publication_status = 'published'
  ));

DROP POLICY IF EXISTS "Public can view example translations" ON public.psychology_example_translations;
CREATE POLICY "Public can view example translations"
  ON public.psychology_example_translations FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view scenarios of published topics" ON public.psychology_scenarios;
CREATE POLICY "Public can view scenarios of published topics"
  ON public.psychology_scenarios FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.psychology_topics t
    WHERE t.id = topic_id AND t.publication_status = 'published'
  ));

DROP POLICY IF EXISTS "Public can view scenario translations" ON public.psychology_scenario_translations;
CREATE POLICY "Public can view scenario translations"
  ON public.psychology_scenario_translations FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view questions of published topics" ON public.psychology_practice_questions;
CREATE POLICY "Public can view questions of published topics"
  ON public.psychology_practice_questions FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.psychology_topics t
    WHERE t.id = topic_id AND t.publication_status = 'published'
  ));

DROP POLICY IF EXISTS "Public can view question translations" ON public.psychology_question_translations;
CREATE POLICY "Public can view question translations"
  ON public.psychology_question_translations FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view question options" ON public.psychology_question_options;
CREATE POLICY "Public can view question options"
  ON public.psychology_question_options FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view option translations" ON public.psychology_option_translations;
CREATE POLICY "Public can view option translations"
  ON public.psychology_option_translations FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view references of published topics" ON public.psychology_references;
CREATE POLICY "Public can view references of published topics"
  ON public.psychology_references FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM public.psychology_topics t
    WHERE t.id = topic_id AND t.publication_status = 'published'
  ));

DROP POLICY IF EXISTS "Public can view tags" ON public.psychology_tags;
CREATE POLICY "Public can view tags"
  ON public.psychology_tags FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view topic tags" ON public.psychology_topic_tags;
CREATE POLICY "Public can view topic tags"
  ON public.psychology_topic_tags FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view related topics" ON public.psychology_related_topics;
CREATE POLICY "Public can view related topics"
  ON public.psychology_related_topics FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can view topic images" ON public.psychology_images;
CREATE POLICY "Public can view topic images"
  ON public.psychology_images FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Public can read reaction aggregates" ON public.psychology_reactions;
CREATE POLICY "Public can read reaction aggregates"
  ON public.psychology_reactions FOR SELECT
  USING (true);

-- 2. USER BOOKMARKS POLICIES
DROP POLICY IF EXISTS "Users can view own bookmarks" ON public.psychology_bookmarks;
CREATE POLICY "Users can view own bookmarks"
  ON public.psychology_bookmarks FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own bookmarks" ON public.psychology_bookmarks;
CREATE POLICY "Users can insert own bookmarks"
  ON public.psychology_bookmarks FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own bookmarks" ON public.psychology_bookmarks;
CREATE POLICY "Users can delete own bookmarks"
  ON public.psychology_bookmarks FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- 3. USER REACTIONS POLICIES
DROP POLICY IF EXISTS "Users can manage own reaction" ON public.psychology_reactions;
CREATE POLICY "Users can manage own reaction"
  ON public.psychology_reactions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own reaction" ON public.psychology_reactions;
CREATE POLICY "Users can update own reaction"
  ON public.psychology_reactions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can remove own reaction" ON public.psychology_reactions;
CREATE POLICY "Users can remove own reaction"
  ON public.psychology_reactions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- 4. USER PROGRESS POLICIES
DROP POLICY IF EXISTS "Users can view own progress" ON public.psychology_user_progress;
CREATE POLICY "Users can view own progress"
  ON public.psychology_user_progress FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own progress" ON public.psychology_user_progress;
CREATE POLICY "Users can insert own progress"
  ON public.psychology_user_progress FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own progress" ON public.psychology_user_progress;
CREATE POLICY "Users can update own progress"
  ON public.psychology_user_progress FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- 5. USER PRACTICE ATTEMPTS POLICIES
DROP POLICY IF EXISTS "Users can view own practice attempts" ON public.psychology_practice_attempts;
CREATE POLICY "Users can view own practice attempts"
  ON public.psychology_practice_attempts FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can log own practice attempt" ON public.psychology_practice_attempts;
CREATE POLICY "Users can log own practice attempt"
  ON public.psychology_practice_attempts FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- 6. SHARE TRACKING (Append-only & Privacy-Preserving)
DROP POLICY IF EXISTS "Public can log shares" ON public.psychology_shares;
CREATE POLICY "Public can log shares"
  ON public.psychology_shares FOR INSERT
  WITH CHECK (true);

DROP POLICY IF EXISTS "Public can view aggregate shares" ON public.psychology_shares;
CREATE POLICY "Public can view aggregate shares"
  ON public.psychology_shares FOR SELECT
  USING (true);

-- 7. ADMIN / EDITOR POLICIES (Enforce server-side role check)
DROP POLICY IF EXISTS "Admins manage categories" ON public.psychology_categories;
CREATE POLICY "Admins manage categories"
  ON public.psychology_categories FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage category translations" ON public.psychology_category_translations;
CREATE POLICY "Admins manage category translations"
  ON public.psychology_category_translations FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage topics" ON public.psychology_topics;
CREATE POLICY "Admins manage topics"
  ON public.psychology_topics FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage topic translations" ON public.psychology_topic_translations;
CREATE POLICY "Admins manage topic translations"
  ON public.psychology_topic_translations FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage sections" ON public.psychology_sections;
CREATE POLICY "Admins manage sections"
  ON public.psychology_sections FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage section translations" ON public.psychology_section_translations;
CREATE POLICY "Admins manage section translations"
  ON public.psychology_section_translations FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage examples" ON public.psychology_examples;
CREATE POLICY "Admins manage examples"
  ON public.psychology_examples FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage example translations" ON public.psychology_example_translations;
CREATE POLICY "Admins manage example translations"
  ON public.psychology_example_translations FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage scenarios" ON public.psychology_scenarios;
CREATE POLICY "Admins manage scenarios"
  ON public.psychology_scenarios FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage scenario translations" ON public.psychology_scenario_translations;
CREATE POLICY "Admins manage scenario translations"
  ON public.psychology_scenario_translations FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage practice questions" ON public.psychology_practice_questions;
CREATE POLICY "Admins manage practice questions"
  ON public.psychology_practice_questions FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage question translations" ON public.psychology_question_translations;
CREATE POLICY "Admins manage question translations"
  ON public.psychology_question_translations FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage question options" ON public.psychology_question_options;
CREATE POLICY "Admins manage question options"
  ON public.psychology_question_options FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage option translations" ON public.psychology_option_translations;
CREATE POLICY "Admins manage option translations"
  ON public.psychology_option_translations FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage references" ON public.psychology_references;
CREATE POLICY "Admins manage references"
  ON public.psychology_references FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage tags" ON public.psychology_tags;
CREATE POLICY "Admins manage tags"
  ON public.psychology_tags FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage topic tags" ON public.psychology_topic_tags;
CREATE POLICY "Admins manage topic tags"
  ON public.psychology_topic_tags FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage related topics" ON public.psychology_related_topics;
CREATE POLICY "Admins manage related topics"
  ON public.psychology_related_topics FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage images" ON public.psychology_images;
CREATE POLICY "Admins manage images"
  ON public.psychology_images FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage content versions" ON public.psychology_content_versions;
CREATE POLICY "Admins manage content versions"
  ON public.psychology_content_versions FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

DROP POLICY IF EXISTS "Admins manage content reviews" ON public.psychology_content_reviews;
CREATE POLICY "Admins manage content reviews"
  ON public.psychology_content_reviews FOR ALL
  TO authenticated
  USING (public.is_admin_or_editor())
  WITH CHECK (public.is_admin_or_editor());

-- ====================================================================
-- SEED DATA: 8 Core Categories + Initial Confirmation Bias Topic
-- ====================================================================

INSERT INTO public.psychology_categories (id, slug, icon_name, accent_color, display_order)
VALUES
  ('cognitive_biases', 'cognitive-biases', 'Brain', 'violet', 1),
  ('social_psychology', 'social-psychology', 'Users', 'blue', 2),
  ('persuasion_influence', 'persuasion-and-influence', 'Eye', 'indigo', 3),
  ('manipulation_awareness', 'manipulation-awareness', 'ShieldAlert', 'rose', 4),
  ('decision_making', 'decision-making', 'Scale', 'amber', 5),
  ('emotions', 'emotions-and-regulation', 'Heart', 'red', 6),
  ('relationships_comm', 'relationships-and-communication', 'HeartHandshake', 'pink', 7),
  ('social_media_tech', 'social-media-psychology', 'Radio', 'cyan', 8),
  ('consumer_advertising', 'consumer-and-advertising-psychology', 'ShoppingBag', 'orange', 9),
  ('learning_psychology', 'learning-psychology', 'Sparkles', 'emerald', 10),
  ('critical_thinking', 'critical-thinking', 'Compass', 'teal', 11)
ON CONFLICT (id) DO NOTHING;

-- Category Translations: English and Hinglish for all 10 Primary Areas + Critical Thinking
INSERT INTO public.psychology_category_translations (category_id, language_code, title, subtitle, description)
VALUES
  -- 1. Cognitive Biases
  ('cognitive_biases', 'en', 'Cognitive Biases', 'Systematic deviations from rationality in human judgment.', 'Learn how the brain takes mental shortcuts (heuristics) that lead to predictable perception errors.'),
  ('cognitive_biases', 'hinglish', 'Cognitive Biases', 'Humara dimaag decisions lete waqt kaunse shortcuts leta hai.', 'Janiye kaise dimaag ki natural tendencies hume galat conclusions aur judgments tak le jati hain.'),

  -- 2. Social Psychology
  ('social_psychology', 'en', 'Social Psychology', 'How real or imagined presence of others shapes human behavior.', 'Explore conformity, social proof, bystander intervention, obedience, and collective dynamics.'),
  ('social_psychology', 'hinglish', 'Social Psychology', 'Logon ki presence humari thinking aur actions ko kaise badalti hai.', 'Samjhein social proof, bheed ka asar (conformity), aur groups me decision lene ke scientific patterns.'),

  -- 3. Persuasion & Influence
  ('persuasion_influence', 'en', 'Persuasion & Influence', 'The science of how attitudes and behaviors are shaped ethically.', 'Scientifically validated principles: reciprocity, scarcity, commitment, liking, and social proof.'),
  ('persuasion_influence', 'hinglish', 'Persuasion & Influence', 'Log doosron ko kaise convince aur influence karte hain.', 'Cialdini ke core principles aur social influence ke scientific rules seekhein, ethical boundaries ke sath.'),

  -- 4. Manipulation Awareness
  ('manipulation_awareness', 'en', 'Manipulation Awareness', 'Recognize emotional coercion while understanding context.', 'Build psychological immunity against guilt-tripping and gaslighting, while distinguishing malice from poor communication.'),
  ('manipulation_awareness', 'hinglish', 'Manipulation Awareness', 'Emotional manipulation aur pressure tactics ko pehchanein.', 'Seekhein kaise guilt-tripping aur gaslighting se bachein, aur samjhein ki kab baat sirf misunderstanding hai.'),

  -- 5. Decision Making
  ('decision_making', 'en', 'Decision Making', 'Risk evaluation, uncertainty intuition, and choice architecture.', 'Understand overconfidence, probability misjudgments, the planning fallacy, and sunk-cost traps.'),
  ('decision_making', 'hinglish', 'Decision Making', 'Accurate aur rational decisions lene ki mental frameworks.', 'Risk, uncertainty, aur planning fallacy ko samjhkar bade decisions me expensive galtiyo se bachein.'),

  -- 6. Emotions
  ('emotions', 'en', 'Emotions & Regulation', 'Neurobiology of feelings, triggers, motivation, and regulation.', 'Master cognitive reappraisal, understand amygdala activation, and build emotional resilience without toxic suppression.'),
  ('emotions', 'hinglish', 'Emotions & Regulation', 'Feelings, stress aur emotional triggers ka scientific control.', 'Gusse, darr aur motivation ke biological reasons samjhein aur seekhein unhe rationally regulate karna.'),

  -- 7. Relationships & Communication
  ('relationships_comm', 'en', 'Relationships & Communication', 'Assertiveness, boundaries, active listening, and conflict.', 'Non-pathologizing, evidence-based frameworks to express boundaries and resolve interpersonal friction cleanly.'),
  ('relationships_comm', 'hinglish', 'Relationships & Communication', 'Healthy boundaries aur effective communication ka science.', 'Seekhein bina rude huye "Na" bolna, active listening, aur misunderstanding ko clear karne ke tareeqe.'),

  -- 8. Social Media Psychology
  ('social_media_tech', 'en', 'Social Media Psychology', 'Algorithmic reinforcement, variable rewards, and attention economics.', 'Understand how notification loops, moral outrage contagion, and infinite scrolls hijack neurochemical reward pathways.'),
  ('social_media_tech', 'hinglish', 'Social Media Psychology', 'Apps aur algorithms hamare attention ko kaise capture karte hain.', 'Dopamine reward loops, infinite scroll aur online outrage ke piche ki psychology samjhein.'),

  -- 9. Consumer & Advertising Psychology
  ('consumer_advertising', 'en', 'Advertising & Consumer Psychology', 'Anchoring, decoy effects, default biases, and retail nudges.', 'Detect commercial persuasion tactics such as fake countdown timers, strike-through pricing, and menu decoy options.'),
  ('consumer_advertising', 'hinglish', 'Consumer & Advertising Psychology', 'Brands aur ads humse paise kharch karwane ke liye kya karte hain.', 'Pricing tricks, fake discount tags, aur decoy options ko pehchan kar smart consumer banein.'),

  -- 10. Learning Psychology
  ('learning_psychology', 'en', 'Learning Psychology', 'Retrieval practice, spacing, cognitive load, and deliberate training.', 'Directly connects with Mentalab calculation mastery: the cognitive science of memory consolidation and rapid skill acquisition.'),
  ('learning_psychology', 'hinglish', 'Learning Psychology', 'Dimaag nayi cheezein kaise seekhta aur yaad rakhta hai.', 'Retrieval practice, spaced repetition aur Mentalab speed drills ka scientific connection samjhein.'),

  -- 11. Critical Thinking
  ('critical_thinking', 'en', 'Critical Thinking', 'First-principles reasoning, falsification, and mental models.', 'Learn to separate personal identity from hypotheses, detect logical fallacies, and stress-test assumptions.'),
  ('critical_thinking', 'hinglish', 'Critical Thinking', 'Clear thinking, logic aur mental models ka practical guide.', 'Har information ko blind trust karne ke bajaye scientific tareeqe se question karna seekhein.')
ON CONFLICT (category_id, language_code) DO NOTHING;

-- Seed Canonical Topic: Confirmation Bias
INSERT INTO public.psychology_topics (
  id,
  category_id,
  slug,
  difficulty,
  estimated_reading_minutes,
  scientific_consensus_tier,
  publication_status,
  published_at
)
VALUES (
  'confirmation_bias',
  'cognitive_biases',
  'confirmation-bias',
  'beginner',
  4,
  'established',
  'published',
  NOW()
)
ON CONFLICT (id) DO NOTHING;

-- Seed Topic Translations: English & Hinglish
INSERT INTO public.psychology_topic_translations (
  topic_id,
  language_code,
  title,
  subtitle,
  short_description,
  summary_60s,
  quick_takeaways,
  deep_explanation,
  evolutionary_mechanism,
  why_it_happens,
  where_you_encounter_it,
  common_misconceptions,
  psychological_defenses,
  seo_title,
  seo_description
)
VALUES
  (
    'confirmation_bias',
    'en',
    'Confirmation Bias',
    'Why we seek what we already believe',
    'The natural psychological tendency to search for, interpret, and recall information that confirms preexisting beliefs while dismissing contradictory evidence.',
    'Confirmation bias is our brain''s habit of acting like a defense lawyer rather than an impartial judge. When we hold a belief, we actively search for facts that support it, interpret neutral data in our favor, and forget or discredit counter-arguments.',
    '["People give disproportionate weight to evidence confirming their hypothesis", "Negative or disconfirming data is viewed with excessive skepticism", "Echo chambers amplify this bias exponentially on digital platforms"]'::JSONB,
    'First formally identified in cognitive psychology by Peter Wason in 1960, confirmation bias occurs across three distinct cognitive dimensions: selective search (only reading supportive media), selective interpretation (reading ambiguity as proof), and selective recall (remembering successes while forgetting failures).',
    'Our evolutionary ancestors relied on tribal consensus for physical protection. Constantly overhauling core beliefs whenever conflicting data emerged wasted critical metabolic resources and risked alienation from the tribe.',
    'Cognitive economy (saving energy) combined with ego preservation and cognitive dissonance avoidance.',
    'Algorithmic feeds, WhatsApp forwarding chains, financial stock speculation, and political discourse.',
    'Misconception: Confirmation bias only affects unintelligent or uneducated people. Fact: Studies show higher cognitive ability often enables people to rationalize their preexisting biases more elaborately.',
    '[{"title": "Red Teaming", "instruction": "Force yourself to list 3 strong reasons why your current stance could be completely false."}, {"title": "Falsification Testing", "instruction": "Ask: What specific evidence would convince me to change my mind?"}, {"title": "Separate Ego from Hypotheses", "instruction": "Treat beliefs as testable models rather than components of your identity."}]'::JSONB,
    'What is Confirmation Bias? Scientific Explanation & Cognitive Defenses | Mentalab Mind',
    'Understand how confirmation bias distorts decisions and learn 3 science-backed cognitive defenses to think independently.'
  ),
  (
    'confirmation_bias',
    'hinglish',
    'Confirmation Bias',
    'Hum wahi kyu dhundte hain jo hum pehle se mante hain?',
    'Apne pehle se bane vichaaron ko sahi sabit karne wali information ko chunna aur opposite proofs ko ignore kar dena.',
    'Confirmation bias tab hota hai jab hamara dimaag ek impartial judge banne ke bajaye ek defense lawyer ban jata hai. Hum wahi news, videos aur WhatsApp messages share karte hain jo hamari baat ko support karein, aur contrary evidence ko dekhkar bhi ignore kar dete hain.',
    '["Apne belief ko support karne wali baat par turant vishwas ho jata hai", "Opposite evidence dekhkar dimaag excuse ya kamiya dhundne lagta hai", "Social media algorithms hamari is aadat ko aur badha dete hain"]'::JSONB,
    'Confirmation bias teen tareeqo se kaam karta hai: Selective Search (sirf aisi cheezein search karna jo aapke favour me ho), Selective Interpretation (neutral baat ko bhi apne favor me interpret karna), aur Selective Memory (apne favouable results ko yaad rakhna aur opposite results bhool jana).',
    'Purane zamaane me tribal groups me group ke sath agree karna physical survival ke liye zaroori tha. Har bar naya data aane par core belief badalna dimaag ke liye bohot exhausting tha.',
    'Dimaag ka energy bachane ka tareeqa aur cognitive dissonance (mental stress) se bachne ki koshish.',
    'WhatsApp family groups, stock market trading, election debates aur health remedies.',
    'Misconception: Yeh sirf kam padhe-likhe logo ke sath hota hai. Fact: Research dikhati hai ki bohot intelligent log bhi apne biases ko justify karne me aur zyada clever arguments bana lete hain.',
    '[{"title": "Opposite Stance Socho", "instruction": "Bada decision lene se pehle khud se pucho: Agar meri baat galat hai, to sabse bada proof kya hoga?"}, {"title": "Falsification Mindset", "instruction": "Socho: Aisa kaunsa data aayega jiske baad mai apna opinion badal lunga?"}, {"title": "Identity ko Belief se Alag Rakho", "instruction": "Apne opinions ko test karne wale experiments samjhein, apni shaan ya ego nahi."}]'::JSONB,
    'Confirmation Bias Kya Hai? Scientific Explanation & Defenses | Mentalab Mind',
    'Confirmation bias kyu hota hai aur kaise WhatsApp forwards aur social media par hum galat decisions lete hain. Seekhein 3 mental defenses.'
  )
ON CONFLICT (topic_id, language_code) DO NOTHING;

-- Seed Indian Scenario for Confirmation Bias
INSERT INTO public.psychology_scenarios (id, topic_id, scenario_type, display_order, is_featured)
VALUES ('cb000000-0000-0000-0000-000000000001', 'confirmation_bias', 'indian_context', 1, TRUE)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.psychology_scenario_translations (scenario_id, language_code, title, narrative_context, bias_in_action, optimal_response, reflection_prompt)
VALUES
  (
    'cb000000-0000-0000-0000-000000000001',
    'en',
    'The WhatsApp Medical Miracle',
    'Ramesh uncle firmly believes that drinking hot water with lemon and turmeric at 5:00 AM completely cures hypertension. Whenever an unverified YouTube video or WhatsApp message repeats this claim, he immediately forwards it to his family group with the caption: "See, modern doctors will never tell you this!"',
    'When a consulting cardiologist presents clinical trials proving turmeric does not replace blood pressure medication, Ramesh dismisses the doctor as "a greedy agent of big pharma" while continuing to believe anonymous forwarded texts.',
    'Apply the principle of falsification: before trusting medical claims, check whether double-blind clinical trials corroborate the finding or if you are only welcoming the message because it offers an easy, comforting answer.',
    'Have you ever dismissed professional criticism of an idea simply because you liked the idea too much?'
  ),
  (
    'cb000000-0000-0000-0000-000000000001',
    'hinglish',
    'WhatsApp Par Aayi "Desi Miracle" Dawa',
    'Ramesh Uncle ka manna hai ki subah 5 baje neem-haldi ka paani peene se high blood pressure 100% theek ho jata hai. Jab bhi unhe YouTube par koi video ya WhatsApp forward milta hai, wo turant family group me bhejte hain: "Dekho, sab doctors chhupa rahe the!"',
    'Jab ek cardiologist unhe clinical research dikhate hain ki yeh blood pressure medication ka substitute nahi hai, to Ramesh Uncle bolte hain: "Doctor toh apna fayda dekhega hi", aur scientific research ko ignore kar dete hain.',
    'Pehle sochiye: Kya aap is information ko isliye maan rahe hain kyunki yeh sach hai, ya isliye kyunki yeh aasan aur comforting lagti hai? Medical decisions hamesha verified clinical trials par lijiye.',
    'Kya aapne kabhi kisi important decision me isliye opposite advice reject ki kyunki aap already man bana chuke the?'
  )
ON CONFLICT (scenario_id, language_code) DO NOTHING;

-- Seed Practice Question for Confirmation Bias
INSERT INTO public.psychology_practice_questions (id, topic_id, difficulty, display_order)
VALUES ('cb000000-0000-0000-0000-000000000010', 'confirmation_bias', 'medium', 1)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.psychology_question_translations (question_id, language_code, prompt, scenario_text, explanation, antidote_advice)
VALUES
  (
    'cb000000-0000-0000-0000-000000000010',
    'en',
    'Which of the following investment behaviors is the clearest sign of Confirmation Bias?',
    'A retail investor buys shares in Company Z after reading a positive article.',
    'Actively seeking out only cheerleading groups while blocking or dismissing critics who highlight balance sheet debt is the textbook manifestation of confirmation bias.',
    'Before purchasing or holding an asset, read the strongest available bear case written by reputable analysts.'
  ),
  (
    'cb000000-0000-0000-0000-000000000010',
    'hinglish',
    'Inme se kaunsa investor behavior Confirmation Bias ka sabse bada example hai?',
    'Ek investor ne ek article padh kar Company Z ke shares buy kiye.',
    'Sirf aisi communities me rehna jo company ki taareef karein aur debt warning dene walo ko block karna confirmation bias ka clearest symptom hai.',
    'Kisi bhi stock ya asset me invest karne se pehle uski sabse strong bear-case (risk) report padhein.'
  )
ON CONFLICT (question_id, language_code) DO NOTHING;

-- Seed Options for Practice Question
INSERT INTO public.psychology_question_options (id, question_id, is_correct, display_order)
VALUES
  ('cb000000-0000-0000-0000-000000000021', 'cb000000-0000-0000-0000-000000000010', FALSE, 1),
  ('cb000000-0000-0000-0000-000000000022', 'cb000000-0000-0000-0000-000000000010', TRUE, 2),
  ('cb000000-0000-0000-0000-000000000023', 'cb000000-0000-0000-0000-000000000010', FALSE, 3)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.psychology_option_translations (option_id, language_code, option_text, feedback_text)
VALUES
  ('cb000000-0000-0000-0000-000000000021', 'en', 'Reading both the bull-case and bear-case quarterly reports before committing capital.', 'Incorrect. This is an objective, balanced evaluation that counteracts confirmation bias.'),
  ('cb000000-0000-0000-0000-000000000021', 'hinglish', 'Invest karne se pehle company ke positive aur negative dono financial reports dhyan se padhna.', 'Galat. Yeh balanced thinking hai jo confirmation bias ko rokti hai.'),
  ('cb000000-0000-0000-0000-000000000022', 'en', 'Joining only social groups that praise Company Z, while unfollowing anyone who mentions company debt.', 'Correct! This actively filters out counter-evidence to protect the investor''s preexisting optimism.'),
  ('cb000000-0000-0000-0000-000000000022', 'hinglish', 'Sirf un Telegram/YouTube channels me rehna jo Company Z ki tareef karte hain, aur loss ki baat karne walo ko unfollow karna.', 'Sahi! Yeh counter-evidence ko ignore karke apne belief ko force feed karna hai.'),
  ('cb000000-0000-0000-0000-000000000023', 'en', 'Setting an automated stop-loss order to sell if the price drops below a disciplined threshold.', 'Incorrect. A pre-committed automated stop-loss is a rational risk management tool.'),
  ('cb000000-0000-0000-0000-000000000023', 'hinglish', 'Pehle se ek stop-loss set karna taaki stock girne par automatic sell ho jaye.', 'Galat. Yeh ek rational risk management strategy hai.')
ON CONFLICT (option_id, language_code) DO NOTHING;

-- Seed References for Confirmation Bias
INSERT INTO public.psychology_references (
  topic_id,
  title,
  citation,
  authors,
  publication_year,
  journal_or_publisher,
  doi_or_url,
  source_type,
  evidence_strength,
  relevance_summary,
  consensus_status,
  display_order
)
VALUES
  (
    'confirmation_bias',
    'On the failure to eliminate hypotheses in a conceptual task',
    'Wason, P. C. (1960). On the failure to eliminate hypotheses in a conceptual task. Quarterly Journal of Experimental Psychology, 12(3), 129–140.',
    'Peter C. Wason',
    1960,
    'Quarterly Journal of Experimental Psychology',
    'https://doi.org/10.1080/17470216008416717',
    'peer_reviewed_journal',
    'peer_reviewed_meta_analysis',
    'First formal empirical discovery of confirmation bias using the 2-4-6 rule discovery task.',
    'established',
    1
  ),
  (
    'confirmation_bias',
    'Confirmation bias: A ubiquitous phenomenon in many guises',
    'Nickerson, R. S. (1998). Confirmation bias: A ubiquitous phenomenon in many guises. Review of General Psychology, 2(2), 175–220.',
    'Raymond S. Nickerson',
    1998,
    'Review of General Psychology',
    'https://doi.org/10.1037/1089-2680.2.2.175',
    'meta_analysis',
    'peer_reviewed_meta_analysis',
    'Definitive systematic review synthesizing evidence across selective search, interpretation, and recall.',
    'established',
    2
  ),
  (
    'confirmation_bias',
    'Thinking, Fast and Slow',
    'Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.',
    'Daniel Kahneman',
    2011,
    'Farrar, Straus and Giroux',
    'https://us.macmillan.com/books/9780374533557/thinkingfastandslow',
    'academic_textbook',
    'foundational_book',
    'Comprehensive behavioral economics overview of associative coherence and WYSIATI.',
    'established',
    3
  )
ON CONFLICT DO NOTHING;

-- Seed Tags
INSERT INTO public.psychology_tags (id, name, category)
VALUES
  ('cognitive_bias', 'Cognitive Bias', 'discipline'),
  ('decision_making', 'Decision Making', 'skill'),
  ('critical_thinking', 'Critical Thinking', 'skill'),
  ('social_proof', 'Social Proof', 'phenomenon')
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.psychology_topic_tags (topic_id, tag_id)
VALUES
  ('confirmation_bias', 'cognitive_bias'),
  ('confirmation_bias', 'decision_making'),
  ('confirmation_bias', 'critical_thinking')
ON CONFLICT (topic_id, tag_id) DO NOTHING;
