'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Trophy, Crown, Flame, Zap, ArrowUpRight, Sparkles } from 'lucide-react';
import { fetchLiveLeaderboard, RankedPlayer } from '../../core/ranking/rankingEngine';
import { useQuizStore } from '../../core/store/useQuizStore';
import { BadgeEmblem } from '../badges/BadgeEmblem';
import { MasteryBadgeEmblem } from '../badges/MasteryBadgeEmblem';

const MEDALS = [
  { icon: '🥇', label: '1st', color: 'from-amber-400 to-yellow-500 text-amber-300 border-amber-500/40 bg-amber-500/10' },
  { icon: '🥈', label: '2nd', color: 'from-slate-300 to-slate-400 text-slate-200 border-slate-400/40 bg-slate-400/10' },
  { icon: '🥉', label: '3rd', color: 'from-amber-600 to-amber-700 text-amber-500 border-amber-600/40 bg-amber-600/10' },
];

export function LiveRankTicker() {
  const { currentUser, xp, level, streak, overallStats, techniqueMasteryMap, factMemoryMap } = useQuizStore();
  const [topThree, setTopThree] = useState<RankedPlayer[]>([]);
  const [activeMarquee, setActiveMarquee] = useState<RankedPlayer[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let mounted = true;

    // Count user mastered facts
    const factsCount = Object.values(factMemoryMap).filter((f) => f.masteryScore >= 0.85).length;
    const techniquesCount = Object.values(techniqueMasteryMap).filter((t) => t.isMastered).length;

    const userAccuracy = overallStats.totalCalculations > 0
      ? Math.round((overallStats.totalCorrect / overallStats.totalCalculations) * 100)
      : 95;

    const currentSummary = currentUser ? {
      id: currentUser.id,
      username: currentUser.email?.split('@')[0] || 'you',
      displayName: currentUser.displayName || 'You',
      avatarType: 'google',
      level,
      xp,
      streak,
      accuracy: userAccuracy,
      techniquesCount,
      factsCount,
    } : undefined;

    fetchLiveLeaderboard(currentSummary).then((res) => {
      if (mounted) {
        setTopThree(res.topThree);
        setActiveMarquee(res.activeMarquee);
        setIsLoaded(true);
      }
    });

    // Auto-update rankings every 1 hour (3600000 ms) in background
    const interval = setInterval(() => {
      fetchLiveLeaderboard(currentSummary, true).then((res) => {
        if (mounted) {
          setTopThree(res.topThree);
          setActiveMarquee(res.activeMarquee);
        }
      });
    }, 60 * 60 * 1000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, [currentUser, xp, level, streak, overallStats, techniqueMasteryMap, factMemoryMap]);

  if (!isLoaded || topThree.length === 0) return null;

  return (
    <div className="w-full bg-slate-950/80 border-b border-slate-800/80 backdrop-blur-md overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-3 py-1.5 flex items-center gap-3">
        {/* Top 3 Champions Ribbon (Desktop & Tablet) */}
        <div className="hidden md:flex items-center gap-2 border-r border-slate-800 pr-3 shrink-0">
          <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Top 3</span>
          </div>

          <div className="flex items-center gap-1.5">
            {topThree.map((player, idx) => {
              const medal = MEDALS[idx];
              return (
                <Link
                  key={player.id}
                  href={`/${player.username}`}
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-xs transition-transform hover:scale-105 active:scale-95 ${medal.color}`}
                  title={`${player.displayName} (${player.rp.toLocaleString()} RP)`}
                >
                  <span className="text-xs">{medal.icon}</span>
                  <span className="font-bold text-white text-[11px] truncate max-w-[80px]">
                    {player.displayName}
                  </span>
                  <span className="font-mono text-[10px] text-amber-300 font-semibold">
                    {Math.round(player.rp / 1000)}k RP
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Live Active Marquee Ticker */}
        <div className="flex-1 flex items-center overflow-hidden relative">
          {/* Subtle edge fades */}
          <div className="absolute left-0 inset-y-0 w-6 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-6 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex items-center gap-4 whitespace-nowrap text-xs"
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 35,
                ease: 'linear',
              },
            }}
          >
            {/* Duplicate array for seamless infinite marquee loop */}
            {[...activeMarquee, ...activeMarquee].map((player, i) => (
              <Link
                key={`${player.id}-${i}`}
                href={`/${player.username}`}
                className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors group"
              >
                <span className="text-[10px] font-mono text-slate-500 font-bold">
                  #{player.rank}
                </span>
                <span className="font-semibold text-slate-200 group-hover:text-violet-300 truncate max-w-[90px]">
                  {player.displayName}
                </span>
                <span className="font-mono text-[10px] px-1.5 py-0.2 rounded bg-slate-900 border border-slate-800 text-emerald-400 font-bold">
                  {player.rp.toLocaleString()} RP
                </span>
                <span className="text-slate-700 mx-1">•</span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
