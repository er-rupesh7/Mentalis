import { describe, it, expect, beforeEach } from 'vitest';
import { syncEngine } from '../storage/supabaseSyncEngine';
import { isSupabaseConfigured, getSupabase } from '../../lib/supabase/client';
import { useQuizStore } from '../store/useQuizStore';

describe('Supabase Offline Sync & Auth Architecture', () => {
  beforeEach(() => {
    useQuizStore.setState({
      currentUser: null,
      isAuthModalOpen: false,
      syncStatus: 'idle',
      syncError: null,
    });
  });

  it('detects unconfigured status gracefully when environment variables are not set', () => {
    // In test environment without NEXT_PUBLIC_SUPABASE_URL
    const configured = isSupabaseConfigured();
    expect(configured).toBe(false);

    const client = getSupabase();
    expect(client).toBeNull();

    const status = syncEngine.getStatus();
    expect(status).toBe('unconfigured');
  });

  it('handles initialSyncOnAuth without throwing when Supabase is unconfigured', async () => {
    const result = await syncEngine.initialSyncOnAuth('test_user_id', {});
    expect(result).toBeDefined();
    expect(result.hydratedState).toBeUndefined();
  });

  it('social and multiplayer API fallback gracefully in offline/unconfigured mode', async () => {
    const leaderboards = await syncEngine.fetchLeaderboard('global_cpm');
    expect(leaderboards).toEqual([]);

    const openChallenges = await syncEngine.fetchOpenChallenges();
    expect(openChallenges).toEqual([]);

    const challenge = await syncEngine.createChallenge('multiplication', { count: 10 });
    expect(challenge).toBeNull();

    const chatMsg = await syncEngine.sendChatMessage('conv_1', 'Hello world');
    expect(chatMsg).toBeNull();
  });

  it('updates store auth modal state correctly', () => {
    expect(useQuizStore.getState().isAuthModalOpen).toBe(false);

    useQuizStore.getState().setAuthModalOpen(true);
    expect(useQuizStore.getState().isAuthModalOpen).toBe(true);

    useQuizStore.getState().setAuthModalOpen(false);
    expect(useQuizStore.getState().isAuthModalOpen).toBe(false);
  });

  it('updates store auth user and sync status', () => {
    const testUser = {
      id: 'usr_abc_123',
      email: 'learner@mentalis.app',
      displayName: 'Mentalis Master',
      avatarUrl: 'https://example.com/avatar.png',
    };

    useQuizStore.getState().setAuthUser(testUser);
    expect(useQuizStore.getState().currentUser).toEqual(testUser);

    useQuizStore.getState().setSyncStatus('syncing');
    expect(useQuizStore.getState().syncStatus).toBe('syncing');

    useQuizStore.getState().setSyncStatus('synced');
    expect(useQuizStore.getState().syncStatus).toBe('synced');

    useQuizStore.getState().setSyncStatus('error', 'Network failure');
    expect(useQuizStore.getState().syncStatus).toBe('error');
    expect(useQuizStore.getState().syncError).toBe('Network failure');
  });

  it('handles signOut action cleanly', async () => {
    useQuizStore.getState().setAuthUser({
      id: 'usr_xyz',
      email: 'test@example.com',
    });
    expect(useQuizStore.getState().currentUser).not.toBeNull();

    await useQuizStore.getState().signOut();
    expect(useQuizStore.getState().currentUser).toBeNull();
    expect(useQuizStore.getState().syncStatus).toBe('idle');
  });
});
