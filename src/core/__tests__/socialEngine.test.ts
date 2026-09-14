import { describe, it, expect, vi, beforeEach } from 'vitest';
import { socialEngine } from '../social/socialEngine';
import * as supabaseClient from '../../lib/supabase/client';

describe('Social Engine - Username Rate Limiting & Cooldowns', () => {
  const testUserId = 'test_user_rate_limit_123';

  beforeEach(() => {
    // Reset rate limiter internals for fresh tests
    (socialEngine as any).availabilityRateLimits.clear();
    vi.restoreAllMocks();
  });

  it('allows up to 5 availability checks within a 1-minute window', async () => {
    // Mock getSupabase to return unconfigured or empty
    vi.spyOn(supabaseClient, 'getSupabase').mockReturnValue(null);

    const tracker = { minute: [] as number[], hour: [] as number[] };
    (socialEngine as any).availabilityRateLimits.set(testUserId, tracker);

    for (let i = 0; i < 5; i++) {
      const res = socialEngine.checkUsernameRateLimit(testUserId);
      expect(res.allowed).toBe(true);
      expect(res.remainingMinute).toBe(5 - i);
      tracker.minute.push(Date.now());
      tracker.hour.push(Date.now());
    }

    // 6th check within the same minute MUST be blocked
    const blockedRes = socialEngine.checkUsernameRateLimit(testUserId);
    expect(blockedRes.allowed).toBe(false);
    expect(blockedRes.error).toContain('Maximum 5 checks per minute');
    expect(blockedRes.remainingMinute).toBe(0);
  });

  it('enforces 10 checks per 60-minute limit across sliding window', () => {
    const tracker = { minute: [], hour: [] as number[] };
    // Simulate 10 checks already performed in the past 30 minutes
    const now = Date.now();
    for (let i = 0; i < 10; i++) {
      tracker.hour.push(now - 1000 * 60 * (10 - i)); // spread over last 10 mins
    }
    (socialEngine as any).availabilityRateLimits.set(testUserId, tracker);

    const res = socialEngine.checkUsernameRateLimit(testUserId);
    expect(res.allowed).toBe(false);
    expect(res.error).toContain('Maximum 10 checks per 60 minutes');
  });

  it('validates username candidate character and length constraints', async () => {
    // Too short (< 3 chars)
    const shortRes = await socialEngine.checkUsernameAvailability(testUserId, 'ab');
    expect(shortRes.available).toBe(false);
    expect(shortRes.error).toContain('3 to 20 characters');

    // Invalid symbols
    const symbolRes = await socialEngine.checkUsernameAvailability(testUserId, 'user@name!');
    expect(symbolRes.available).toBe(false);
    expect(symbolRes.error).toContain('3 to 20 characters');

    // Too long (> 20 chars)
    const longRes = await socialEngine.checkUsernameAvailability(testUserId, 'super_long_username_that_exceeds_twenty_chars');
    expect(longRes.available).toBe(false);
    expect(longRes.error).toContain('3 to 20 characters');
  });

  it('generates a valid default username adhering to [firstword]_[5_chars]', async () => {
    const mockSelect = vi.fn().mockReturnValue({
      ilike: vi.fn().mockReturnValue({
        maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null }),
      }),
    });
    const mockUpdate = vi.fn().mockReturnValue({
      eq: vi.fn().mockResolvedValue({ data: null, error: null }),
    });

    const mockSupabase = {
      from: vi.fn((table: string) => {
        if (table === 'profiles') {
          return {
            select: mockSelect,
            update: mockUpdate,
          };
        }
        return {};
      }),
    };

    vi.spyOn(supabaseClient, 'getSupabase').mockReturnValue(mockSupabase as any);

    const generated = await socialEngine.generateDefaultUsername('Rupesh Kumar', 'user_123');
    expect(generated).toBeTruthy();
    expect(generated).toMatch(/^rupesh_[a-z0-9]{5}$/);
    expect(generated!.length).toBeLessThanOrEqual(20);
  });

  it('blocks username update if changed within the 30-day cooldown period', async () => {
    const recentDate = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(); // 5 days ago

    const mockSupabase = {
      from: vi.fn(() => ({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            maybeSingle: vi.fn().mockResolvedValue({
              data: { username: 'old_name', username_changed_at: recentDate },
              error: null,
            }),
          }),
        }),
      })),
    };

    vi.spyOn(supabaseClient, 'getSupabase').mockReturnValue(mockSupabase as any);

    const res = await socialEngine.updateUsername('user_123', 'new_name_77');
    expect(res.success).toBe(false);
    expect(res.error).toContain('Username can only be changed once every 30 days');
    expect(res.error).toContain('25 more days');
  });

  it('allows username update if cooldown has expired (> 30 days ago)', async () => {
    const oldDate = new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(); // 35 days ago

    const mockSupabase = {
      from: vi.fn((table: string) => ({
        select: vi.fn().mockReturnValue({
          eq: vi.fn().mockReturnValue({
            maybeSingle: vi.fn().mockResolvedValue({
              data: { username: 'old_name', username_changed_at: oldDate },
              error: null,
            }),
          }),
          ilike: vi.fn().mockReturnValue({
            neq: vi.fn().mockReturnValue({
              maybeSingle: vi.fn().mockResolvedValue({ data: null, error: null }),
            }),
          }),
        }),
        update: vi.fn().mockReturnValue({
          eq: vi.fn().mockResolvedValue({ error: null }),
        }),
      })),
    };

    vi.spyOn(supabaseClient, 'getSupabase').mockReturnValue(mockSupabase as any);

    const res = await socialEngine.updateUsername('user_123', 'valid_new_name');
    expect(res.success).toBe(true);
  });
});
