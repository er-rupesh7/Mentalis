/**
 * Mentalab Mind Engagement Engine
 * 
 * High-performance, privacy-first engagement layer:
 * - Anti-spam reactions (❤️ 🧠 😮 💡 🤔) with single-active enforcement & optimistic UI
 * - Bookmarks management with clean saved collection
 * - Multi-target native and web social sharing (Web Share, WhatsApp, Telegram, X, Facebook, Clipboard)
 * - Shareable educational insights with zero tracking or promotional noise
 * - Strict privacy boundaries: never exposes private user scores or identities
 */

import {
  MindReactionType,
  MindReactionCounts,
  MindSharePlatform,
  MindLanguageCode,
  MindTopicDetail,
  ShareableInsight,
  MindBookmarkItem,
} from './types';
import { getSupabase } from '../../lib/supabase/client';
import { recordMindShare } from './mindDbEngine';

const LOCAL_STORAGE_BOOKMARKS_KEY = 'mentalab_mind_saved_bookmarks_v1';
const LOCAL_STORAGE_REACTIONS_KEY = 'mentalab_mind_user_reactions_v1';
const REACTION_COOLDOWN_MS = 600;

// Anti-spam throttler for client-side rapid clicking
const lastReactionTimes = new Map<string, number>();
const lastShareTimes = new Map<string, number>();

// In-memory fallbacks for tests, SSR, and storage-restricted environments
let memoryBookmarks: MindBookmarkItem[] = [];
let memoryReactions: Record<string, MindReactionType> = {};
const memorySessionViews = new Set<string>();

/**
 * Reset memory state (useful for test isolation)
 */
export function resetEngagementEngineMemory(): void {
  memoryBookmarks = [];
  memoryReactions = {};
  memorySessionViews.clear();
  lastReactionTimes.clear();
  lastShareTimes.clear();
}

import { generateCleanTopicUrl } from './mindSeo';

/**
 * Direct Canonical URL generator ensuring shared links land directly on the topic with clean SEO URLs
 */
export function generateDirectTopicUrl(
  topicSlug: string,
  lang: MindLanguageCode = 'en'
): string {
  const origin = typeof window !== 'undefined' && window.location && window.location.origin
    ? window.location.origin
    : 'https://mentalab.in';
  return generateCleanTopicUrl(topicSlug, undefined, lang, origin);
}

/**
 * Natural, non-promotional share text generator
 */
export function generateShareText(topicTitle: string): string {
  return `I just learned why our brains fall for ${topicTitle} on Mentalab.`;
}

// ============================================================================
// 1. REACTIONS: OPTIMISTIC UI & SINGLE-ACTIVE ANTI-SPAM
// ============================================================================

function getLocalReactions(): Record<string, MindReactionType> {
  if (typeof window === 'undefined' || !window.localStorage) return memoryReactions;
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_REACTIONS_KEY);
    return raw ? JSON.parse(raw) : memoryReactions;
  } catch {
    return memoryReactions;
  }
}

function setLocalReaction(topicId: string, reaction: MindReactionType | null): void {
  if (reaction) {
    memoryReactions[topicId] = reaction;
  } else {
    delete memoryReactions[topicId];
  }
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(LOCAL_STORAGE_REACTIONS_KEY, JSON.stringify(memoryReactions));
  } catch {
    // Non-blocking
  }
}

/**
 * Optimistically toggle a reaction, supporting:
 * - Setting a new reaction
 * - Changing from one reaction to another
 * - Removing reaction (if clicking active one)
 * - Anti-spam rate-limiting
 */
export async function toggleTopicReaction(
  userId: string | undefined,
  topicId: string,
  reactionType: MindReactionType,
  currentCounts: MindReactionCounts
): Promise<{
  newCounts: MindReactionCounts;
  activeReaction: MindReactionType | null;
  rateLimited?: boolean;
}> {
  // Client-side anti-spam throttle
  const now = Date.now();
  const lastTime = lastReactionTimes.get(topicId) || 0;
  if (now - lastTime < REACTION_COOLDOWN_MS) {
    return {
      newCounts: currentCounts,
      activeReaction: currentCounts.userReaction || null,
      rateLimited: true,
    };
  }
  lastReactionTimes.set(topicId, now);

  const previousReaction = currentCounts.userReaction;
  const isRemoving = previousReaction === reactionType;

  // Calculate optimistic counts
  const newCounts: MindReactionCounts = {
    ...currentCounts,
    helpful: currentCounts.helpful,
    interesting: currentCounts.interesting,
    surprising: currentCounts.surprising,
    learned: currentCounts.learned,
    thinking: currentCounts.thinking,
    total: currentCounts.total,
    userReaction: isRemoving ? null : reactionType,
  };

  if (isRemoving) {
    newCounts[reactionType] = Math.max(0, newCounts[reactionType] - 1);
    newCounts.total = Math.max(0, newCounts.total - 1);
  } else {
    // If user already had a different reaction, decrement that old one
    if (previousReaction && previousReaction in newCounts) {
      newCounts[previousReaction] = Math.max(0, newCounts[previousReaction] - 1);
    } else {
      // First reaction from user, total increments
      newCounts.total += 1;
    }
    newCounts[reactionType] += 1;
  }

  // Persist locally for immediate offline/guest recall
  setLocalReaction(topicId, newCounts.userReaction ?? null);

  // Sync to database if Supabase is connected
  const supabase = getSupabase();
  if (supabase && userId) {
    try {
      // Use atomic anti-spam RPC if available
      const { data, error } = await (supabase as any).rpc('toggle_mind_reaction', {
        p_topic_id: topicId,
        p_reaction_type: reactionType,
      });

      if (!error && data && data.counts) {
        return {
          newCounts: {
            helpful: data.counts.helpful,
            interesting: data.counts.interesting,
            surprising: data.counts.surprising,
            learned: data.counts.learned,
            thinking: data.counts.thinking,
            total: data.counts.total,
            userReaction: data.activeReaction,
          },
          activeReaction: data.activeReaction,
        };
      } else if (error) {
        // Fallback directly to upsert/delete on psychology_reactions
        if (isRemoving) {
          await (supabase as any)
            .from('psychology_reactions')
            .delete()
            .eq('user_id', userId)
            .eq('topic_id', topicId);
        } else {
          await (supabase as any)
            .from('psychology_reactions')
            .upsert(
              {
                user_id: userId,
                topic_id: topicId,
                reaction_type: reactionType,
                updated_at: new Date().toISOString(),
              },
              { onConflict: 'user_id,topic_id' }
            );
        }
      }
    } catch (err) {
      console.warn('[Mentalab Mind] Reaction sync failed, optimistic state retained:', err);
    }
  }

  return {
    newCounts,
    activeReaction: newCounts.userReaction ?? null,
  };
}

// ============================================================================
// 2. BOOKMARKS: SAVED TOPICS MANAGEMENT
// ============================================================================

function getLocalBookmarks(): MindBookmarkItem[] {
  if (typeof window === 'undefined' || !window.localStorage) return memoryBookmarks;
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : memoryBookmarks;
  } catch {
    return memoryBookmarks;
  }
}

function saveLocalBookmarks(items: MindBookmarkItem[]): void {
  memoryBookmarks = [...items];
  if (typeof window === 'undefined' || !window.localStorage) return;
  try {
    window.localStorage.setItem(LOCAL_STORAGE_BOOKMARKS_KEY, JSON.stringify(items));
  } catch {
    // Non-blocking
  }
}

/**
 * Toggle bookmark for a topic
 */
export async function toggleTopicBookmark(
  userId: string | undefined,
  topic: MindTopicDetail,
  categoryTitle: string = 'Psychology Track'
): Promise<{ isBookmarked: boolean }> {
  const current = getLocalBookmarks();
  const exists = current.some((b) => b.topicId === topic.id);

  let isBookmarked: boolean;
  let updatedList: MindBookmarkItem[];

  if (exists) {
    updatedList = current.filter((b) => b.topicId !== topic.id);
    isBookmarked = false;
  } else {
    const newItem: MindBookmarkItem = {
      id: `bm_${topic.id}_${Date.now()}`,
      topicId: topic.id,
      topicSlug: topic.slug,
      title: topic.title,
      oneLineExplanation: topic.oneLineExplanation,
      shortDescription: topic.shortDescription,
      categoryTitle,
      difficulty: topic.difficulty,
      savedAt: new Date().toISOString(),
    };
    updatedList = [newItem, ...current];
    isBookmarked = true;
  }

  saveLocalBookmarks(updatedList);

  // Sync to Supabase if authenticated
  const supabase = getSupabase();
  if (supabase && userId) {
    try {
      if (isBookmarked) {
        await (supabase as any).from('psychology_bookmarks').upsert(
          { user_id: userId, topic_id: topic.id },
          { onConflict: 'user_id,topic_id' }
        );
      } else {
        await (supabase as any)
          .from('psychology_bookmarks')
          .delete()
          .eq('user_id', userId)
          .eq('topic_id', topic.id);
      }
    } catch (err) {
      console.warn('[Mentalab Mind] Bookmark remote sync error:', err);
    }
  }

  return { isBookmarked };
}

/**
 * Retrieve saved bookmarks list
 */
export async function fetchUserBookmarks(
  userId: string | undefined,
  languageCode: MindLanguageCode = 'en'
): Promise<MindBookmarkItem[]> {
  const localList = getLocalBookmarks();

  const supabase = getSupabase();
  if (supabase && userId) {
    try {
      const { data, error } = await (supabase as any).rpc('get_user_mind_bookmarks', {
        p_language_code: languageCode,
      });

      if (!error && Array.isArray(data) && data.length > 0) {
        return data.map((d: any) => ({
          id: d.bookmark_id,
          topicId: d.topic_id,
          topicSlug: d.topic_slug,
          title: d.title,
          oneLineExplanation: d.one_line_explanation,
          shortDescription: d.short_description,
          categoryTitle: d.category_title || 'Psychology Track',
          difficulty: d.difficulty,
          savedAt: d.saved_at,
          notes: d.notes,
        }));
      }
    } catch (err) {
      console.warn('[Mentalab Mind] Remote bookmarks fetch error, using local:', err);
    }
  }

  return localList;
}

/**
 * Check if a specific topic is currently bookmarked
 */
export async function checkIsTopicBookmarked(
  userId: string | undefined,
  topicId: string
): Promise<boolean> {
  const localList = getLocalBookmarks();
  const localFound = localList.some((b) => b.topicId === topicId);
  if (localFound) return true;

  const supabase = getSupabase();
  if (supabase && userId) {
    try {
      const { data, error } = await (supabase as any)
        .from('psychology_bookmarks')
        .select('id')
        .eq('user_id', userId)
        .eq('topic_id', topicId)
        .maybeSingle();
      if (!error && data) return true;
    } catch {
      // non-blocking fallback
    }
  }
  return false;
}

/**
 * Record topic view count (atomic server increment + anti-repeat session guard)
 */
export async function recordTopicView(topicId: string): Promise<void> {
  const key = `mentalab_viewed_topic_${topicId}`;
  if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
    try {
      if (window.sessionStorage.getItem(key)) return;
      window.sessionStorage.setItem(key, '1');
    } catch {
      if (memorySessionViews.has(topicId)) return;
      memorySessionViews.add(topicId);
    }
  } else {
    if (memorySessionViews.has(topicId)) return;
    memorySessionViews.add(topicId);
  }

  const supabase = getSupabase();
  if (supabase) {
    try {
      await (supabase as any).rpc('record_mind_topic_view', {
        p_topic_id: topicId,
      });
    } catch {
      // non-blocking
    }
  }
}

export function isTopicViewRecorded(topicId: string): boolean {
  const key = `mentalab_viewed_topic_${topicId}`;
  if (typeof window !== 'undefined' && typeof window.sessionStorage !== 'undefined') {
    try {
      return !!window.sessionStorage.getItem(key) || memorySessionViews.has(topicId);
    } catch {
      return memorySessionViews.has(topicId);
    }
  }
  return memorySessionViews.has(topicId);
}

// ============================================================================
// 3. SHAREABLE INSIGHT GENERATOR
// ============================================================================

const TOPIC_INSIGHT_QUOTES: Record<string, string> = {
  confirmation_bias:
    "Your brain doesn't always search for the truth first. Sometimes it searches for evidence that fits what you already believe.",
  social_proof:
    "When you are uncertain, you look around and copy the crowd. Don't mistake popularity for proof.",
  anchoring_effect:
    "The first number you hear hijacks your judgment. Reset the frame before negotiating.",
  reciprocity_principle:
    "A favor with an unspoken invoice is not kindness; it is an obligation trap.",
  healthy_boundaries:
    "A boundary is not controlling other people; it is taking agency over your own response.",
  algorithmic_reinforcement:
    "Algorithms don't reflect the world as it is; they optimize for what keeps you outraged and engaged.",
  emotional_regulation:
    "Between stimulus and response there is a space. In that space lies your freedom to choose.",
  first_principles_thinking:
    "Boil a complex problem down to its most fundamental truths, and reason up from there.",
};

export function getShareableInsight(topic: MindTopicDetail): ShareableInsight {
  const quote =
    TOPIC_INSIGHT_QUOTES[topic.id] ||
    topic.oneLineExplanation ||
    topic.summary30s ||
    topic.shortDescription;

  const url = generateDirectTopicUrl(topic.slug || topic.id);
  const shareText = `"${quote}"\n\n— Why our brains do this: ${url}`;

  return {
    topicId: topic.id,
    topicTitle: topic.title,
    quote,
    categoryTitle: 'Mentalab Mind',
    mentalabBranding: 'Mentalab Mind • Cognitive Science',
    url,
    shareText,
  };
}

// ============================================================================
// 4. MULTI-PLATFORM SHARE DISPATCHER & ANTI-SPAM
// ============================================================================

export async function executeShare(options: {
  topic: MindTopicDetail;
  platform: MindSharePlatform;
  lang?: MindLanguageCode;
  customText?: string;
  openTarget?: boolean;
}): Promise<{ success: boolean; method: string; shareUrl?: string }> {
  const { topic, platform, lang = 'en', customText, openTarget = true } = options;
  const url = generateDirectTopicUrl(topic.slug || topic.id, lang);
  const text = customText || generateShareText(topic.title);

  // Anti-spam throttle on share logging (at most 1 share log per topic per platform per 15s)
  const shareKey = `${topic.id}_${platform}`;
  const now = Date.now();
  const lastTime = lastShareTimes.get(shareKey) || 0;
  if (now - lastTime > 15000) {
    lastShareTimes.set(shareKey, now);
    recordMindShare(topic.id, platform, lang).catch(() => {});
  }

  // 1. Web Share API where available
  if (platform === 'native_share') {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: topic.title,
          text,
          url,
        });
        return { success: true, method: 'web_share', shareUrl: url };
      } catch (err: any) {
        if (err.name === 'AbortError') {
          return { success: false, method: 'aborted', shareUrl: url };
        }
        // Fallback to clipboard
      }
    }
    // Fallback to clipboard if Web Share API is unsupported
    const res = await copyToClipboard(url, text);
    return { ...res, shareUrl: url };
  }

  // 2. Clipboard Copy
  if (platform === 'clipboard') {
    const res = await copyToClipboard(url, text);
    return { ...res, shareUrl: url };
  }

  // 3. WhatsApp Direct
  if (platform === 'whatsapp') {
    const waText = encodeURIComponent(`${text}\n\n${url}`);
    const shareUrl = `https://wa.me/?text=${waText}`;
    if (openTarget && typeof window !== 'undefined' && window.open) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    return { success: true, method: 'whatsapp', shareUrl };
  }

  // 4. Telegram Direct
  if (platform === 'telegram') {
    const tgUrl = encodeURIComponent(url);
    const tgText = encodeURIComponent(text);
    const shareUrl = `https://t.me/share/url?url=${tgUrl}&text=${tgText}`;
    if (openTarget && typeof window !== 'undefined' && window.open) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    return { success: true, method: 'telegram', shareUrl };
  }

  // 5. X (Twitter) Direct
  if (platform === 'twitter' || (platform as string) === 'x') {
    const twText = encodeURIComponent(text);
    const twUrl = encodeURIComponent(url);
    const shareUrl = `https://twitter.com/intent/tweet?text=${twText}&url=${twUrl}`;
    if (openTarget && typeof window !== 'undefined' && window.open) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    return { success: true, method: 'twitter', shareUrl };
  }

  // 6. Facebook Direct
  if (platform === 'facebook') {
    const fbUrl = encodeURIComponent(url);
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${fbUrl}`;
    if (openTarget && typeof window !== 'undefined' && window.open) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
    return { success: true, method: 'facebook', shareUrl };
  }

  // Default fallback
  const res = await copyToClipboard(url, text);
  return { ...res, shareUrl: url };
}

/**
 * Safe clipboard copy with fallback
 */
async function copyToClipboard(
  url: string,
  text: string
): Promise<{ success: boolean; method: string }> {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      return { success: true, method: 'clipboard' };
    }
  } catch {
    // Fallback for older browsers
  }

  // Fallback text area method
  try {
    const ta = document.createElement('textarea');
    ta.value = `${text}\n${url}`;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    return { success: true, method: 'clipboard_fallback' };
  } catch {
    return { success: false, method: 'clipboard_failed' };
  }
}
