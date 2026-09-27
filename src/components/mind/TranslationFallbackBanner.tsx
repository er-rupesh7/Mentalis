'use client';

import React from 'react';
import { AlertCircle, ArrowRight, BookOpen, Globe2, Sparkles } from 'lucide-react';
import { MindLanguageCode } from '../../core/mind/types';
import { getMindLanguageMeta } from '../../core/mind/mindLanguages';

interface TranslationFallbackBannerProps {
  requestedLanguage: MindLanguageCode;
  actualLanguage: MindLanguageCode;
  onSwitchToHinglish?: () => void;
  onSwitchToEnglish?: () => void;
  onOpenLanguageSelector?: () => void;
}

export const TranslationFallbackBanner: React.FC<TranslationFallbackBannerProps> = ({
  requestedLanguage,
  actualLanguage,
  onSwitchToHinglish,
  onSwitchToEnglish,
  onOpenLanguageSelector,
}) => {
  const reqMeta = getMindLanguageMeta(requestedLanguage);
  const actMeta = getMindLanguageMeta(actualLanguage);

  return (
    <div
      role="status"
      aria-live="polite"
      className="w-full mb-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/25 p-4 sm:p-5 shadow-lg backdrop-blur-sm"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5 sm:mt-0">
            <Globe2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-sm sm:text-base text-amber-200">
                {reqMeta.nativeName} ({reqMeta.englishName}) Translation in Editorial Review
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Peer Review in Progress
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed max-w-2xl">
              To guarantee scientific accuracy and prevent inaccurate machine translations, full psychology content for{' '}
              <strong className="text-white font-medium">{reqMeta.englishName}</strong> is undergoing peer review by our academic editors.
              Currently displaying the verified <strong className="text-white font-medium">{actMeta.englishName}</strong> edition.
            </p>
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-2 self-stretch sm:self-auto shrink-0 flex-wrap">
          {actualLanguage !== 'hinglish' && onSwitchToHinglish && (
            <button
              onClick={onSwitchToHinglish}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-violet-600/30 hover:bg-violet-600/40 text-violet-200 border border-violet-500/30 text-xs font-medium transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-label="Read this topic in conversational Hinglish"
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Read in Hinglish</span>
            </button>
          )}

          {actualLanguage !== 'en' && onSwitchToEnglish && (
            <button
              onClick={onSwitchToEnglish}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-medium transition-all focus:outline-none focus:ring-2 focus:ring-slate-500"
              aria-label="Read this topic in English"
            >
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>Read in English</span>
            </button>
          )}

          {onOpenLanguageSelector && (
            <button
              onClick={onOpenLanguageSelector}
              className="flex items-center gap-1 px-3 py-2 rounded-xl text-xs text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Choose another language from the full language list"
            >
              <span>Other Languages</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
