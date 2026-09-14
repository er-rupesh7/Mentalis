'use client';

import React from 'react';
import {
  LayoutDashboard,
  Grid,
  Sparkles,
  Sliders,
  User,
  Flame,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useQuizStore } from '../core/store/useQuizStore';

export const MobileTabBar: React.FC = () => {
  const tNav = useTranslations('nav');
  const {
    viewMode,
    setViewMode,
    setIsCustomDrillModalOpen,
    level,
  } = useQuizStore();

  // Hide mobile bottom tab bar during focused drill modes
  if (viewMode === 'practice' || viewMode === 'anzan') {
    return null;
  }

  const tabs = [
    {
      id: 'dashboard',
      label: 'Home',
      icon: LayoutDashboard,
      isActive: viewMode === 'dashboard',
      onClick: () => setViewMode('dashboard'),
    },
    {
      id: 'tables',
      label: '100 Tables',
      icon: Grid,
      isActive: viewMode === 'heatmap' || viewMode === 'table_chart',
      onClick: () => setViewMode('heatmap'),
    },
    {
      id: 'drill',
      label: 'Custom Drill',
      icon: Sliders,
      isAction: true,
      isActive: false,
      onClick: () => setIsCustomDrillModalOpen(true),
    },
    {
      id: 'techniques',
      label: 'Tricks',
      icon: Sparkles,
      isActive: viewMode === 'techniques',
      onClick: () => setViewMode('techniques'),
    },
    {
      id: 'profile',
      label: `Lvl ${level}`,
      icon: User,
      isActive: viewMode === 'profile',
      onClick: () => setViewMode('profile'),
    },
  ];

  return (
    <nav
      className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-2xl border-t border-slate-800/80 px-2 pt-1.5 pb-safe pb-2 flex items-center justify-around shadow-2xl shadow-slate-950 select-none touch-manipulation"
      aria-label="Mobile Bottom Navigation"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;

        if (tab.isAction) {
          return (
            <button
              key={tab.id}
              onClick={tab.onClick}
              className="flex flex-col items-center justify-center -mt-4 group relative active:scale-95 transition-all"
              aria-label={tab.label}
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-lg shadow-violet-600/40 group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-violet-300" />
                </div>
              </div>
              <span className="text-[10px] font-bold text-violet-300 mt-0.5 tracking-tight font-mono">
                Drill
              </span>
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-all relative active:scale-95 ${
              tab.isActive
                ? 'text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-label={tab.label}
          >
            <div className="relative">
              <Icon
                className={`w-5 h-5 transition-colors ${
                  tab.isActive ? 'text-violet-400' : 'text-slate-400'
                }`}
              />
              {tab.isActive && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-1 bg-violet-500 rounded-full shadow-sm shadow-violet-500" />
              )}
            </div>
            <span
              className={`text-[10px] mt-1 font-semibold tracking-tight ${
                tab.isActive ? 'text-white font-bold' : 'text-slate-400'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
