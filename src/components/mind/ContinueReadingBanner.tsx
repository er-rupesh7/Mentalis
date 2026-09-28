'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  BookOpen,
  ArrowRight,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Clock,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { getCategorySlugForTopic } from '../../core/mind/mindSeo';
import { CURRICULUM_CATALOG } from '../../core/mind/mindCurriculum';
import { MindLanguageCode } from '../../core/mind/types';

export interface LastReadTopicState {
  topicId: string;
  topicSlug: string;
  title: string;
  categoryId: string;
  categoryTitle: string;
  categorySlug: string;
  progressPercent: number;
  lastReadAt: number;
  language: MindLanguageCode;
}

const STORAGE_KEY = 'mentalis_last_read_mind_topic';

export function saveLastReadTopic(data: Omit<LastReadTopicState, 'lastReadAt'>) {
  if (typeof window === 'undefined') return;
  try {
    const payload: LastReadTopicState = {
      ...data,
      lastReadAt: Date.now(),
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Non-blocking fallback
  }
}

export function getLastReadTopic(): LastReadTopicState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as LastReadTopicState;
  } catch {
    return null;
  }
}

export const ContinueReadingBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [lastRead, setLastRead] = useState<LastReadTopicState | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = getLastReadTopic();
    if (saved) {
      setLastRead(saved);
    } else {
      // Default fallback showcase topic: Bystander Effect in Social Psychology
      const defaultTopic = CURRICULUM_CATALOG['bystander_effect']?.en;
      if (defaultTopic) {
        setLastRead({
          topicId: 'bystander_effect',
          topicSlug: 'bystander-effect',
          title: defaultTopic.title,
          categoryId: 'social_psychology',
          categoryTitle: 'Social Psychology',
          categorySlug: 'social-psychology',
          progressPercent: 0,
          lastReadAt: 0,
          language: 'en',
        });
      }
    }
  }, []);

  if (!isMounted || !lastRead) return null;

  const isResuming = lastRead.lastReadAt > 0 && lastRead.progressPercent > 0;
  const href = `/mind/${lastRead.categorySlug}/${lastRead.topicSlug}${
    lastRead.language && lastRead.language !== 'en' ? `?lang=${lastRead.language}` : ''
  }`;

  return (
    <div className={`w-full ${className}`}>
      <div className="relative overflow-hidden rounded-2xl border border-violet-500/30 bg-gradient-to-r from-slate-900/95 via-indigo-950/40 to-slate-900/95 p-4 sm:p-5 backdrop-blur-md shadow-xl shadow-violet-950/20 group hover:border-violet-500/50 transition-all duration-300">
        {/* Ambient background glow */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-600/20 transition-all" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left: Icon & Topic Details */}
          <div className="flex items-start sm:items-center gap-3.5 min-w-0">
            <div className="relative shrink-0 p-2.5 sm:p-3 rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400 group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6" />
              {isResuming && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500" />
                </span>
              )}
            </div>

            <div className="min-w-0 space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  {isResuming ? 'Continue Reading' : 'Featured Mental Model'}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {lastRead.categoryTitle}
                </span>
                {isResuming && (
                  <span className="text-[10px] font-mono text-emerald-400 font-semibold bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800/40">
                    {lastRead.progressPercent}% Completed
                  </span>
                )}
              </div>

              <h2 className="text-sm sm:text-base font-bold text-slate-100 truncate group-hover:text-white transition-colors">
                {lastRead.title}
              </h2>

              {/* Progress bar if in progress */}
              {isResuming && (
                <div className="w-full max-w-[240px] h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.max(5, Math.min(100, lastRead.progressPercent))}%` }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Right: CTA button */}
          <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
            <Link
              href={href}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md shadow-violet-600/30 border border-violet-400/30 transition-all"
            >
              <span>{isResuming ? 'Resume Reading' : 'Explore Concept'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              href="/mind"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700/50 transition-colors"
            >
              <span>All Tracks</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
