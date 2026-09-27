import { describe, it, expect, vi } from 'vitest';
import {
  fetchMindCategories,
  fetchMindTopics,
  fetchMindTopicDetail,
  getTopicReactionCounts,
  FALLBACK_CATEGORIES,
  FALLBACK_TOPIC_CONFIRMATION_BIAS_EN,
  FALLBACK_TOPIC_CONFIRMATION_BIAS_HINGLISH,
} from '../mind/mindDbEngine';

// Mock supabase client to test offline and online behavior
vi.mock('@/lib/supabase/client', () => ({
  getSupabase: vi.fn(() => null),
  isSupabaseConfigured: vi.fn(() => false),
}));

describe('Mentalab Mind Database Engine', () => {
  it('falls back to local categories when Supabase is not connected', async () => {
    const categories = await fetchMindCategories('en');
    expect(categories.length).toBeGreaterThanOrEqual(6);
    expect(categories[0].slug).toBe('cognitive-biases');
    expect(categories[0].title).toBe('Cognitive Biases');
    expect(categories[0].iconName).toBe('Brain');
  });

  it('provides rich English content for Confirmation Bias fallback', async () => {
    const topic = await fetchMindTopicDetail('confirmation_bias', 'en');
    expect(topic).not.toBeNull();
    expect(topic?.title).toBe('Confirmation Bias');
    expect(topic?.summary60s).toContain('defense lawyer');
    expect(topic?.scenarios.length).toBeGreaterThanOrEqual(1);
    expect(topic?.scenarios[0].scenarioType).toBe('indian_context');
    expect(topic?.scenarios[0].title).toContain('WhatsApp');
    expect(topic?.practiceQuestions.length).toBeGreaterThanOrEqual(1);
    expect(topic?.practiceQuestions[0].options.length).toBe(3);
    expect(topic?.references.length).toBeGreaterThanOrEqual(3);
  });

  it('provides authentic, non-machine translated Hinglish content', async () => {
    const topic = await fetchMindTopicDetail('confirmation_bias', 'hinglish');
    expect(topic).not.toBeNull();
    expect(topic?.title).toBe('Confirmation Bias');
    expect(topic?.subtitle).toBe('Hum wahi kyu dhundte hain jo hum pehle se mante hain?');
    expect(topic?.summary60s).toContain('impartial judge banne ke bajaye');
    expect(topic?.scenarios[0].title).toBe('WhatsApp Par Aayi "Desi Miracle" Dawa');
    expect(topic?.scenarios[0].biasInAction).toContain('Doctor toh apna fayda dekhega hi');
  });

  it('returns default zero counts for reactions when offline', async () => {
    const counts = await getTopicReactionCounts('confirmation_bias');
    expect(counts.total).toBe(0);
    expect(counts.helpful).toBe(0);
    expect(counts.userReaction).toBeNull();
  });

  it('returns topics list matching category', async () => {
    const topics = await fetchMindTopics('cognitive_biases', 'en');
    expect(topics.length).toBeGreaterThan(0);
    expect(topics[0].id).toBe('confirmation_bias');
  });
});
