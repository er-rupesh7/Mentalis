/**
 * Realtime Presence Engine for Mentalis
 * Uses Supabase Realtime Presence channels to track online friends and active users.
 */

import { getSupabase } from '../../lib/supabase/client';
import { RealtimeChannel } from '@supabase/supabase-js';

export interface PresenceUser {
  user_id: string;
  username?: string;
  display_name?: string;
  avatar_url?: string;
  avatar_type?: string;
  level?: number;
  online_at: string;
}

type PresenceListener = (onlineUserIds: Set<string>) => void;

class PresenceEngine {
  private channel: RealtimeChannel | null = null;
  private onlineUserIds: Set<string> = new Set();
  private listeners: Set<PresenceListener> = new Set();
  private currentTrackedUser: PresenceUser | null = null;

  public subscribe(listener: PresenceListener): () => void {
    this.listeners.add(listener);
    listener(this.onlineUserIds);
    return () => {
      this.listeners.delete(listener);
    };
  }

  public isUserOnline(userId?: string | null): boolean {
    if (!userId) return false;
    return this.onlineUserIds.has(userId);
  }

  public getOnlineCount(): number {
    return this.onlineUserIds.size;
  }

  /**
   * Start tracking presence for authenticated user
   */
  public async trackUser(user: {
    id: string;
    username?: string | null;
    displayName?: string | null;
    avatarUrl?: string | null;
    avatarType?: 'google' | 'badge' | 'mastery' | null;
    level?: number;
  }) {
    const supabase = getSupabase();
    if (!supabase || typeof window === 'undefined') return;

    this.currentTrackedUser = {
      user_id: user.id,
      username: user.username || undefined,
      display_name: user.displayName || undefined,
      avatar_url: user.avatarUrl || undefined,
      avatar_type: user.avatarType || 'google',
      level: user.level || 1,
      online_at: new Date().toISOString(),
    };

    if (!this.channel) {
      this.channel = supabase.channel('online_presence', {
        config: {
          presence: {
            key: user.id,
          },
        },
      });

      this.channel
        .on('presence', { event: 'sync' }, () => {
          const state = this.channel?.presenceState() || {};
          const nextSet = new Set<string>();
          for (const key of Object.keys(state)) {
            nextSet.add(key);
          }
          this.onlineUserIds = nextSet;
          this.notifyListeners();
        })
        .on('presence', { event: 'join' }, ({ key }) => {
          this.onlineUserIds.add(key);
          this.notifyListeners();
        })
        .on('presence', { event: 'leave' }, ({ key }) => {
          this.onlineUserIds.delete(key);
          this.notifyListeners();
        })
        .subscribe(async (status) => {
          if (status === 'SUBSCRIBED' && this.currentTrackedUser) {
            await this.channel?.track(this.currentTrackedUser);
          }
        });
    } else {
      await this.channel.track(this.currentTrackedUser);
    }
  }

  /**
   * Untrack presence when user signs out
   */
  public async untrackUser() {
    if (this.channel) {
      await this.channel.untrack();
      this.channel.unsubscribe();
      this.channel = null;
    }
    this.currentTrackedUser = null;
    this.onlineUserIds.clear();
    this.notifyListeners();
  }

  public async untrack() {
    return this.untrackUser();
  }

  private notifyListeners() {
    this.listeners.forEach((l) => l(new Set(this.onlineUserIds)));
  }
}

export const presenceEngine = new PresenceEngine();
