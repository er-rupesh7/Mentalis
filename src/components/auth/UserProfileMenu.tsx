'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  User,
  LogIn,
  LogOut,
  Cloud,
  CloudOff,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Trophy,
  ChevronDown,
  Shield,
  MessageCircle,
  Settings,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { UserAvatar } from './UserAvatar';
import { getLevelProgress } from '../../core/levelEngine';

export const UserProfileMenu: React.FC = () => {
  const {
    currentUser,
    xp,
    level,
    avatarType,
    selectedBadgeLevel,
    username,
    syncStatus,
    syncError,
    setAuthModalOpen,
    signOut,
    triggerSync,
    setIsBadgePickerOpen,
    setIsChatDrawerOpen,
    setIsSettingsModalOpen,
  } = useQuizStore();

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Not signed in: Render "Sign In" button
  if (!currentUser) {
    return (
      <button
        onClick={() => setAuthModalOpen(true)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 hover:text-violet-200 border border-violet-500/30 transition-all shadow-sm group"
        title="Sign in with Google to sync progress"
      >
        <LogIn className="w-3.5 h-3.5 text-violet-400 group-hover:translate-x-0.5 transition-transform" />
        <span className="hidden sm:inline">Sign In</span>
      </button>
    );
  }

  // Helper for sync status icon & text
  const getSyncIcon = () => {
    switch (syncStatus) {
      case 'syncing':
        return <RefreshCw className="w-3 h-3 text-blue-400 animate-spin" />;
      case 'synced':
        return <CheckCircle2 className="w-3 h-3 text-emerald-400" />;
      case 'offline':
        return <CloudOff className="w-3 h-3 text-amber-400" />;
      case 'error':
        return <AlertCircle className="w-3 h-3 text-rose-400" />;
      default:
        return <Cloud className="w-3 h-3 text-slate-400" />;
    }
  };

  const getSyncLabel = () => {
    switch (syncStatus) {
      case 'syncing':
        return 'Syncing...';
      case 'synced':
        return 'Synced to Cloud';
      case 'offline':
        return 'Offline (saved locally)';
      case 'error':
        return syncError || 'Sync failed';
      default:
        return 'Ready to sync';
    }
  };

  const rawName = currentUser.displayName || currentUser.email?.split('@')[0] || 'Mentalist';
  const displayName = (!rawName || rawName.trim().toLowerCase() === 'unknown')
    ? (currentUser.email?.split('@')[0] || 'Learner')
    : rawName;

  const levelProgress = getLevelProgress(xp);
  const profileHref = username ? `/${username}` : `/${currentUser.id}`;

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-800/80 hover:border-slate-700 transition-all shadow-sm"
        title={`Account: ${displayName} • Lvl ${levelProgress.level}`}
      >
        {/* User Avatar */}
        <UserAvatar
          displayName={displayName}
          avatarUrl={currentUser.avatarUrl}
          avatarType={avatarType}
          selectedBadgeLevel={selectedBadgeLevel}
          level={levelProgress.level}
          size="xs"
          showOnlineDot={true}
          isOnline={true}
        />

        {/* Level Tag (Hidden on mobile) */}
        <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-md text-[10px] font-extrabold bg-amber-500/10 text-amber-300 border border-amber-500/30">
          Lv.{levelProgress.level}
        </span>

        {/* Sync Indicator Dot */}
        <div className="flex items-center" title={getSyncLabel()}>
          {getSyncIcon()}
        </div>

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Flyout Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 backdrop-blur-2xl text-slate-200">
          {/* User Details Header */}
          <div className="p-3 border-b border-slate-800/90 mb-2 flex items-center gap-3 bg-slate-950/40 rounded-xl">
            <UserAvatar
              displayName={displayName}
              avatarUrl={currentUser.avatarUrl}
              avatarType={avatarType}
              selectedBadgeLevel={selectedBadgeLevel}
              level={levelProgress.level}
              size="md"
              showOnlineDot={true}
              isOnline={true}
            />
            <div className="min-w-0 flex-1">
              <p className="font-bold text-xs text-white truncate">{displayName}</p>
              <p className="text-[11px] text-slate-400 truncate">
                {username ? `@${username}` : currentUser.email}
              </p>
              <div className="flex items-center gap-1.5 mt-1 text-[10px] font-medium text-amber-300">
                <Trophy className="w-3 h-3 text-amber-400 shrink-0" />
                <span className="truncate">{levelProgress.badge.badgeLevelName}</span>
              </div>
            </div>
          </div>

          {/* Level Progress Bar */}
          <div className="px-3 py-2.5 mb-2 rounded-xl bg-slate-800/40 border border-slate-800 text-xs">
            <div className="flex justify-between items-center text-[10px] font-semibold mb-1">
              <span className="text-amber-400 font-bold">Level {levelProgress.level} / 1000</span>
              <span className="text-slate-400 font-mono">
                {levelProgress.currentLevelXP.toLocaleString()} / {levelProgress.xpForNextLevel.toLocaleString()} XP
              </span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 transition-all duration-300"
                style={{ width: `${levelProgress.progressPercent}%` }}
              />
            </div>
          </div>

          {/* Main Action Links */}
          <div className="space-y-1 mb-2">
            <Link
              href={profileHref}
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-violet-400 group-hover:scale-110 transition-transform" />
                <span>View Public Profile</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300" />
            </Link>

            <button
              onClick={() => {
                setIsOpen(false);
                setIsBadgePickerOpen(true);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>1000 Badge Insignia</span>
              </div>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/30">
                Equip
              </span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                setIsChatDrawerOpen(true);
              }}
              className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>Friends & Chat</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                setIsSettingsModalOpen(true);
              }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors group"
            >
              <Settings className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-45 transition-transform" />
              <span>Settings & Profile</span>
            </button>
          </div>

          {/* Sync Status & Force Sync */}
          <div className="px-3 py-2 rounded-xl bg-slate-800/40 border border-slate-800 text-xs mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-300">
              {getSyncIcon()}
              <span className="text-[11px] truncate max-w-[140px]">{getSyncLabel()}</span>
            </div>
            <button
              onClick={() => triggerSync()}
              className="text-[10px] font-bold text-violet-400 hover:text-violet-300 hover:underline shrink-0"
              title="Force sync now"
            >
              Sync Now
            </button>
          </div>

          {/* Sign Out */}
          <div className="pt-1 border-t border-slate-800/80">
            <button
              onClick={() => {
                setIsOpen(false);
                signOut();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-300 hover:text-rose-200 hover:bg-rose-900/20 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5 text-rose-400" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
