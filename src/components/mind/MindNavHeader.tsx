'use client';

import React from 'react';
import Link from 'next/link';
import { Brain, LayoutDashboard, Bookmark, Compass, Sparkles, ArrowLeft } from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';

interface MindNavHeaderProps {
  breadcrumbTitle?: string;
  categoryTitle?: string;
  categorySlug?: string;
}

export const MindNavHeader: React.FC<MindNavHeaderProps> = ({
  breadcrumbTitle,
  categoryTitle,
  categorySlug,
}) => {
  const { setViewMode } = useQuizStore();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
        {/* Brand & Breadcrumbs */}
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/mind"
            className="flex items-center gap-2 text-left group shrink-0"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-violet-600/30 group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Brain className="w-4 h-4 text-violet-300" />
              </div>
            </div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-white hidden sm:inline">
              menta<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">lab</span>
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 text-[10px] font-mono border border-violet-500/20">
                MIND
              </span>
            </span>
          </Link>

          {/* Breadcrumbs for deep navigation */}
          {(categoryTitle || breadcrumbTitle) && (
            <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400 font-medium truncate">
              <span className="text-slate-600">/</span>
              {categoryTitle && categorySlug ? (
                <Link
                  href={`/mind/${categorySlug}`}
                  className="hover:text-slate-200 truncate transition-colors"
                >
                  {categoryTitle}
                </Link>
              ) : categoryTitle ? (
                <span className="truncate">{categoryTitle}</span>
              ) : null}

              {breadcrumbTitle && (
                <>
                  <span className="text-slate-600">/</span>
                  <span className="text-slate-200 truncate font-semibold">
                    {breadcrumbTitle}
                  </span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Action Pills */}
        <div className="flex items-center gap-2 shrink-0">
          <Link
            href="/mind"
            className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden sm:inline">Explore Tracks</span>
          </Link>

          <Link
            href="/"
            onClick={() => setViewMode('dashboard')}
            className="px-3 py-1.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800/80 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Math Dashboard</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
