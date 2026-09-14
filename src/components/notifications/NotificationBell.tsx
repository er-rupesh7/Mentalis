'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Bell, Check, UserPlus, Sparkles } from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { socialEngine, AppNotification } from '../../core/social/socialEngine';
import { UserAvatar } from '../auth/UserAvatar';
import Link from 'next/link';

export const NotificationBell: React.FC = () => {
  const currentUser = useQuizStore((s) => s.currentUser);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [followingBackIds, setFollowingBackIds] = useState<Record<string, boolean>>({});
  const popoverRef = useRef<HTMLDivElement>(null);

  // Load notifications
  useEffect(() => {
    if (!currentUser) {
      setNotifications([]);
      return;
    }

    let isMounted = true;
    const load = async () => {
      setLoading(true);
      try {
        const notifs = await socialEngine.fetchNotifications(currentUser.id);
        if (isMounted) {
          setNotifications(notifs);
        }
      } catch (e) {
        console.warn('Failed to load notifications', e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    load();

    // Subscribe to realtime notifications
    const unsubscribe = socialEngine.subscribeToNotifications(currentUser.id, (newNotif) => {
      setNotifications((prev) => [newNotif, ...prev.filter((n) => n.id !== newNotif.id)]);
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [currentUser]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const handleMarkAllAsRead = async () => {
    if (!currentUser) return;
    await socialEngine.markAllNotificationsAsRead(currentUser.id);
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const handleFollowBack = async (actorId: string, notifId: string) => {
    if (!currentUser) return;
    setFollowingBackIds((prev) => ({ ...prev, [actorId]: true }));
    try {
      await socialEngine.toggleFollow(currentUser.id, actorId);
      await socialEngine.markNotificationAsRead(notifId);
      setNotifications((prev) =>
        prev.map((n) => (n.id === notifId ? { ...n, isRead: true } : n))
      );
    } catch (e) {
      console.error('Follow back error:', e);
      setFollowingBackIds((prev) => ({ ...prev, [actorId]: false }));
    }
  };

  if (!currentUser) return null;

  return (
    <div className="relative" ref={popoverRef}>
      {/* Bell Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen && unreadCount > 0) {
            handleMarkAllAsRead();
          }
        }}
        className="relative p-2 rounded-xl bg-slate-900/60 border border-slate-700/60 hover:border-violet-500/50 hover:bg-slate-800/80 transition-all text-slate-300 hover:text-white"
        title="Notifications"
        aria-label="Notifications"
      >
        <Bell className="w-5 h-5 transition-transform group-hover:scale-105" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-gradient-to-r from-pink-500 to-violet-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {/* Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-2xl border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/40">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-violet-400" />
              <h3 className="text-sm font-semibold text-white">Notifications</h3>
              {unreadCount > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-medium">
                  {unreadCount} new
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                onClick={handleMarkAllAsRead}
                className="text-xs text-slate-400 hover:text-violet-300 transition-colors"
              >
                Mark all read
              </button>
            )}
          </div>

          {/* List */}
          <div className="max-h-[380px] overflow-y-auto divide-y divide-slate-800/60 custom-scrollbar">
            {loading && notifications.length === 0 ? (
              <div className="p-6 text-center text-xs text-slate-500">Loading notifications...</div>
            ) : notifications.length === 0 ? (
              <div className="p-8 text-center">
                <Bell className="w-8 h-8 text-slate-600 mx-auto mb-2 opacity-50" />
                <p className="text-sm text-slate-400 font-medium">All caught up!</p>
                <p className="text-xs text-slate-600 mt-1">You&apos;ll see followers and friend alerts here.</p>
              </div>
            ) : (
              notifications.map((item) => {
                const isFollowBack = followingBackIds[item.actorId];
                const username = item.metadata?.actorUsername;

                return (
                  <div
                    key={item.id}
                    className={`p-3.5 flex items-start gap-3 transition-colors ${
                      item.isRead ? 'bg-transparent hover:bg-slate-800/40' : 'bg-violet-950/20 hover:bg-violet-900/20'
                    }`}
                  >
                    {/* Actor Avatar */}
                    <div className="shrink-0 pt-0.5">
                      <UserAvatar
                        displayName={item.metadata?.actorDisplayName || username || 'User'}
                        avatarUrl={item.metadata?.actorAvatarUrl}
                        avatarType={item.metadata?.actorAvatarType || 'google'}
                        selectedBadgeLevel={item.metadata?.actorBadgeLevel || 1}
                        selectedMasteryBadgeId={item.metadata?.actorMasteryBadgeId}
                        size="sm"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        {username ? (
                          <Link
                            href={`/${username}`}
                            onClick={() => setIsOpen(false)}
                            className="text-xs font-semibold text-violet-300 hover:text-violet-200 truncate hover:underline"
                          >
                            {item.metadata?.actorDisplayName || `@${username}`}
                          </Link>
                        ) : (
                          <span className="text-xs font-semibold text-slate-200 truncate">
                            {item.metadata?.actorDisplayName || 'Mentalist'}
                          </span>
                        )}
                        <span className="text-[10px] text-slate-500 shrink-0">
                          {new Date(item.createdAt).toLocaleDateString(undefined, {
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                      </div>

                      <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                        {item.message}
                      </p>

                      {/* Action for follow notifications */}
                      {item.type === 'follow' && (
                        <div className="mt-2 flex items-center gap-2">
                          {isFollowBack ? (
                            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                              <Check className="w-3 h-3" /> Mutual Friends!
                            </span>
                          ) : (
                            <button
                              onClick={() => handleFollowBack(item.actorId, item.id)}
                              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 px-3 py-1 rounded-lg shadow-sm transition-all active:scale-95"
                            >
                              <UserPlus className="w-3 h-3" /> Follow Back
                            </button>
                          )}
                          {username && (
                            <Link
                              href={`/${username}`}
                              onClick={() => setIsOpen(false)}
                              className="text-[11px] text-slate-400 hover:text-slate-200 px-2 py-1 rounded-md hover:bg-slate-800/60 transition-colors"
                            >
                              View Profile
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
