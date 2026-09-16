'use client';

import React from 'react';
import {
  LayoutDashboard,
  Grid,
  Sliders,
  Sparkles,
  User,
  LogIn,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useQuizStore } from '../core/store/useQuizStore';

export const MobileTabBar: React.FC = () => {
  const tNav = useTranslations('nav');
  const {
    viewMode,
    setViewMode,
    isCustomDrillModalOpen,
    setIsCustomDrillModalOpen,
    level,
    streak,
    currentUser,
    setAuthModalOpen,
  } = useQuizStore();

  // Hide during focused full-screen drill modes or when custom drill builder modal is open
  if (viewMode === 'practice' || viewMode === 'anzan' || isCustomDrillModalOpen) {
    return null;
  }

  const isTablesActive = viewMode === 'heatmap' || viewMode === 'table_chart';
  const isTricksActive = viewMode === 'techniques';
  const isHomeActive =
    viewMode === 'dashboard' ||
    viewMode === 'bootcamp_11_20' ||
    viewMode === 'exam_quant' ||
    viewMode === 'memory_map' ||
    viewMode === 'assessment';
  const isProfileActive = viewMode === 'profile';

  return (
    <nav
      className="sm:hidden fixed bottom-0 left-0 right-0 z-50 select-none touch-manipulation"
      aria-label="Mobile Bottom Navigation"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Glass morphism bar */}
      <div className="bg-slate-950/92 backdrop-blur-2xl border-t border-slate-800/60 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
        <div className="flex items-end justify-around px-1 pt-1.5 pb-2 h-16">

          {/* HOME */}
          <button
            onClick={() => setViewMode('dashboard')}
            className="flex flex-col items-center justify-end gap-1 flex-1 pb-0.5 group relative active:scale-95 transition-transform duration-100"
            aria-label="Home"
          >
            <div className="relative flex flex-col items-center">
              {streak > 0 && (
                <span className="absolute -top-1.5 -right-2.5 min-w-[16px] h-4 px-1 bg-amber-500 text-[8px] font-black text-slate-950 rounded-full flex items-center justify-center leading-none z-10">
                  {streak > 99 ? '99+' : streak}
                </span>
              )}
              <LayoutDashboard
                className={`w-[22px] h-[22px] transition-colors duration-200 ${
                  isHomeActive ? 'text-violet-400' : 'text-slate-500 group-hover:text-slate-300'
                }`}
                strokeWidth={isHomeActive ? 2.5 : 2}
              />
            </div>
            <span className={`text-[10px] font-semibold leading-none tracking-tight transition-colors duration-200 ${isHomeActive ? 'text-violet-300' : 'text-slate-500'}`}>
              Home
            </span>
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-violet-500 transition-all duration-300 ${isHomeActive ? 'w-6 opacity-100' : 'w-0 opacity-0'}`} />
          </button>

          {/* TABLES */}
          <button
            onClick={() => setViewMode('heatmap')}
            className="flex flex-col items-center justify-end gap-1 flex-1 pb-0.5 group relative active:scale-95 transition-transform duration-100"
            aria-label="100 Tables"
          >
            <Grid
              className={`w-[22px] h-[22px] transition-colors duration-200 ${
                isTablesActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'
              }`}
              strokeWidth={isTablesActive ? 2.5 : 2}
            />
            <span className={`text-[10px] font-semibold leading-none tracking-tight transition-colors duration-200 ${isTablesActive ? 'text-emerald-300' : 'text-slate-500'}`}>
              Tables
            </span>
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-emerald-500 transition-all duration-300 ${isTablesActive ? 'w-6 opacity-100' : 'w-0 opacity-0'}`} />
          </button>

          {/* DRILL — Center Elevated FAB */}
          <button
            onClick={() => setIsCustomDrillModalOpen(true)}
            className="flex flex-col items-center justify-center flex-shrink-0 -mt-5 group active:scale-90 transition-transform duration-100 relative"
            aria-label="Custom Drill"
          >
            {/* Ambient glow */}
            <span className="absolute inset-0 w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 opacity-25 blur-lg group-hover:opacity-40 transition-opacity mx-auto" />
            {/* Gradient border FAB */}
            <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-2xl shadow-violet-600/50">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center group-hover:bg-slate-900 transition-colors">
                <Sliders className="w-6 h-6 text-violet-300" />
              </div>
            </div>
            <span className="text-[9px] font-black text-violet-300 mt-1 tracking-widest uppercase leading-none">
              Drill
            </span>
          </button>

          {/* TRICKS */}
          <button
            onClick={() => setViewMode('techniques')}
            className="flex flex-col items-center justify-end gap-1 flex-1 pb-0.5 group relative active:scale-95 transition-transform duration-100"
            aria-label="Tricks"
          >
            <Sparkles
              className={`w-[22px] h-[22px] transition-colors duration-200 ${
                isTricksActive ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-300'
              }`}
              strokeWidth={isTricksActive ? 2.5 : 2}
            />
            <span className={`text-[10px] font-semibold leading-none tracking-tight transition-colors duration-200 ${isTricksActive ? 'text-amber-300' : 'text-slate-500'}`}>
              Tricks
            </span>
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-amber-500 transition-all duration-300 ${isTricksActive ? 'w-6 opacity-100' : 'w-0 opacity-0'}`} />
          </button>

          {/* PROFILE / LOGIN */}
          <button
            onClick={() => {
              if (!currentUser) {
                setAuthModalOpen(true);
              } else {
                setViewMode('profile');
              }
            }}
            className="flex flex-col items-center justify-end gap-1 flex-1 pb-0.5 group relative active:scale-95 transition-transform duration-100"
            aria-label={currentUser ? 'Profile' : 'Login'}
          >
            <div className="relative flex flex-col items-center">
              {currentUser ? (
                <>
                  <span className={`absolute -top-1.5 -right-2.5 min-w-[18px] h-[18px] px-1 text-[9px] font-black rounded-full flex items-center justify-center leading-none z-10 transition-colors ${isProfileActive ? 'bg-violet-500 text-white' : 'bg-slate-700 text-slate-300'}`}>
                    {level > 99 ? '99+' : level}
                  </span>
                  <User
                    className={`w-[22px] h-[22px] transition-colors duration-200 ${
                      isProfileActive ? 'text-violet-400' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                    strokeWidth={isProfileActive ? 2.5 : 2}
                  />
                </>
              ) : (
                <>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
                  <LogIn
                    className="w-[22px] h-[22px] text-violet-400 transition-colors duration-200 group-hover:text-violet-300"
                    strokeWidth={2.2}
                  />
                </>
              )}
            </div>
            <span className={`text-[10px] font-semibold leading-none tracking-tight transition-colors duration-200 ${isProfileActive || !currentUser ? 'text-violet-300' : 'text-slate-500'}`}>
              {currentUser ? 'Profile' : 'Login'}
            </span>
            <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-violet-500 transition-all duration-300 ${isProfileActive ? 'w-6 opacity-100' : 'w-0 opacity-0'}`} />
          </button>

        </div>
      </div>
    </nav>
  );
};


