import { describe, it, expect, beforeEach, vi } from 'vitest';
import {
  generateDirectTopicUrl,
  generateShareText,
  toggleTopicReaction,
  toggleTopicBookmark,
  fetchUserBookmarks,
  checkIsTopicBookmarked,
  getShareableInsight,
  executeShare,
  recordTopicView,
  isTopicViewRecorded,
  resetEngagementEngineMemory,
} from '../mind/mindEngagementEngine';
import { FALLBACK_TOPIC_CONFIRMATION_BIAS_EN } from '../mind/mindDbEngine';
import { MindReactionCounts } from '../mind/types';

describe('Mentalab Mind Engagement Engine', () => {
  beforeEach(() => {
    resetEngagementEngineMemory();
    if (typeof window !== 'undefined') {
      try {
        window.localStorage?.clear();
        window.sessionStorage?.clear();
      } catch {
        // ignore
      }
    }
    vi.clearAllMocks();
  });

  describe('Direct Topic Canonical URLs & Share Text', () => {
    it('generates a direct link opening directly to the topic and language', () => {
      const url = generateDirectTopicUrl('confirmation_bias', 'hinglish');
      expect(url).toContain('/mind/cognitive-biases/confirmation_bias?lang=hinglish');
    });

    it('generates natural, non-promotional educational share text', () => {
      const text = generateShareText('Confirmation Bias');
      expect(text).toBe('I just learned why our brains fall for Confirmation Bias on Mentalab.');
      expect(text).not.toContain('DOWNLOAD NOW');
      expect(text).not.toContain('PROMO');
    });
  });

  describe('Reactions System (Anti-Spam & Single Active)', () => {
    const initialCounts: MindReactionCounts = {
      helpful: 10,
      interesting: 20,
      surprising: 5,
      learned: 15,
      thinking: 8,
      total: 58,
      userReaction: null,
    };

    it('adds a new authenticated or guest reaction optimistically', async () => {
      const result = await toggleTopicReaction('user_123', 'confirmation_bias', 'helpful', initialCounts);
      expect(result.activeReaction).toBe('helpful');
      expect(result.newCounts.helpful).toBe(11);
      expect(result.newCounts.total).toBe(59);
    });

    it('changes reaction smoothly while preventing duplicate active reactions', async () => {
      const stateWithHelpful: MindReactionCounts = {
        ...initialCounts,
        helpful: 11,
        total: 59,
        userReaction: 'helpful',
      };

      // Fast-forward cooldown by clearing reaction times
      await new Promise((r) => setTimeout(r, 650));

      const result = await toggleTopicReaction('user_123', 'confirmation_bias', 'interesting', stateWithHelpful);
      expect(result.activeReaction).toBe('interesting');
      expect(result.newCounts.helpful).toBe(10); // Previous decremented
      expect(result.newCounts.interesting).toBe(21); // New incremented
      expect(result.newCounts.total).toBe(59); // Single reaction maintained
    });

    it('removes reaction when clicking the currently active reaction', async () => {
      const stateWithThinking: MindReactionCounts = {
        ...initialCounts,
        thinking: 9,
        total: 59,
        userReaction: 'thinking',
      };

      await new Promise((r) => setTimeout(r, 650));

      const result = await toggleTopicReaction('user_123', 'confirmation_bias', 'thinking', stateWithThinking);
      expect(result.activeReaction).toBeNull();
      expect(result.newCounts.thinking).toBe(8);
      expect(result.newCounts.total).toBe(58);
    });

    it('throttles rapid reaction spam within cooldown period', async () => {
      const first = await toggleTopicReaction('user_123', 'topic_spam_test', 'surprising', initialCounts);
      expect(first.rateLimited).toBeFalsy();

      // Immediate second click on same topic
      const second = await toggleTopicReaction('user_123', 'topic_spam_test', 'learned', first.newCounts);
      expect(second.rateLimited).toBe(true);
    });
  });

  describe('Bookmarks & Saved Topics Section', () => {
    it('bookmarks a topic and recalls it', async () => {
      const initialSaved = await fetchUserBookmarks('user_123');
      expect(initialSaved.length).toBe(0);

      const addResult = await toggleTopicBookmark('user_123', FALLBACK_TOPIC_CONFIRMATION_BIAS_EN, 'Cognitive Biases');
      expect(addResult.isBookmarked).toBe(true);

      const isSaved = await checkIsTopicBookmarked('user_123', FALLBACK_TOPIC_CONFIRMATION_BIAS_EN.id);
      expect(isSaved).toBe(true);

      const savedList = await fetchUserBookmarks('user_123');
      expect(savedList.length).toBe(1);
      expect(savedList[0].topicId).toBe(FALLBACK_TOPIC_CONFIRMATION_BIAS_EN.id);
      expect(savedList[0].title).toBe('Confirmation Bias');
      expect(savedList[0].categoryTitle).toBe('Cognitive Biases');
    });

    it('removes a bookmarked topic when toggled again', async () => {
      await toggleTopicBookmark('user_123', FALLBACK_TOPIC_CONFIRMATION_BIAS_EN, 'Cognitive Biases');
      
      const removeResult = await toggleTopicBookmark('user_123', FALLBACK_TOPIC_CONFIRMATION_BIAS_EN, 'Cognitive Biases');
      expect(removeResult.isBookmarked).toBe(false);

      const isSaved = await checkIsTopicBookmarked('user_123', FALLBACK_TOPIC_CONFIRMATION_BIAS_EN.id);
      expect(isSaved).toBe(false);
    });
  });

  describe('Shareable Insights & Privacy Protection', () => {
    it('generates an educational quote card with branding and no private user scores', () => {
      const insight = getShareableInsight(FALLBACK_TOPIC_CONFIRMATION_BIAS_EN);
      
      expect(insight.quote).toContain("Your brain doesn't always search for the truth first");
      expect(insight.topicTitle).toBe('Confirmation Bias');
      expect(insight.mentalabBranding).toBe('Mentalab Mind • Cognitive Science');
      expect(insight.url).toContain('mentalab.in');

      // Verify privacy guarantee: zero private scores or private IDs
      const raw = JSON.stringify(insight);
      expect(raw).not.toContain('user_id');
      expect(raw).not.toContain('score');
      expect(raw).not.toContain('privateProfile');
    });

    it('generates fallbacks for custom topics without predefined quotes', () => {
      const customTopic = {
        ...FALLBACK_TOPIC_CONFIRMATION_BIAS_EN,
        id: 'new_model',
        slug: 'new-model',
        title: 'Heuristic Search',
        oneLineExplanation: 'Humans use mental shortcuts to make fast decisions under uncertainty.',
      };

      const insight = getShareableInsight(customTopic);
      expect(insight.quote).toBe('Humans use mental shortcuts to make fast decisions under uncertainty.');
      expect(insight.topicTitle).toBe('Heuristic Search');
      expect(insight.mentalabBranding).toBe('Mentalab Mind • Cognitive Science');
    });
  });

  describe('Multi-Platform Social Sharing & Anti-Spam', () => {
    it('constructs correct social share URLs for WhatsApp, Telegram, X, and Facebook', async () => {
      const targets = ['whatsapp', 'telegram', 'x', 'facebook'] as const;

      for (const target of targets) {
        const res = await executeShare({
          topic: FALLBACK_TOPIC_CONFIRMATION_BIAS_EN,
          platform: target,
          lang: 'en',
          openTarget: false,
        });
        expect(res.success).toBe(true);
        expect(res.shareUrl).toBeDefined();

        if (target === 'whatsapp') {
          expect(res.shareUrl).toContain('wa.me');
        } else if (target === 'telegram') {
          expect(res.shareUrl).toContain('t.me/share/url');
        } else if (target === 'x') {
          expect(res.shareUrl).toContain('twitter.com/intent/tweet');
        } else if (target === 'facebook') {
          expect(res.shareUrl).toContain('facebook.com/sharer');
        }
      }
    });

    it('copies to clipboard when clipboard platform is chosen', async () => {
      const writeTextMock = vi.fn().mockResolvedValue(undefined);
      try {
        Object.defineProperty(globalThis.navigator, 'clipboard', {
          value: { writeText: writeTextMock },
          configurable: true,
          writable: true,
        });
      } catch {
        // In environments where navigator is completely sealed
      }

      const res = await executeShare({
        topic: FALLBACK_TOPIC_CONFIRMATION_BIAS_EN,
        platform: 'clipboard',
        lang: 'en',
      });
      expect(res.success).toBe(true);
    });

    it('records topic view with session anti-repeat guard', async () => {
      expect(isTopicViewRecorded('confirmation_bias')).toBe(false);
      await recordTopicView('confirmation_bias');
      expect(isTopicViewRecorded('confirmation_bias')).toBe(true);
    });
  });
});
