'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  MessageCircle,
  X,
  Send,
  Users,
  UserPlus,
  UserCheck,
  Swords,
  Sparkles,
  Smile,
  Loader2,
  ChevronRight,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { socialEngine, FriendSummary, ChatMessageItem } from '../../core/social/socialEngine';
import { presenceEngine } from '../../core/social/presenceEngine';
import { getSupabase } from '../../lib/supabase/client';
import { UserAvatar } from '../auth/UserAvatar';
import { BadgeEmblem } from '../badges/BadgeEmblem';

export const ChatDrawer: React.FC = () => {
  const { currentUser, isChatDrawerOpen, setIsChatDrawerOpen } = useQuizStore();
  const isOpen = isChatDrawerOpen;
  const setIsOpen = setIsChatDrawerOpen;

  const [activeTab, setActiveTab] = useState<'friends' | 'suggestions'>('friends');
  const [friends, setFriends] = useState<FriendSummary[]>([]);
  const [suggestedFriends, setSuggestedFriends] = useState<FriendSummary[]>([]);
  const [followingMap, setFollowingMap] = useState<Record<string, boolean>>({});
  const [activeFriend, setActiveFriend] = useState<FriendSummary | null>(null);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessageItem[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggestLoading, setIsSuggestLoading] = useState(false);
  const [followLoadingId, setFollowLoadingId] = useState<string | null>(null);
  const [onlineUserIds, setOnlineUserIds] = useState<Set<string>>(new Set());

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Subscribe to realtime presence
  useEffect(() => {
    const unsub = presenceEngine.subscribe((onlineIds) => {
      setOnlineUserIds(new Set(onlineIds));
    });
    return unsub;
  }, []);

  // Load mutual friends & suggested users when drawer is opened
  useEffect(() => {
    if (!currentUser || !isOpen) return;

    let mounted = true;
    socialEngine.fetchFriends(currentUser.id).then((list) => {
      if (mounted) {
        setFriends(list);
        if (list.length > 0 && !activeFriend && window.innerWidth >= 640) {
          selectFriend(list[0]);
        }
      }
    });

    setIsSuggestLoading(true);
    socialEngine.fetchSuggestedFriends(currentUser.id, 15).then((suggestions) => {
      if (mounted) {
        setSuggestedFriends(suggestions);
        setIsSuggestLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser, isOpen]);

  // Select a friend and load or create conversation
  const selectFriend = async (friend: FriendSummary) => {
    if (!currentUser) return;
    setActiveFriend(friend);
    setIsLoading(true);

    const convId = await socialEngine.getOrCreateDirectConversation(currentUser.id, friend.userId);
    setActiveConversationId(convId);

    if (convId) {
      const history = await socialEngine.fetchMessages(convId);
      setMessages(history);
    }
    setIsLoading(false);
  };

  // Subscribe to Realtime messages for the active conversation
  useEffect(() => {
    if (!activeConversationId) return;

    const supabase = getSupabase();
    if (!supabase) return;

    const channel = supabase
      .channel(`chat_${activeConversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'chat_messages',
          filter: `conversation_id=eq.${activeConversationId}`,
        },
        (payload) => {
          const newMsg = payload.new as any;
          setMessages((prev) => {
            if (prev.some((m) => m.id === newMsg.id)) return prev;
            return [
              ...prev,
              {
                id: newMsg.id,
                conversationId: newMsg.conversation_id,
                senderId: newMsg.sender_id,
                messageText: newMsg.message_text,
                metadata: newMsg.metadata || {},
                createdAt: newMsg.created_at,
              },
            ];
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [activeConversationId]);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputText;
    if (!textToSend.trim() || !activeConversationId || !currentUser) return;

    setInputText('');
    const sent = await socialEngine.sendMessage(activeConversationId, currentUser.id, textToSend);
    if (sent) {
      setMessages((prev) => {
        if (prev.some((m) => m.id === sent.id)) return prev;
        return [...prev, sent];
      });
    }
  };

  const handleInviteToDuel = () => {
    handleSendMessage('⚔️ I challenge you to a 1v1 Mental Table Duel! Ready?');
  };

  const handleToggleFollow = async (targetId: string) => {
    if (!currentUser || followLoadingId) return;
    setFollowLoadingId(targetId);

    const res = await socialEngine.toggleFollow(currentUser.id, targetId);
    setFollowLoadingId(null);

    if (!res.error) {
      setFollowingMap((prev) => ({ ...prev, [targetId]: res.isFollowing }));

      // Refresh mutual friends if newly followed
      if (res.isFollowing) {
        socialEngine.fetchFriends(currentUser.id).then((list) => {
          setFriends(list);
        });
      }
    }
  };

  if (!currentUser) return null;

  return (
    <>
      {/* Floating Trigger Button in Bottom Right */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 hover:from-violet-500 hover:to-indigo-400 text-white shadow-xl shadow-violet-600/30 border border-violet-400/30 hover:scale-105 active:scale-95 transition-all group min-h-[44px] min-w-[44px]"
          title="Open Friends & 1v1 Chat"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            {friends.length > 0 && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-slate-900 animate-pulse" />
            )}
          </div>
          <span className="text-xs font-bold hidden sm:inline">Friends & Chat</span>
        </button>
      )}

      {/* Slide-out / Mobile Fullscreen Drawer */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:right-0 sm:bottom-0 sm:top-14 sm:w-[480px] z-50 bg-slate-950/95 sm:border-l sm:border-slate-800 shadow-2xl flex flex-col backdrop-blur-2xl text-slate-200 animate-in slide-in-from-right duration-200">
          {/* Top Bar */}
          <div className="p-3.5 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              {activeFriend && (
                <button
                  onClick={() => setActiveFriend(null)}
                  className="sm:hidden p-2 -ml-1 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="Back to friends list"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              )}
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>{activeFriend ? activeFriend.displayName : 'Social & Chat'}</span>
                </h3>
                <p className="text-[11px] text-slate-400 font-mono">
                  {activeFriend
                    ? onlineUserIds.has(activeFriend.userId)
                      ? '🟢 Online now'
                      : `@${activeFriend.username}`
                    : `${friends.length} Mutual Friends`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {activeFriend && (
                <a
                  href={`/${activeFriend.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  title="View Profile"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                title="Close Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs (Friends vs Discover) - Visible when no friend selected or on desktop */}
          {(!activeFriend || window.innerWidth >= 640) && (
            <div className="flex border-b border-slate-800 bg-slate-950/80 px-3 py-1.5 gap-2 shrink-0">
              <button
                onClick={() => {
                  setActiveTab('friends');
                  if (friends.length > 0 && !activeFriend) selectFriend(friends[0]);
                }}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[44px] ${
                  activeTab === 'friends'
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Friends ({friends.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('suggestions')}
                className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 min-h-[44px] ${
                  activeTab === 'suggestions'
                    ? 'bg-violet-600/20 text-violet-300 border border-violet-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                }`}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>Discover Mentalists</span>
              </button>
            </div>
          )}

          {/* Drawer Body */}
          <div className="flex-1 flex min-h-0 overflow-hidden">
            {/* Left/Sidebar: Friends List or Suggestions List */}
            {(!activeFriend || window.innerWidth >= 640) && (
              <div
                className={`w-full ${
                  activeFriend ? 'sm:w-48 sm:border-r sm:border-slate-800/80' : 'w-full'
                } overflow-y-auto p-2 space-y-1 scrollbar-thin shrink-0`}
              >
                {activeTab === 'friends' ? (
                  friends.length === 0 ? (
                    <div className="p-6 text-center space-y-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 flex items-center justify-center mx-auto">
                        <Users className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-300">No mutual friends yet</p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          When you follow a user and they follow you back, you become friends and can chat!
                        </p>
                      </div>
                      <button
                        onClick={() => setActiveTab('suggestions')}
                        className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-md shadow-violet-600/20 min-h-[44px]"
                      >
                        Discover People to Follow
                      </button>
                    </div>
                  ) : (
                    friends.map((f) => {
                      const isSelected = activeFriend?.userId === f.userId;
                      const isFriendOnline = onlineUserIds.has(f.userId);
                      return (
                        <button
                          key={f.userId}
                          onClick={() => selectFriend(f)}
                          className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-left transition-all min-h-[44px] ${
                            isSelected
                              ? 'bg-violet-600/20 border border-violet-500/40 text-white'
                              : 'hover:bg-slate-900/80 text-slate-300 border border-transparent'
                          }`}
                        >
                          <UserAvatar
                            displayName={f.displayName}
                            avatarUrl={f.avatarUrl}
                            avatarType={f.avatarType}
                            selectedBadgeLevel={f.selectedBadgeLevel}
                            level={f.level}
                            size="sm"
                            showOnlineDot={true}
                            isOnline={isFriendOnline}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold text-white truncate">{f.displayName}</p>
                            <p className="text-[10px] text-slate-400 font-mono truncate">
                              Lv.{f.level} • @{f.username}
                            </p>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        </button>
                      );
                    })
                  )
                ) : (
                  /* Discover Mentalists Tab */
                  <div className="space-y-2 p-1">
                    <p className="text-[11px] font-semibold text-slate-400 px-1">
                      Follow active mentalists to connect and unlock mutual friendships!
                    </p>
                    {isSuggestLoading ? (
                      <div className="p-8 text-center">
                        <Loader2 className="w-5 h-5 text-violet-400 animate-spin mx-auto" />
                      </div>
                    ) : suggestedFriends.length === 0 ? (
                      <p className="text-xs text-slate-500 text-center py-6">No suggestions found right now.</p>
                    ) : (
                      suggestedFriends.map((s) => {
                        const isFollowed = followingMap[s.userId];
                        const isUserOnline = onlineUserIds.has(s.userId);
                        return (
                          <div
                            key={s.userId}
                            className="p-2.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between gap-2.5"
                          >
                            <a
                              href={`/${s.username}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2.5 min-w-0 flex-1 hover:opacity-80 transition-opacity"
                            >
                              <UserAvatar
                                displayName={s.displayName}
                                avatarUrl={s.avatarUrl}
                                avatarType={s.avatarType}
                                selectedBadgeLevel={s.selectedBadgeLevel}
                                level={s.level}
                                size="sm"
                                showOnlineDot={true}
                                isOnline={isUserOnline}
                              />
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-white truncate">{s.displayName}</p>
                                <p className="text-[10px] text-amber-300 font-mono truncate">
                                  Lv.{s.level} • @{s.username}
                                </p>
                              </div>
                            </a>

                            <button
                              onClick={() => handleToggleFollow(s.userId)}
                              disabled={followLoadingId === s.userId}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all min-h-[44px] shrink-0 ${
                                isFollowed
                                  ? 'bg-emerald-600/20 text-emerald-300 border border-emerald-500/40'
                                  : 'bg-violet-600 hover:bg-violet-500 text-white shadow-sm shadow-violet-600/20'
                              }`}
                            >
                              {followLoadingId === s.userId ? (
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                              ) : isFollowed ? (
                                <>
                                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                                  <span>Following</span>
                                </>
                              ) : (
                                <>
                                  <UserPlus className="w-3.5 h-3.5" />
                                  <span>Follow</span>
                                </>
                              )}
                            </button>
                          </div>
                        );
                      })
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Right/Active Chat Area */}
            {activeFriend ? (
              <div className="flex-1 flex flex-col min-w-0 bg-slate-950">
                {/* Active Header (Desktop only) */}
                <div className="hidden sm:flex items-center justify-between p-3 border-b border-slate-800/80 bg-slate-900/40 shrink-0">
                  <div className="flex items-center gap-2">
                    <UserAvatar
                      displayName={activeFriend.displayName}
                      avatarUrl={activeFriend.avatarUrl}
                      avatarType={activeFriend.avatarType}
                      selectedBadgeLevel={activeFriend.selectedBadgeLevel}
                      level={activeFriend.level}
                      size="xs"
                      showOnlineDot={true}
                      isOnline={onlineUserIds.has(activeFriend.userId)}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">{activeFriend.displayName}</p>
                      <p className="text-[10px] text-slate-400 font-mono">
                        Rating: {activeFriend.rating} ELO • Level {activeFriend.level}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleInviteToDuel}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all min-h-[36px]"
                    title="Send Math Duel Invitation"
                  >
                    <Swords className="w-3.5 h-3.5 text-amber-400" />
                    <span>Invite 1v1</span>
                  </button>
                </div>

                {/* Messages Feed */}
                <div className="flex-1 p-3 overflow-y-auto space-y-2.5 scrollbar-thin">
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="w-6 h-6 text-violet-400 animate-spin" />
                    </div>
                  ) : messages.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-2 text-slate-500">
                      <MessageCircle className="w-8 h-8 text-slate-600" />
                      <p className="text-xs font-medium">No messages yet.</p>
                      <p className="text-[11px] text-slate-600">Send a greeting or invite them to a 1v1 math duel!</p>
                    </div>
                  ) : (
                    messages.map((m) => {
                      const isMe = m.senderId === currentUser.id;
                      const timeStr = new Date(m.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      });
                      const isDuel = m.messageText.includes('⚔️ I challenge you');

                      return (
                        <div
                          key={m.id}
                          className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} max-w-[85%] ${
                            isMe ? 'ml-auto' : 'mr-auto'
                          }`}
                        >
                          <div
                            className={`p-3 rounded-2xl text-xs font-medium leading-relaxed break-words shadow-md ${
                              isDuel
                                ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/50 text-amber-200'
                                : isMe
                                ? 'bg-violet-600 text-white rounded-br-none'
                                : 'bg-slate-900 text-slate-200 border border-slate-800 rounded-bl-none'
                            }`}
                          >
                            <p>{m.messageText}</p>
                            {isDuel && !isMe && (
                              <div className="mt-2 pt-2 border-t border-amber-500/30 flex gap-2">
                                <button
                                  onClick={() => handleSendMessage('🔥 Duel Accepted! Let’s go!')}
                                  className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-bold"
                                >
                                  Accept Duel
                                </button>
                              </div>
                            )}
                          </div>
                          <span className="text-[9px] text-slate-500 mt-1 font-mono px-1">{timeStr}</span>
                        </div>
                      );
                    })
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input & Quick Chips */}
                <div className="p-2.5 border-t border-slate-800 bg-slate-950/90 shrink-0 space-y-2 pb-safe">
                  {/* Quick Action Chips */}
                  <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1">
                    <button
                      onClick={handleInviteToDuel}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold whitespace-nowrap min-h-[36px]"
                    >
                      <Swords className="w-3 h-3 text-amber-400" />
                      <span>1v1 Duel</span>
                    </button>
                    <button
                      onClick={() => handleSendMessage('🔥 GG! Amazing speed!')}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-800 whitespace-nowrap min-h-[36px]"
                    >
                      🔥 GG!
                    </button>
                    <button
                      onClick={() => handleSendMessage('⚡ Lightning reflexes!')}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-800 whitespace-nowrap min-h-[36px]"
                    >
                      ⚡ Fast!
                    </button>
                    <button
                      onClick={() => handleSendMessage('🧠 Big brain calculation!')}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] font-medium border border-slate-800 whitespace-nowrap min-h-[36px]"
                    >
                      🧠 Big Brain!
                    </button>
                  </div>

                  {/* Message Input Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder={`Message @${activeFriend.username}...`}
                      className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-violet-500 min-h-[44px]"
                    />
                    <button
                      type="submit"
                      disabled={!inputText.trim()}
                      className={`p-3 rounded-xl text-white transition-all min-h-[44px] min-w-[44px] flex items-center justify-center ${
                        inputText.trim()
                          ? 'bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/30'
                          : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                      }`}
                      title="Send"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};
