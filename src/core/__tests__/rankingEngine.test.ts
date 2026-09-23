import { describe, it, expect, beforeEach, vi } from 'vitest';
import { calculateRP, fetchLiveLeaderboard } from '../ranking/rankingEngine';

const mockLocalStorage = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value.toString();
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();

(global as any).window = global;
(global as any).localStorage = mockLocalStorage;

describe('Mentalis AI Ranking Engine (RP)', () => {
  it('should accurately compute rank points according to the calibrated formula', () => {
    // RP = round(XP * 0.4 + Streak * 150 + Techniques * 200 + Facts * 15 + Accuracy * 10)
    const xp = 10000; // 4000
    const streak = 10; // 1500
    const techniques = 5; // 1000
    const facts = 80; // 1200
    const accuracy = 95; // 950
    // Total = 4000 + 1500 + 1000 + 1200 + 950 = 8650

    const rp = calculateRP(xp, streak, techniques, facts, accuracy);
    expect(rp).toBe(8650);
  });

  it('should clamp accuracy within 0 to 100 range safely', () => {
    const rpHigh = calculateRP(1000, 0, 0, 0, 150); // accuracy clamped to 100 -> 1000*0.4 + 100*10 = 1400
    expect(rpHigh).toBe(1400);

    const rpLow = calculateRP(1000, 0, 0, 0, -20); // accuracy clamped to 0 -> 400
    expect(rpLow).toBe(400);
  });

  it('should fetch leaderboard and extract Top 3 champions and marquee players', async () => {
    const res = await fetchLiveLeaderboard();
    expect(res.topThree).toHaveLength(3);
    expect(res.topThree[0].rank).toBe(1);
    expect(res.topThree[1].rank).toBe(2);
    expect(res.topThree[2].rank).toBe(3);
    expect(res.topThree[0].rp).toBeGreaterThanOrEqual(res.topThree[1].rp);
    expect(res.topThree[1].rp).toBeGreaterThanOrEqual(res.topThree[2].rp);
    expect(res.activeMarquee.length).toBeGreaterThanOrEqual(3);
  });

  it('should store ranking data in localStorage and reuse cache within 1 hour', async () => {
    localStorage.clear();

    // 1. First fetch: caches data
    const initial = await fetchLiveLeaderboard();
    expect(initial.topThree.length).toBe(3);

    // Verify localStorage has cached item
    const raw = localStorage.getItem('mentalis_ranking_cache_v1');
    expect(raw).toBeTruthy();
    const parsed = JSON.parse(raw!);
    expect(parsed.timestamp).toBeGreaterThan(0);
    expect(parsed.basePlayers.length).toBeGreaterThanOrEqual(3);

    // 2. Second fetch: served from cache
    const second = await fetchLiveLeaderboard();
    expect(second.isFromCache).toBe(true);

    // 3. Simulated expired cache (> 1 hour = 3600000ms)
    parsed.timestamp = Date.now() - (60 * 60 * 1000 + 10000); // 1 hour + 10s ago
    localStorage.setItem('mentalis_ranking_cache_v1', JSON.stringify(parsed));

    const expiredFetch = await fetchLiveLeaderboard();
    // Cache was expired, so isFromCache should be false or updated
    expect(expiredFetch.topThree.length).toBe(3);
  });
});
