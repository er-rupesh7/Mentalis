'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import {
  Brain,
  Flame,
  Volume2,
  VolumeX,
  LayoutDashboard,
  Calculator,
  Zap,
  Grid,
  BookOpen,
  Sparkles,
  ChevronDown,
  Table,
  Target,
  Sliders,
  Settings,
  MessageCircle,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { TableChartTab } from '../core/types';
import { LanguageSelector } from './LanguageSelector';
import { UserProfileMenu } from './auth/UserProfileMenu';
import { NotificationBell } from './notifications/NotificationBell';

interface NavigationProps {
  onOpenTutorial: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenTutorial }) => {
  const tNav = useTranslations('nav');
  const tCommon = useTranslations('common');

  const {
    viewMode,
    setViewMode,
    streak,
    soundEnabled,
    toggleSound,
    activeTableChartTab,
    setActiveTableChartTab,
    setIsCustomDrillModalOpen,
    setIsSettingsModalOpen,
    currentUser,
    setIsChatDrawerOpen,
    setAuthModalOpen,
  } = useQuizStore();

  const [isTableDropdownOpen, setIsTableDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsTableDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const tableSubOptions: { id: TableChartTab; label: string; sub: string }[] = [
    { id: 'mul', label: tNav('mulTable'), sub: '1 to 100 (× 20 multiples)' },
    { id: 'squares', label: tNav('squaresTable'), sub: '1² to 100²' },
    { id: 'cubes', label: tNav('cubesTable'), sub: '1³ to 100³' },
    { id: 'sqrt', label: tNav('sqrtTable'), sub: '√1 to √100' },
    { id: 'cbrt', label: tNav('cbrtTable'), sub: '∛1 to ∛100' },
  ];

  const handleSelectTableTab = (tabId: TableChartTab) => {
    setActiveTableChartTab(tabId);
    setIsTableDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 h-12 sm:h-14 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Logo - Never shrinks, always visible */}
        <button
          onClick={() => {
            setViewMode('dashboard');
          }}
          className="flex items-center gap-2.5 text-left group shrink-0"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1.5px] shadow-md shadow-violet-600/30 group-hover:scale-105 transition-transform flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Brain className="w-4 h-4 text-violet-300" />
            </div>
          </div>
          <span className="font-black text-lg tracking-tight text-white flex items-center">
            menta<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">lab</span>
          </span>
        </button>

        {/* Desktop View Mode Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-medium overflow-x-auto scrollbar-none shrink min-w-0">
          <button
            onClick={() => setViewMode('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'dashboard'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            {tNav('dashboard')}
          </button>

          <button
            onClick={() => setViewMode('bootcamp_11_20')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'bootcamp_11_20'
                ? 'bg-amber-600 text-white shadow-sm font-semibold'
                : 'text-amber-400 hover:text-amber-200 hover:bg-slate-800'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            {tNav('bootcamp')}
          </button>

          <button
            onClick={() => setViewMode('exam_quant')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'exam_quant'
                ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                : 'text-emerald-400 hover:text-emerald-200 hover:bg-slate-800'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            {tNav('examQuant')}
          </button>

          <button
            onClick={() => setViewMode('techniques')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'techniques'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-violet-400 hover:text-violet-200 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {tNav('techniques')}
          </button>

          <button
            onClick={() => setIsCustomDrillModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-violet-300 hover:text-white hover:bg-slate-800 transition-all font-semibold shrink-0 whitespace-nowrap"
          >
            <Sliders className="w-3.5 h-3.5" />
            {tNav('customWorkout')}
          </button>

          <button
            onClick={() => setViewMode('practice')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'practice'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            {tNav('practice')}
          </button>

          <button
            onClick={() => setViewMode('anzan')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'anzan'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            {tNav('anzan')}
          </button>

          {/* Table Chart with Dropdown Menu */}
          <div className="relative shrink-0" ref={dropdownRef}>
            <div className="flex items-center rounded-lg">
              <button
                onClick={() => {
                  setViewMode('table_chart');
                  setIsTableDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-l-lg transition-all whitespace-nowrap ${
                  viewMode === 'table_chart'
                    ? 'bg-violet-600 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>{tNav('tableChart')}</span>
              </button>

              <button
                onClick={() => setIsTableDropdownOpen((prev) => !prev)}
                className={`px-1.5 py-1.5 rounded-r-lg transition-all border-l ${
                  viewMode === 'table_chart'
                    ? 'bg-violet-600 text-white border-violet-500/50'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800 border-slate-800/80'
                }`}
                title="Open Table Selection Menu"
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isTableDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>

            {/* Dropdown Flyout */}
            {isTableDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 backdrop-blur-xl">
                <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800/80 mb-1">
                  {tNav('tableChart')}
                </div>
                <div className="space-y-0.5">
                  {tableSubOptions.map((opt) => {
                    const isSubActive =
                      viewMode === 'table_chart' && activeTableChartTab === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectTableTab(opt.id)}
                        className={`w-full flex flex-col text-left px-3 py-2 rounded-xl transition-all ${
                          isSubActive
                            ? 'bg-violet-600 text-white font-semibold shadow-sm'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span className="text-xs font-semibold">{opt.label}</span>
                        <span
                          className={`text-[10px] ${
                            isSubActive ? 'text-violet-200' : 'text-slate-400'
                          }`}
                        >
                          {opt.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => setViewMode('heatmap')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'heatmap'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            {tNav('tables')}
          </button>

          <button
            onClick={() => setViewMode('memory_map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'memory_map'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Brain className="w-3.5 h-3.5" />
            {tNav('memoryMap')}
          </button>

          <button
            onClick={() => setViewMode('profile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all shrink-0 whitespace-nowrap ${
              viewMode === 'profile'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {tNav('skillProfile')}
          </button>
        </nav>

        {/* Right HUD Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Polished Language Selector (Desktop only) */}
          <div className="hidden sm:block">
            <LanguageSelector variant="dropdown" />
          </div>

          {/* Theory / Tutorial Pill (Desktop only) */}
          <button
            onClick={onOpenTutorial}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title={tNav('theory')}
          >
            <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden lg:inline">{tNav('theory')}</span>
          </button>

          {/* Active Streak — visible on all sizes */}
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              streak > 0
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-slate-900 text-slate-500 border border-slate-800'
            }`}
            title={`${tCommon('streak')}: ${streak}`}
          >
            <Flame className={`w-3.5 h-3.5 ${streak > 0 ? 'text-amber-400' : 'text-slate-600'}`} />
            <span className="text-[11px]">{streak}</span>
          </div>

          {/* Audio Toggle (Desktop only) */}
          <button
            onClick={toggleSound}
            className="hidden sm:flex p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Realtime Friends & 1v1 Math Chat Button */}
          <button
            onClick={() => {
              if (!currentUser) {
                setAuthModalOpen(true);
              } else {
                setIsChatDrawerOpen(true);
              }
            }}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors flex items-center justify-center relative min-h-[36px] min-w-[36px]"
            title="Friends & 1v1 Math Chat"
            aria-label="Friends & 1v1 Math Chat"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            {currentUser && (
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-950 animate-pulse" />
            )}
          </button>

          {/* In-Web Notifications Bell */}
          <NotificationBell />

          {/* User Cloud Profile & Sync Menu */}
          <UserProfileMenu />

          {/* Settings Modal Button (Desktop only) */}
          <button
            onClick={() => setIsSettingsModalOpen(true)}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors hidden sm:flex items-center justify-center"
            title={tCommon('settings')}
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

    </header>
  );
};
