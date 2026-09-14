'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Trophy, Shield, ArrowRight, X } from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { BadgeEmblem } from './BadgeEmblem';
import { getBadgeForLevel } from '../../core/levelEngine';

export const LevelUpModal: React.FC = () => {
  const {
    newLevelUnlocked,
    dismissLevelUpCelebration,
    setAvatarPreference,
    setIsBadgePickerOpen,
    avatarType,
    selectedBadgeLevel,
  } = useQuizStore();

  if (!newLevelUnlocked) return null;

  const badge = getBadgeForLevel(newLevelUnlocked);

  const handleEquipAndClose = () => {
    setAvatarPreference('badge', newLevelUnlocked);
    dismissLevelUpCelebration();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="relative w-full max-w-md rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-amber-500/40 shadow-2xl p-6 text-center overflow-hidden"
          style={{
            boxShadow: `0 0 50px -10px ${badge.tier.glowColor}`,
          }}
        >
          {/* Close button */}
          <button
            onClick={dismissLevelUpCelebration}
            className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/60 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Celebratory Icon & Header */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-4 animate-bounce">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Rank Level Up!</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
            Level {newLevelUnlocked} Reached!
          </h2>

          <p className="text-xs font-semibold text-amber-400 mb-6 font-mono">
            {badge.title}
          </p>

          {/* Hero Emblem Presentation */}
          <div className="py-2 flex justify-center mb-6 relative">
            <div
              className="absolute inset-0 rounded-full filter blur-2xl opacity-40 -z-10"
              style={{ backgroundColor: badge.tier.primaryColor }}
            />
            <BadgeEmblem level={newLevelUnlocked} size="hero" showLevel={true} showStars={true} />
          </div>

          {/* Tier Description */}
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6 text-xs text-slate-300">
            <p className="font-bold text-white mb-0.5">{badge.tier.name} Tier</p>
            <p className="text-[11px] text-slate-400">{badge.tier.descriptor}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              type="button"
              onClick={handleEquipAndClose}
              className="w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2"
            >
              <Shield className="w-4 h-4" />
              <span>Equip as Avatar (DP)</span>
            </button>

            <button
              type="button"
              onClick={dismissLevelUpCelebration}
              className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-400 hover:text-white hover:bg-slate-900/60 transition-colors"
            >
              Continue Training
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
