'use client';

import React, { useState, useRef, useEffect } from 'react';
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
  Menu,
  X,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { TableChartTab } from '../core/types';

interface NavigationProps {
  onOpenTutorial: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenTutorial }) => {
  const {
    viewMode,
    setViewMode,
    streak,
    soundEnabled,
    toggleSound,
    activeTableChartTab,
    setActiveTableChartTab,
  } = useQuizStore();

  const [isTableDropdownOpen, setIsTableDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { id: 'mul', label: '1. Mul Table', sub: '1 to 100 (× 20 multiples)' },
    { id: 'squares', label: '2. Squares Table', sub: '1² to 100²' },
    { id: 'cubes', label: '3. Cube Table', sub: '1³ to 100³' },
    { id: 'sqrt', label: '4. Square Root Table', sub: '√1 to √100' },
    { id: 'cbrt', label: '5. Cuberoot Table', sub: '∛1 to ∛100' },
  ];

  const handleSelectTableTab = (tabId: TableChartTab) => {
    setActiveTableChartTab(tabId);
    setIsTableDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => {
            setViewMode('dashboard');
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="p-1.5 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-md shadow-violet-600/30 group-hover:scale-105 transition-transform">
            <Brain className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-base tracking-tight text-white">
            Mentalis
          </span>
        </button>

        {/* Desktop View Mode Nav Pills */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-medium">
          <button
            onClick={() => setViewMode('dashboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'dashboard'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            Dashboard
          </button>

          <button
            onClick={() => setViewMode('practice')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'practice'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            Zen Drill
          </button>

          <button
            onClick={() => setViewMode('anzan')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'anzan'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Anzan Flash
          </button>

          {/* Table Chart with Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <div className="flex items-center rounded-lg">
              <button
                onClick={() => {
                  setViewMode('table_chart');
                  setIsTableDropdownOpen(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-l-lg transition-all ${
                  viewMode === 'table_chart'
                    ? 'bg-violet-600 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Table className="w-3.5 h-3.5" />
                <span>Table Chart</span>
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
                  Table Chart Navigation
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
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'heatmap'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            100 Tables
          </button>

          <button
            onClick={() => setViewMode('profile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              viewMode === 'profile'
                ? 'bg-violet-600 text-white shadow-sm font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Skill Profile
          </button>
        </nav>

        {/* Right HUD Controls */}
        <div className="flex items-center gap-2">
          {/* Tutorial Pill */}
          <button
            onClick={onOpenTutorial}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors"
            title="Open Tutorial"
          >
            <BookOpen className="w-3.5 h-3.5 text-violet-400" />
            <span className="hidden sm:inline">Theory</span>
          </button>

          {/* Active Streak */}
          <div
            className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              streak > 0
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'bg-slate-900 text-slate-500 border border-slate-800'
            }`}
          >
            <Flame className={`w-3.5 h-3.5 ${streak > 0 ? 'text-amber-400' : 'text-slate-600'}`} />
            <span>{streak}</span>
          </div>

          {/* Audio Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title={soundEnabled ? 'Mute' : 'Unmute'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
            title="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800/90 bg-slate-950/95 backdrop-blur-xl px-4 py-3 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-xs font-medium">
            <button
              onClick={() => {
                setViewMode('dashboard');
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 p-2.5 rounded-xl border ${
                viewMode === 'dashboard'
                  ? 'bg-violet-600 text-white border-violet-500'
                  : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => {
                setViewMode('practice');
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 p-2.5 rounded-xl border ${
                viewMode === 'practice'
                  ? 'bg-violet-600 text-white border-violet-500'
                  : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}
            >
              <Calculator className="w-4 h-4" />
              <span>Zen Drill</span>
            </button>

            <button
              onClick={() => {
                setViewMode('anzan');
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 p-2.5 rounded-xl border ${
                viewMode === 'anzan'
                  ? 'bg-violet-600 text-white border-violet-500'
                  : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>Anzan Flash</span>
            </button>

            <button
              onClick={() => {
                setViewMode('heatmap');
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-2 p-2.5 rounded-xl border ${
                viewMode === 'heatmap'
                  ? 'bg-violet-600 text-white border-violet-500'
                  : 'bg-slate-900 text-slate-300 border-slate-800'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>100 Tables</span>
            </button>
          </div>

          {/* Table Chart Mobile Sub-menu */}
          <div className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold text-white px-1">
              <span className="flex items-center gap-1.5">
                <Table className="w-4 h-4 text-violet-400" />
                Table Chart
              </span>
              <span className="text-[10px] text-violet-400 uppercase font-mono">5 Tables</span>
            </div>

            <div className="grid grid-cols-1 gap-1 pt-1">
              {tableSubOptions.map((opt) => {
                const isSubActive =
                  viewMode === 'table_chart' && activeTableChartTab === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectTableTab(opt.id)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                      isSubActive
                        ? 'bg-violet-600 text-white font-semibold'
                        : 'bg-slate-950/60 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <span>{opt.label}</span>
                    <span className="text-[10px] text-slate-400">{opt.sub}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

