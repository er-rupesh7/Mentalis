'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Globe } from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { LanguageSelector } from './LanguageSelector';
import { getLanguageMeta } from '../i18n/config';

export const LanguageOnboardingModal: React.FC = () => {
  const {
    locale,
    hasCompletedLanguageOnboarding,
    setHasCompletedLanguageOnboarding,
  } = useQuizStore();

  if (hasCompletedLanguageOnboarding) return null;

  const currentMeta = getLanguageMeta(locale);

  const handleConfirm = () => {
    setHasCompletedLanguageOnboarding(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-lg rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-8 flex flex-col space-y-6 relative overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-violet-600/15 via-transparent to-transparent pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-2 relative">
            <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30 mb-1">
              <Globe className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-sans">
              Mentalis में आपका स्वागत है
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
              Choose your preferred language for learning mental math.
              Default is set to <strong className="text-violet-300">हिन्दी (Hindi)</strong>.
            </p>
          </div>

          {/* Inline Language Selector with Search */}
          <div className="bg-slate-900/50 p-3 rounded-2xl border border-slate-800/80">
            <LanguageSelector variant="inline" />
          </div>

          {/* Action Footer */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-violet-600/30 transition-all flex items-center justify-center gap-2 active:scale-98"
            >
              <span>{currentMeta.nativeName} में जारी रखें / Continue in {currentMeta.englishName}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-center text-slate-500 font-sans">
              You can change your language anytime from the top navigation or settings.
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
