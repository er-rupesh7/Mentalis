'use client';

import React, { useState, useMemo } from 'react';
import { X, Check, Lock, Sparkles, Shield, User, Award, Flame, Zap } from 'lucide-react';
import { BadgeEmblem } from './BadgeEmblem';
import { MasteryBadgeEmblem } from './MasteryBadgeEmblem';
import { TIERS, getBadgeForLevel } from '../../core/levelEngine';
import { MASTERY_BADGES, getEvaluatedMasteryBadges, getMasteryBadgeById, MasteryBadge } from '../../core/badges/masteryBadges';
import { useQuizStore } from '../../core/store/useQuizStore';

interface BadgePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: number;
  currentXP: number;
  selectedBadgeLevel: number;
  selectedMasteryBadgeId?: string | null;
  avatarType: 'google' | 'badge' | 'mastery';
  onSelectBadge: (badgeLevel: number) => void;
  onSelectMasteryBadge: (badgeId: string) => void;
  onSelectAvatarType: (type: 'google' | 'badge' | 'mastery') => void;
}

export const BadgePickerModal: React.FC<BadgePickerModalProps> = ({
  isOpen,
  onClose,
  currentLevel,
  currentXP,
  selectedBadgeLevel,
  selectedMasteryBadgeId,
  avatarType,
  onSelectBadge,
  onSelectMasteryBadge,
  onSelectAvatarType,
}) => {
  // Store context for evaluating mastery unlocks
  const overallStats = useQuizStore((s) => s.overallStats);
  const progressMap = useQuizStore((s) => s.progressMap);
  const factMemoryMap = useQuizStore((s) => s.factMemoryMap);

  // Tab: 'level' (1000 level badges) vs 'mastery' (Mastery & Feats)
  const [activeCatalogTab, setActiveCatalogTab] = useState<'level' | 'mastery'>(
    avatarType === 'mastery' ? 'mastery' : 'level'
  );

  // 1000-Level state
  const [activeTierId, setActiveTierId] = useState<string>('bronze');
  const [previewLevel, setPreviewLevel] = useState<number>(selectedBadgeLevel || currentLevel || 1);

  // Mastery state
  const [masteryFilter, setMasteryFilter] = useState<'all' | 'squares' | 'cubes' | 'roots' | 'tables' | 'combined'>('all');
  const [previewMasteryId, setPreviewMasteryId] = useState<string>(selectedMasteryBadgeId || 'sq_20');

  // Evaluate dynamic mastery unlocks
  const evaluatedBadges = useMemo(() => {
    return getEvaluatedMasteryBadges({
      overallStats,
      progressMap,
      factMemoryMap: factMemoryMap || {},
    });
  }, [overallStats, progressMap, factMemoryMap]);

  if (!isOpen) return null;

  const currentTier = TIERS.find((t) => t.id === activeTierId) || TIERS[0];
  const previewBadge = getBadgeForLevel(previewLevel);
  const isPreviewLevelUnlocked = previewLevel <= currentLevel;
  const isLevelSelected = avatarType === 'badge' && selectedBadgeLevel === previewLevel;

  const previewMasteryBadge = evaluatedBadges.find((b) => b.id === previewMasteryId) || evaluatedBadges[0];
  const isMasterySelected = avatarType === 'mastery' && selectedMasteryBadgeId === previewMasteryId;

  const filteredMasteryBadges = evaluatedBadges.filter((b) => {
    if (masteryFilter === 'all') return true;
    return b.category === masteryFilter;
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full h-[100dvh] sm:h-auto sm:max-h-[92vh] sm:max-w-4xl rounded-none sm:rounded-2xl bg-slate-900 border-0 sm:border sm:border-slate-700/80 shadow-2xl p-3 sm:p-6 overflow-hidden text-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 sm:pb-4 shrink-0">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="p-1.5 sm:p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-lg font-bold text-white flex items-center gap-1.5 sm:gap-2">
                Badges & Avatar Equipment
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-400 hidden sm:block">
                Equip unlocked 1000-level badges or calculation mastery feats as your public profile DP!
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            title="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current Equipped Status & Revert to Google DP Bar */}
        <div className="flex items-center justify-between gap-2 mt-2 sm:mt-3 p-2 px-2.5 sm:px-3 rounded-xl bg-slate-950 border border-slate-800/80 shrink-0 text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="text-slate-400 shrink-0 text-[11px] sm:text-xs">Equipped DP:</span>
            <span className="font-bold text-violet-300 truncate text-[11px] sm:text-xs">
              {avatarType === 'mastery' && selectedMasteryBadgeId
                ? `${previewMasteryBadge?.title || 'Mastery Feat'}`
                : avatarType === 'badge'
                ? `Level ${selectedBadgeLevel} Rank Badge`
                : 'Default Google Avatar Photo'}
            </span>
          </div>
          {avatarType !== 'google' && (
            <button
              onClick={() => onSelectAvatarType('google')}
              className="shrink-0 flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[10px] sm:text-[11px] font-semibold transition-all"
              title="Revert to Google profile photo"
            >
              <User className="w-3 h-3 text-violet-400" />
              <span>Use Google DP</span>
            </button>
          )}
        </div>

        {/* Catalog Navigation Tabs */}
        <div className="flex items-center gap-2 mt-2.5 sm:mt-3 border-b border-slate-800 pb-2 shrink-0">
          <button
            onClick={() => setActiveCatalogTab('level')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeCatalogTab === 'level'
                ? 'bg-violet-600/20 text-violet-300 border border-violet-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>1000 Level Badges</span>
          </button>
          <button
            onClick={() => setActiveCatalogTab('mastery')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeCatalogTab === 'mastery'
                ? 'bg-violet-600/20 text-violet-300 border border-violet-500/40 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Mastery & Feats Badges</span>
            <span className="px-1.5 py-0.2 bg-violet-600 text-white text-[10px] rounded-full font-mono">
              16
            </span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* Tab 1: 1000 Level Badges Content */}
        {/* ========================================================================= */}
        {activeCatalogTab === 'level' && (
          <div className="flex-1 flex flex-col md:grid md:grid-cols-3 gap-3 sm:gap-4 mt-2.5 sm:mt-3 overflow-hidden min-h-0">
            {/* MOBILE ONLY: Prominent Preview & Equip Card at TOP so user NEVER has to scroll down */}
            <div className="block md:hidden shrink-0 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="shrink-0">
                    <BadgeEmblem level={previewLevel} size="md" showTitle={false} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="text-xs font-bold text-white truncate">{previewBadge.title}</h4>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-violet-950/60 border border-violet-500/30 text-violet-300">
                        Lv.{previewLevel}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">
                      {previewBadge.tier.name} Tier • {previewBadge.unlockedAtXP.toLocaleString()} XP
                    </p>
                  </div>
                </div>

                {/* Mobile Equip Action */}
                <div className="shrink-0">
                  {isPreviewLevelUnlocked ? (
                    isLevelSelected ? (
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-[11px]">
                          <Check className="w-3.5 h-3.5" />
                          <span>Equipped</span>
                        </span>
                        <button
                          onClick={() => onSelectAvatarType('google')}
                          className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30"
                          title="Unequip Avatar"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          if (!isPreviewLevelUnlocked) return;
                          onSelectBadge(previewLevel);
                          onSelectAvatarType('badge');
                        }}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-[11px] bg-violet-600 hover:bg-violet-500 text-white shadow-md active:scale-95 transition-all"
                      >
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Equip DP</span>
                      </button>
                    )
                  ) : (
                    <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold select-none cursor-not-allowed">
                      <Lock className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Locked (Lv.{previewLevel})</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Left Column: Tier Tabs (Horizontal scroll on mobile, vertical on desktop) */}
            <div className="flex md:flex-col gap-1.5 overflow-x-auto md:overflow-y-auto pb-1.5 md:pb-0 md:pr-1 shrink-0 custom-scrollbar">
              <p className="hidden md:block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                Rank Tiers (1 - 1000)
              </p>
              {TIERS.map((tier) => {
                const isTierUnlocked = currentLevel >= tier.minLevel;
                const isCurrentTier = activeTierId === tier.id;
                return (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setActiveTierId(tier.id);
                      const target = Math.min(Math.max(tier.minLevel, currentLevel), tier.maxLevel);
                      setPreviewLevel(target);
                    }}
                    className={`shrink-0 md:shrink md:w-full flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border text-left transition-all ${
                      isCurrentTier
                        ? 'bg-slate-800 border-violet-500/60 shadow-sm text-white'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: tier.primaryColor }}
                      />
                      <div className="truncate">
                        <p className="text-xs font-bold truncate">{tier.name}</p>
                        <p className="text-[10px] text-slate-500">
                          Lvl {tier.minLevel} - {tier.maxLevel}
                        </p>
                      </div>
                    </div>
                    {!isTierUnlocked && <Lock className="w-3.5 h-3.5 text-slate-600 shrink-0 ml-1.5" />}
                  </button>
                );
              })}
            </div>

            {/* Center Column: Badges Grid for Active Tier */}
            <div className="flex-1 overflow-y-auto pr-1 pb-6 md:pb-1 custom-scrollbar min-h-0">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                {currentTier.name} Milestones
              </p>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
                {Array.from({ length: currentTier.maxLevel - currentTier.minLevel + 1 }).map((_, idx) => {
                  const lvl = currentTier.minLevel + idx;
                  const isUnlocked = lvl <= currentLevel;
                  const isItemPreview = lvl === previewLevel;
                  return (
                    <button
                      key={lvl}
                      onClick={() => setPreviewLevel(lvl)}
                      className={`flex flex-col items-center p-2 rounded-xl border transition-all relative ${
                        isItemPreview
                          ? 'bg-violet-600/25 border-violet-500 shadow-md scale-105 ring-1 ring-violet-400'
                          : isUnlocked
                          ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                          : 'bg-slate-950/30 border-slate-800/40 opacity-40 hover:opacity-75'
                      }`}
                    >
                      <BadgeEmblem level={lvl} size="sm" showLevel={false} showStars={false} />
                      <span className="text-[9px] font-mono font-bold mt-1 text-slate-300">
                        Lv.{lvl}
                      </span>
                      {!isUnlocked && (
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/60 rounded-xl">
                          <Lock className="w-3 h-3 text-slate-400" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Desktop Large Preview & Equip Action (Hidden on mobile) */}
            <div className="hidden md:flex flex-col items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center shrink-0 md:shrink overflow-y-auto custom-scrollbar">
              <div className="flex flex-col items-center">
                <div className="p-4">
                  <BadgeEmblem level={previewLevel} size="hero" showTitle={false} animateGlow />
                </div>
                <h3 className="text-base font-extrabold text-white mt-1">{previewBadge.title}</h3>
                <p className="text-xs text-violet-400 font-mono font-semibold">
                  Level {previewLevel} • Tier {previewBadge.tier.name}
                </p>
                <p className="text-[11px] text-slate-400 mt-1 max-w-xs leading-relaxed">
                  {previewBadge.tier.descriptor}
                </p>
                <p className="text-[10px] text-slate-500 font-mono mt-2">
                  Unlocked at {previewBadge.unlockedAtXP.toLocaleString()} XP
                </p>
              </div>

              {/* Equip Button with Strict Lock Enforcement */}
              <div className="w-full pt-4 border-t border-slate-800/80 mt-2">
                {isPreviewLevelUnlocked ? (
                  isLevelSelected ? (
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs">
                        <Check className="w-4 h-4" />
                        <span>Currently Equipped as Avatar</span>
                      </div>
                      <button
                        onClick={() => onSelectAvatarType('google')}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs transition-all shadow-md bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 active:scale-95"
                        title="Unequip badge and revert to Google/Default profile avatar"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Unequip Avatar</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        if (!isPreviewLevelUnlocked) return;
                        onSelectBadge(previewLevel);
                        onSelectAvatarType('badge');
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs transition-all shadow-md bg-violet-600 hover:bg-violet-500 active:scale-95 text-white cursor-pointer"
                    >
                      <span>Equip as Profile Badge DP</span>
                    </button>
                  )
                ) : (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-amber-400 font-semibold p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 select-none cursor-not-allowed">
                    <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Locked — Reach Level {previewLevel} to Equip</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* Tab 2: Mastery & Combined Feats Content */}
        {/* ========================================================================= */}
        {activeCatalogTab === 'mastery' && (
          <div className="flex-1 flex flex-col md:grid md:grid-cols-3 gap-3 sm:gap-4 mt-2.5 sm:mt-3 overflow-hidden min-h-0">
            {/* MOBILE ONLY: Prominent Preview & Equip Card at TOP */}
            <div className="block md:hidden shrink-0 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="shrink-0">
                    <MasteryBadgeEmblem badgeId={previewMasteryBadge.id} size="md" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="text-xs font-bold text-white truncate">{previewMasteryBadge.title}</h4>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-violet-950/60 border border-violet-500/30 text-violet-300 uppercase">
                        {previewMasteryBadge.tier}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">
                      {previewMasteryBadge.criterionText}
                    </p>
                  </div>
                </div>

                {/* Mobile Mastery Equip Action */}
                <div className="shrink-0">
                  {previewMasteryBadge.isUnlocked ? (
                    isMasterySelected ? (
                      <div className="flex items-center gap-1.5">
                        <span className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-[11px]">
                          <Check className="w-3.5 h-3.5" />
                          <span>Equipped</span>
                        </span>
                        <button
                          onClick={() => onSelectAvatarType('google')}
                          className="p-1.5 rounded-lg bg-rose-500/20 text-rose-300 border border-rose-500/30"
                          title="Unequip Avatar"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          if (!previewMasteryBadge.isUnlocked) return;
                          onSelectMasteryBadge(previewMasteryBadge.id);
                          onSelectAvatarType('mastery');
                        }}
                        className="flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-[11px] bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md active:scale-95 transition-all"
                      >
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Equip DP</span>
                      </button>
                    )
                  ) : (
                    <div className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] font-semibold select-none cursor-not-allowed">
                      <Lock className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Locked</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Left Column: Category Filter Chips (Horizontal on mobile, vertical on desktop) */}
            <div className="flex md:flex-col gap-1.5 overflow-x-auto md:overflow-y-auto pb-1.5 md:pb-0 md:pr-1 shrink-0 custom-scrollbar">
              <p className="hidden md:block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
                Feat Categories
              </p>
              {[
                { id: 'all', label: 'All Mastery Badges', count: 16 },
                { id: 'squares', label: 'Squares Mastery', count: 4 },
                { id: 'cubes', label: 'Cubes Mastery', count: 3 },
                { id: 'roots', label: 'Square & Cube Roots', count: 4 },
                { id: 'tables', label: 'Multiplication Tables', count: 2 },
                { id: 'combined', label: 'Grandmaster Titans', count: 3 },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setMasteryFilter(cat.id as any)}
                  className={`shrink-0 md:shrink md:w-full flex items-center justify-between px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl border text-left transition-all ${
                    masteryFilter === cat.id
                      ? 'bg-slate-800 border-violet-500/60 text-white font-bold'
                      : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs truncate">{cat.label}</span>
                  <span className="text-[10px] font-mono text-slate-500 px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800 ml-1.5">
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Center Column: Mastery Badges Grid */}
            <div className="flex-1 overflow-y-auto pr-1 pb-6 md:pb-1 custom-scrollbar min-h-0">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 px-1">
                Unlocked Feats & Badges
              </p>
              <div className="grid grid-cols-2 gap-2">
                {filteredMasteryBadges.map((badge) => {
                  const isItemPreview = badge.id === previewMasteryId;
                  const isEquipped = avatarType === 'mastery' && selectedMasteryBadgeId === badge.id;

                  return (
                    <button
                      key={badge.id}
                      onClick={() => setPreviewMasteryId(badge.id)}
                      className={`flex flex-col items-center p-2.5 rounded-xl border text-center transition-all relative ${
                        isItemPreview
                          ? 'bg-violet-600/25 border-violet-500 shadow-md scale-102 ring-1 ring-violet-400'
                          : badge.isUnlocked
                          ? 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50'
                          : 'bg-slate-950/30 border-slate-800/40 opacity-50 hover:opacity-80'
                      }`}
                    >
                      <MasteryBadgeEmblem badgeId={badge.id} size="md" />
                      <span className="text-[11px] font-bold mt-2 text-white truncate max-w-full">
                        {badge.title}
                      </span>
                      <span className="text-[9px] font-mono uppercase text-violet-400 mt-0.5">
                        {badge.tier}
                      </span>

                      {/* Locked Overlay */}
                      {!badge.isUnlocked && (
                        <div className="absolute top-2 right-2 p-1 bg-slate-950/80 rounded-md border border-slate-700">
                          <Lock className="w-2.5 h-2.5 text-slate-400" />
                        </div>
                      )}

                      {/* Equipped Pill */}
                      {isEquipped && (
                        <span className="mt-1 px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-bold border border-emerald-500/40">
                          Equipped
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Desktop Large Preview & Equip Action (Hidden on mobile) */}
            <div className="hidden md:flex flex-col items-center justify-between p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-center shrink-0 md:shrink overflow-y-auto custom-scrollbar">
              <div className="flex flex-col items-center">
                <div className="p-4">
                  <MasteryBadgeEmblem badgeId={previewMasteryBadge.id} size="xl" />
                </div>
                <h3 className="text-base font-extrabold text-white mt-1">
                  {previewMasteryBadge.title}
                </h3>
                <p className="text-xs text-violet-400 font-mono font-semibold uppercase">
                  {previewMasteryBadge.tier} Tier • {previewMasteryBadge.category}
                </p>
                <p className="text-[11px] text-slate-300 mt-2 max-w-xs leading-relaxed">
                  {previewMasteryBadge.description}
                </p>
                <div className="mt-3 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] text-slate-400 max-w-xs">
                  <span className="font-bold text-slate-300 block mb-0.5">Unlock Criterion:</span>
                  {previewMasteryBadge.criterionText}
                </div>
              </div>

              {/* Equip Button with Strict Lock Enforcement */}
              <div className="w-full pt-4 border-t border-slate-800/80 mt-2">
                {previewMasteryBadge.isUnlocked ? (
                  isMasterySelected ? (
                    <div className="flex flex-col gap-2 w-full">
                      <div className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-bold text-xs">
                        <Check className="w-4 h-4" />
                        <span>Currently Equipped as Avatar</span>
                      </div>
                      <button
                        onClick={() => onSelectAvatarType('google')}
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-bold text-xs transition-all shadow-md bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 active:scale-95"
                        title="Unequip badge and revert to Google/Default profile avatar"
                      >
                        <X className="w-3.5 h-3.5" />
                        <span>Unequip Avatar</span>
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        if (!previewMasteryBadge.isUnlocked) return;
                        onSelectMasteryBadge(previewMasteryBadge.id);
                        onSelectAvatarType('mastery');
                      }}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs transition-all shadow-md bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-95 text-white cursor-pointer"
                    >
                      <span>Equip as Profile Mastery DP</span>
                    </button>
                  )
                ) : (
                  <div className="flex items-center justify-center gap-1.5 text-xs text-amber-400 font-semibold p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 select-none cursor-not-allowed">
                    <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Locked — Complete Milestone to Equip</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
