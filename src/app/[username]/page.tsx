'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  Brain,
  ArrowLeft,
  Flame,
  Zap,
  Target,
  Trophy,
  UserCheck,
  UserPlus,
  MessageCircle,
  Users,
  Shield,
  Clock,
  Sparkles,
  Loader2,
  Calendar,
  Timer,
  Award,
  Crown,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import { socialEngine, PublicProfileView, FriendSummary } from '../../core/social/socialEngine';
import { presenceEngine } from '../../core/social/presenceEngine';
import { useQuizStore } from '../../core/store/useQuizStore';
import { UserAvatar } from '../../components/auth/UserAvatar';
import { BadgeEmblem } from '../../components/badges/BadgeEmblem';
import { MasteryBadgeEmblem } from '../../components/badges/MasteryBadgeEmblem';
import { getLevelProgress } from '../../core/levelEngine';
import { formatInvestedTime } from '../../core/mastery';
import { getEvaluatedMasteryBadges, getMasteryBadgeById } from '../../core/badges/masteryBadges';

export default function PublicProfilePage() {
  const params = useParams();
  const username = Array.isArray(params?.username) ? params.username[0] : (params?.username as string);

  const { currentUser, setAuthModalOpen } = useQuizStore();

  const [profileView, setProfileView] = useState<PublicProfileView | null>(null);
  const [friendsList, setFriendsList] = useState<FriendSummary[]>([]);
  const [suggestedUsers, setSuggestedUsers] = useState<FriendSummary[]>([]);
  const [followedMap, setFollowedMap] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'matrix' | 'friends' | 'suggestions'>('matrix');
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowLoading, setIsFollowLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    if (!username || username === 'undefined' || username === 'null') {
      setIsLoading(false);
      return;
    }

    let mounted = true;
    setIsLoading(true);

    socialEngine
      .fetchPublicProfile(username, currentUser?.id)
      .then((data) => {
        if (mounted) {
          setProfileView(data);
          setIsLoading(false);
          if (data) {
            setIsOnline(presenceEngine.isUserOnline(data.profile.id));
            socialEngine.fetchFriends(data.profile.id).then((friends) => {
              if (mounted) setFriendsList(friends);
            });
          }
        }
      })
      .catch((err) => {
        console.error('Error fetching public profile:', err);
        if (mounted) setIsLoading(false);
      });

    // Fetch suggested mentalists
    socialEngine
      .fetchSuggestedFriends(currentUser?.id || 'anonymous', 6)
      .then((suggestions) => {
        if (mounted) setSuggestedUsers(suggestions);
      })
      .catch(console.error);

    return () => {
      mounted = false;
    };
  }, [username, currentUser?.id]);

  // Subscribe reactively to online presence changes for this profile
  useEffect(() => {
    const targetUserId = profileView?.profile?.id;
    if (!targetUserId) return;

    setIsOnline(presenceEngine.isUserOnline(targetUserId));
    const unsubPresence = presenceEngine.subscribe(() => {
      setIsOnline(presenceEngine.isUserOnline(targetUserId));
    });

    return () => {
      unsubPresence();
    };
  }, [profileView?.profile?.id]);

  const handleToggleFollow = async () => {
    if (!currentUser) {
      setAuthModalOpen(true);
      return;
    }
    if (!profileView) return;

    setIsFollowLoading(true);
    const { isFollowing } = await socialEngine.toggleFollow(currentUser.id, profileView.profile.id);
    setIsFollowLoading(false);

    setProfileView((prev) => {
      if (!prev) return prev;
      const willBeFriend = isFollowing && prev.isFollowedBy;
      return {
        ...prev,
        isFollowing,
        isFriend: willBeFriend,
        followersCount: prev.followersCount + (isFollowing ? 1 : -1),
        friendsCount: prev.friendsCount + (willBeFriend ? 1 : prev.isFriend ? -1 : 0),
      };
    });
  };

  const handleToggleSuggestedFollow = async (targetUserId: string) => {
    if (!currentUser) {
      setAuthModalOpen(true);
      return;
    }
    const { isFollowing } = await socialEngine.toggleFollow(currentUser.id, targetUserId);
    setFollowedMap((prev) => ({ ...prev, [targetUserId]: isFollowing }));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-400 font-mono">
        <Loader2 className="w-8 h-8 animate-spin text-violet-500 mb-3" />
        <p>Loading Mentalab Brain Matrix...</p>
      </div>
    );
  }

  if (!profileView) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-center">
        <div className="p-5 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl max-w-md w-full">
          <Brain className="w-12 h-12 text-violet-400 mx-auto mb-3" />
          <h1 className="text-xl font-bold text-white mb-1.5">Profile Not Found</h1>
          <p className="text-xs text-slate-400 mb-5 leading-relaxed">
            {(!username || username === 'undefined' || username === 'null')
              ? 'No username is selected yet. Sign in and pick your custom username in Settings to activate your public profile link!'
              : `No Mentalab profile was found for @${username}. Check the username or discover other learners below.`}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-bold shadow-lg shadow-violet-600/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Mentalab</span>
          </Link>
        </div>
      </div>
    );
  }

  const { profile, stats, rankInfo, followersCount, followingCount, friendsCount, isFollowing, isFriend } = profileView;
  const isOwnProfile = currentUser?.id === profile.id;
  const levelInfo = getLevelProgress(profile.xp);

  const timeSpent = stats.totalTimeSpentSeconds || 0;
  const timeInfo = formatInvestedTime(timeSpent);
  const avgLatency = stats.totalQuestions > 0 && timeSpent > 0
    ? (timeSpent / stats.totalQuestions).toFixed(2)
    : '0.00';

  const equippedMasteryBadge = profile.equippedMasteryBadgeId
    ? getMasteryBadgeById(profile.equippedMasteryBadgeId)
    : null;

  // Evaluate user mastery badges from stats and progress
  const evaluatedBadges = getEvaluatedMasteryBadges({
    overallStats: {
      totalCalculations: stats.totalQuestions,
      totalCorrect: stats.totalCorrect,
      totalTimeSpentSeconds: timeSpent,
      currentStreak: stats.currentStreak,
      longestStreak: stats.longestStreak,
    },
    progressMap: stats.progressMap || {},
    factMemoryMap: {},
  });

  const unlockedMasteryCount = evaluatedBadges.filter((b) => b.isUnlocked).length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-violet-600 selection:text-white pb-12">
      {/* Top Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-violet-400 font-mono">@{profile.username}</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-6 space-y-6">
        {/* Profile Card Hero */}
        <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 overflow-hidden">
          {/* Subtle Glows */}
          <div
            className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: levelInfo.badge.tier.primaryColor }}
          />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            {/* User Info Header */}
            <div className="flex items-center gap-4 sm:gap-5">
              <UserAvatar
                displayName={profile.displayName}
                avatarUrl={profile.avatarUrl}
                avatarType={profile.avatarType}
                selectedBadgeLevel={profile.selectedBadgeLevel}
                selectedMasteryBadgeId={profile.equippedMasteryBadgeId}
                level={profile.level}
                size="xl"
                showOnlineDot={true}
                isOnline={isOnline}
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight truncate">
                    {profile.displayName}
                  </h1>
                  <span className="text-xs font-mono text-slate-400 font-medium">
                    @{profile.username}
                  </span>
                  {isOnline ? (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                      Online
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" />
                      Active recently
                    </span>
                  )}
                </div>

                {/* Level Title, Badge & Mastery Feat Pill */}
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <BadgeEmblem level={profile.level} size="sm" showStars={false} />
                  <span
                    className="text-xs font-extrabold tracking-wide"
                    style={{ color: levelInfo.badge.tier.primaryColor }}
                  >
                    Level {profile.level} • {levelInfo.badge.title}
                  </span>
                  {profile.avatarType === 'mastery' && equippedMasteryBadge && (
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-[11px] font-bold shadow-sm">
                      <MasteryBadgeEmblem badgeId={equippedMasteryBadge.id} size="xs" />
                      <span>{equippedMasteryBadge.title}</span>
                    </div>
                  )}
                </div>

                {/* Social Counts Bar */}
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-300">
                  <div>
                    <strong className="text-white font-mono">{followersCount}</strong>{' '}
                    <span className="text-slate-400">Followers</span>
                  </div>
                  <div>
                    <strong className="text-white font-mono">{followingCount}</strong>{' '}
                    <span className="text-slate-400">Following</span>
                  </div>
                  <div>
                    <strong className="text-emerald-400 font-mono">{friendsCount}</strong>{' '}
                    <span className="text-slate-400">Friends</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {!isOwnProfile && (
              <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
                <button
                  onClick={handleToggleFollow}
                  disabled={isFollowLoading}
                  className={`flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md ${
                    isFollowing
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      : 'bg-violet-600 hover:bg-violet-500 text-white shadow-violet-600/30'
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <UserCheck className="w-4 h-4 text-emerald-400" />
                      <span>{isFriend ? 'Friends' : 'Following'}</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4" />
                      <span>Follow</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Level Progress Bar */}
          <div className="mt-6 pt-5 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs mb-1.5 font-mono">
              <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Rank Progress: Level {profile.level}
              </span>
              <span className="text-slate-400">
                {levelInfo.currentLevelXP.toLocaleString()} / {levelInfo.xpForNextLevel.toLocaleString()} XP (
                {levelInfo.progressPercent}%)
              </span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-950 overflow-hidden border border-slate-800">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${levelInfo.progressPercent}%`,
                  background: `linear-gradient(90deg, ${levelInfo.badge.tier.primaryColor}, ${levelInfo.badge.tier.secondaryColor})`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'matrix'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Brain Matrix & Capability</span>
          </button>

          <button
            onClick={() => setActiveTab('friends')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'friends'
                ? 'bg-violet-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Mutual Friends ({friendsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab('suggestions')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'suggestions'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Discover Mentalists ({suggestedUsers.length})</span>
          </button>
        </div>

        {/* Tab 1: Brain Matrix & Capabilities */}
        {activeTab === 'matrix' && (
          <div className="space-y-6 animate-in fade-in duration-150">
            {/* Core Stats Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Target className="w-4 h-4 text-violet-400" />
                  <span>Calculations</span>
                </div>
                <p className="text-xl font-black text-white font-mono">
                  {stats.totalQuestions.toLocaleString()}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Speed (CPM)</span>
                </div>
                <p className="text-xl font-black text-white font-mono">
                  {stats.overallCPM || 0}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span>Best Streak</span>
                </div>
                <p className="text-xl font-black text-white font-mono">
                  {stats.longestStreak || 0}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  <span>Accuracy</span>
                </div>
                <p className="text-xl font-black text-white font-mono">
                  {stats.overallAccuracy || 0}%
                </p>
              </div>
            </div>

            {/* Invested Practice Time Metrics Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Timer className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      Invested Practice Time & Calculation Latency
                    </h3>
                    <p className="text-xs text-slate-400">
                      Exact active calculation time accumulated during mental math drills.
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-cyan-300 px-2.5 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
                  <Clock className="w-3.5 h-3.5" /> High Precision
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 text-xs block mb-1">Total Practiced Time</span>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 font-mono">
                    {timeInfo.formatted}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    {timeInfo.hours > 0 ? `${timeInfo.hours} hr ` : ''}
                    {timeInfo.minutes} min {timeInfo.seconds} sec
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 text-xs block mb-1">Average Response Latency</span>
                  <div className="text-2xl font-black text-amber-300 font-mono">
                    {avgLatency}s
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    seconds per calculation
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 text-xs block mb-1">Total Correct Solutions</span>
                  <div className="text-2xl font-black text-emerald-400 font-mono">
                    {stats.totalCorrect.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    of {stats.totalQuestions.toLocaleString()} attempted
                  </span>
                </div>
              </div>
            </div>

            {/* Competitive Global Arena Rating & Rank Tier */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    <Crown className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      Competitive Global Rating & Tier
                    </h3>
                    <p className="text-xs text-slate-400">
                      Calculated from calculation speed, accuracy, streaks, and training volume.
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 font-bold text-xs border border-violet-500/30">
                  Top {rankInfo?.percentile || 50}% Globally
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1">Rank Division Tier</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-extrabold text-base tracking-tight"
                      style={{ color: rankInfo?.ratingTierDetails?.color || '#38bdf8' }}
                    >
                      {rankInfo?.ratingTierDetails?.tier || rankInfo?.ratingTier || profile.tier || 'Bronze Novice'}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    {rankInfo?.ratingTierDetails?.badgeTitle || 'Novice'} Division {rankInfo?.ratingTierDetails?.division || 'V'}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1">Competitive Rating</span>
                  <div className="text-2xl font-black text-amber-300 font-mono">
                    {rankInfo?.rating || profile.rating || 1200}
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block font-mono">
                    Global Rating Points (ELO)
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1">Leaderboard Standing</span>
                  <div className="text-2xl font-black text-violet-300 font-mono">
                    Top {rankInfo?.percentile || 50}%
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    among registered mentalists
                  </span>
                </div>
              </div>
            </div>

            {/* Mastered Feats & Badges Showcase Shelf */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      Mastery Badges & Feats
                    </h3>
                    <p className="text-xs text-slate-400">
                      Equippable milestone emblems unlocked across Squares, Cubes, Roots, and Tables.
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-amber-300">
                  {unlockedMasteryCount} / 16 Unlocked
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {evaluatedBadges.map((badge) => {
                  const isEquipped = profile.avatarType === 'mastery' && profile.equippedMasteryBadgeId === badge.id;
                  return (
                    <div
                      key={badge.id}
                      className={`p-3.5 rounded-2xl border flex flex-col items-center text-center transition-all relative ${
                        isEquipped
                          ? 'bg-violet-950/40 border-violet-500/80 shadow-lg shadow-violet-500/10'
                          : badge.isUnlocked
                          ? 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                          : 'bg-slate-950/40 border-slate-800/50 opacity-40'
                      }`}
                    >
                      <MasteryBadgeEmblem badgeId={badge.id} size="md" />
                      <h4 className="text-xs font-bold text-white mt-2 truncate w-full">
                        {badge.title}
                      </h4>
                      <span className="text-[10px] font-mono uppercase text-violet-400 mt-0.5">
                        {badge.tier}
                      </span>
                      <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 leading-tight">
                        {badge.criterionText}
                      </p>

                      {isEquipped && (
                        <span className="mt-2 text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          Active Avatar
                        </span>
                      )}
                      {!badge.isUnlocked && (
                        <span className="mt-2 text-[9px] font-medium px-2 py-0.5 rounded-full bg-slate-900 text-slate-500 border border-slate-800">
                          Locked
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Matrix Status Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <Brain className="w-5 h-5 text-violet-400" />
                <span>Cognitive Working Memory & Automaticity</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Snapshot of mental calculations, spaced repetition retrieval stability, and table automaticity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1">Rank Tier</span>
                  <span
                    className="font-bold text-sm"
                    style={{ color: levelInfo.badge.tier.primaryColor }}
                  >
                    {levelInfo.badge.tier.name} {levelInfo.badge.subRank}
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1">Total Points</span>
                  <span className="font-bold text-sm text-white font-mono">
                    {profile.xp.toLocaleString()} XP
                  </span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1">Arena Rating</span>
                  <span className="font-bold text-sm text-amber-300 font-mono">
                    {rankInfo?.rating || profile.rating || 1200} ELO
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Mutual Friends */}
        {activeTab === 'friends' && (
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 animate-in fade-in duration-150">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-violet-400" />
              <span>Mutual Friends ({friendsList.length})</span>
            </h3>

            {friendsList.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">
                No mutual friends yet. When two Mentalab learners follow each other, they become friends!
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {friendsList.map((f) => (
                  <Link
                    key={f.userId}
                    href={`/${f.username}`}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-violet-500/50 transition-all group"
                  >
                    <UserAvatar
                      displayName={f.displayName}
                      avatarUrl={f.avatarUrl}
                      avatarType={f.avatarType}
                      selectedBadgeLevel={f.selectedBadgeLevel}
                      selectedMasteryBadgeId={f.equippedMasteryBadgeId}
                      level={f.level}
                      size="sm"
                      showOnlineDot={true}
                      isOnline={presenceEngine.isUserOnline(f.userId)}
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate group-hover:text-violet-300 transition-colors">
                        {f.displayName}
                      </p>
                      <p className="text-[10px] text-slate-500 font-mono">@{f.username}</p>
                      <p className="text-[10px] text-violet-400 font-mono">Lv. {f.level}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 3: Discover Mentalists (Suggested Users) */}
        {activeTab === 'suggestions' && (
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 animate-in fade-in duration-150">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Discover & Follow Active Mentalists</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                {suggestedUsers.length} suggestions
              </span>
            </div>

            {suggestedUsers.length === 0 ? (
              <p className="text-xs text-slate-400 py-6 text-center">
                All discovered mentalists have already been followed! Check back soon as new learners join.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {suggestedUsers.map((s) => {
                  const isFollowing = followedMap[s.userId] ?? false;
                  return (
                    <div
                      key={s.userId}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-all"
                    >
                      <Link
                        href={`/${s.username}`}
                        className="flex items-center gap-3 min-w-0 flex-1 group mr-2"
                      >
                        <UserAvatar
                          displayName={s.displayName}
                          avatarUrl={s.avatarUrl}
                          avatarType={s.avatarType}
                          selectedBadgeLevel={s.selectedBadgeLevel}
                          selectedMasteryBadgeId={s.equippedMasteryBadgeId}
                          level={s.level}
                          size="sm"
                          showOnlineDot={true}
                          isOnline={presenceEngine.isUserOnline(s.userId)}
                        />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-white truncate group-hover:text-violet-300 transition-colors">
                            {s.displayName}
                          </p>
                          <p className="text-[10px] text-slate-500 font-mono">@{s.username}</p>
                          <p className="text-[10px] text-amber-300 font-mono">
                            Lv. {s.level} • {s.rating} ELO
                          </p>
                        </div>
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleToggleSuggestedFollow(s.userId)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 shadow-sm ${
                          isFollowing
                            ? 'bg-slate-800 text-emerald-400 border border-emerald-500/30'
                            : 'bg-violet-600 hover:bg-violet-500 text-white shadow-violet-600/20'
                        }`}
                      >
                        {isFollowing ? (
                          <>
                            <UserCheck className="w-3.5 h-3.5" />
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
                })}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
