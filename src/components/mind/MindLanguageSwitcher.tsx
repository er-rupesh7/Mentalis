'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Globe2,
  Check,
  Search,
  ChevronDown,
  Sparkles,
  BookOpen,
  X,
  Languages,
} from 'lucide-react';
import { MindLanguageCode, MindLanguageMeta } from '../../core/mind/types';
import {
  getMindSupportedLanguages,
  getMindLanguageMeta,
} from '../../core/mind/mindLanguages';
import { getAvailableLanguagesForTopic } from '../../core/mind/translationLoader';

interface MindLanguageSwitcherProps {
  currentLanguage: MindLanguageCode;
  onLanguageChange: (lang: MindLanguageCode) => void;
  activeTopicId?: string;
  className?: string;
  variant?: 'button' | 'compact' | 'pill';
}

export const MindLanguageSwitcher: React.FC<MindLanguageSwitcherProps> = ({
  currentLanguage,
  onLanguageChange,
  activeTopicId = 'confirmation_bias',
  className = '',
  variant = 'button',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const allLanguages = useMemo(() => getMindSupportedLanguages(), []);
  const currentMeta = useMemo(
    () => getMindLanguageMeta(currentLanguage),
    [currentLanguage]
  );
  const availableLanguages = useMemo(
    () => getAvailableLanguagesForTopic(activeTopicId),
    [activeTopicId]
  );

  // Close dropdown on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Focus search input on open & handle Escape key
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  // Filter languages based on user query
  const filteredLanguages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return allLanguages;
    return allLanguages.filter(
      (lang) =>
        lang.nativeName.toLowerCase().includes(q) ||
        lang.englishName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q)
    );
  }, [allLanguages, searchQuery]);

  const handleSelectLanguage = (code: MindLanguageCode) => {
    onLanguageChange(code);
    setIsOpen(false);
  };

  return (
    <div className={`relative inline-block ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`Select psychology language. Currently reading in ${currentMeta.englishName}`}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all text-xs font-medium focus:outline-none focus:ring-2 focus:ring-violet-500 ${
          currentLanguage === 'hinglish'
            ? 'bg-violet-950/60 border-violet-500/40 text-violet-200 hover:bg-violet-900/60 shadow-sm shadow-violet-950/50'
            : 'bg-slate-900/80 border-slate-800 text-slate-200 hover:bg-slate-800 hover:border-slate-700'
        }`}
      >
        <Globe2
          className={`w-3.5 h-3.5 ${
            currentLanguage === 'hinglish' ? 'text-violet-400' : 'text-slate-400'
          }`}
        />
        <span className="font-sans font-semibold tracking-wide">
          {currentMeta.nativeName}
        </span>

        {currentLanguage === 'hinglish' && (
          <span className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.2 rounded-full bg-violet-500/20 text-[10px] text-violet-300 font-mono">
            <Sparkles className="w-2.5 h-2.5" />
            Mode
          </span>
        )}

        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Modal / Popover */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Language selection modal"
          className="fixed inset-x-4 top-20 sm:absolute sm:inset-auto sm:right-0 sm:top-full sm:mt-2 w-auto sm:w-96 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl z-50 overflow-hidden backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150"
        >
          {/* Header */}
          <div className="p-3.5 border-b border-slate-800/80 bg-slate-900/60 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-semibold text-slate-200">
                Choose Psychology Language
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-1 focus:ring-violet-500"
              aria-label="Close language selector"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="p-3 border-b border-slate-800/60 bg-slate-950">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Indian languages / भाषा खोजें..."
                className="w-full pl-8 pr-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 font-sans"
              />
            </div>
          </div>

          {/* Languages List */}
          <div
            role="listbox"
            aria-label="Supported psychology languages"
            className="max-h-80 overflow-y-auto p-2 space-y-1 scrollbar-thin scrollbar-thumb-slate-800"
          >
            {/* Dedicated Reading Mode Highlight: Hinglish */}
            {filteredLanguages.some((l) => l.code === 'hinglish') && (
              <div className="mb-2 p-1">
                <div className="text-[10px] uppercase font-mono tracking-wider text-violet-400 font-semibold px-2 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Dedicated Reading Mode
                </div>
                <button
                  role="option"
                  aria-selected={currentLanguage === 'hinglish'}
                  onClick={() => handleSelectLanguage('hinglish')}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex items-center justify-between ${
                    currentLanguage === 'hinglish'
                      ? 'bg-violet-950/70 border-violet-500/50 text-violet-100 ring-1 ring-violet-500/30'
                      : 'bg-violet-950/20 border-violet-900/30 hover:bg-violet-900/30 text-slate-200'
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-violet-200">
                        Hinglish
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 font-mono border border-violet-500/30">
                        Roman Hindi
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      Conversational Indian Hindi with standard terms (no jargon)
                    </span>
                  </div>
                  {currentLanguage === 'hinglish' && (
                    <Check className="w-4 h-4 text-violet-400 shrink-0" />
                  )}
                </button>
              </div>
            )}

            {/* Standard Academic Languages */}
            <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500 font-semibold px-2 pt-1 mb-1">
              Supported Indian & International Editions (13 Languages)
            </div>

            {filteredLanguages
              .filter((l) => l.code !== 'hinglish')
              .map((lang: MindLanguageMeta) => {
                const isSelected = lang.code === currentLanguage;
                const isTranslated = availableLanguages.includes(lang.code);

                return (
                  <button
                    key={lang.code}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between text-xs group ${
                      isSelected
                        ? 'bg-violet-600/20 text-white border border-violet-500/40'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-sm text-slate-200 group-hover:text-white">
                          {lang.nativeName}
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {lang.englishName}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isTranslated ? (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                          Full Article
                        </span>
                      ) : (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/50 font-mono">
                          In Review
                        </span>
                      )}

                      {isSelected && (
                        <Check className="w-4 h-4 text-violet-400 shrink-0" />
                      )}
                    </div>
                  </button>
                );
              })}

            {filteredLanguages.length === 0 && (
              <div className="p-6 text-center text-xs text-slate-500">
                No matching languages found for &ldquo;{searchQuery}&rdquo;.
              </div>
            )}
          </div>

          {/* Footer Note */}
          <div className="p-2.5 border-t border-slate-800/60 bg-slate-900/40 text-[11px] text-slate-400 text-center">
            Zero auto-translate nonsense. All editions peer-reviewed by psychologists.
          </div>
        </div>
      )}
    </div>
  );
};
