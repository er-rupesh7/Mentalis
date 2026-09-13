'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Globe, Check, Search, ChevronDown } from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import {
  SupportedLocale,
  SUPPORTED_LANGUAGES,
  getLanguageMeta,
} from '../i18n/config';

interface LanguageSelectorProps {
  variant?: 'dropdown' | 'inline' | 'compact';
  className?: string;
  onLanguageSelected?: () => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'dropdown',
  className = '',
  onLanguageSelected,
}) => {
  const { locale, setLocale } = useQuizStore();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const currentMeta = useMemo(() => getLanguageMeta(locale), [locale]);

  // Close dropdown on click outside
  useEffect(() => {
    if (variant === 'inline') return;

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
  }, [variant]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  const filteredLanguages = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return SUPPORTED_LANGUAGES;
    return SUPPORTED_LANGUAGES.filter(
      (lang) =>
        lang.nativeName.toLowerCase().includes(q) ||
        lang.englishName.toLowerCase().includes(q) ||
        lang.code.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSelectLanguage = (code: SupportedLocale) => {
    setLocale(code);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = code;
      document.documentElement.dir = code === 'ur' ? 'rtl' : 'ltr';
    }
    setIsOpen(false);
    onLanguageSelected?.();
  };

  if (variant === 'inline') {
    return (
      <div className={`w-full space-y-3 ${className}`}>
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            ref={searchInputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search language / भाषा खोजें..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors font-sans"
          />
        </div>

        {/* Language Grid / List */}
        <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1 scrollbar-thin">
          {filteredLanguages.map((lang) => {
            const isSelected = lang.code === locale;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => handleSelectLanguage(lang.code)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? 'bg-violet-600/20 border-violet-500/60 text-white shadow-sm'
                    : 'bg-slate-900/60 border-slate-800/80 text-slate-300 hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-bold font-sans">
                    {lang.nativeName}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {lang.englishName}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {lang.dir === 'rtl' && (
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      RTL
                    </span>
                  )}
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div ref={dropdownRef} className={`relative inline-block ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
          isOpen
            ? 'bg-violet-600 text-white border-violet-500 shadow-md shadow-violet-600/30'
            : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-800 hover:border-slate-700'
        }`}
        title="Change language / भाषा बदलें"
        aria-expanded={isOpen}
      >
        <Globe className="w-3.5 h-3.5 text-violet-400 shrink-0" />
        <span className="font-bold">{currentMeta.nativeName}</span>
        {variant !== 'compact' && (
          <span className="text-[10px] text-slate-400 hidden lg:inline font-mono">
            ({currentMeta.englishName})
          </span>
        )}
        <ChevronDown
          className={`w-3 h-3 transition-transform ${
            isOpen ? 'rotate-180 text-white' : 'text-slate-400'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 sm:w-72 rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl p-2.5 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Search Input */}
          <div className="relative mb-2">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search language / भाषा खोजें..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 transition-colors font-sans"
            />
          </div>

          {/* Languages List */}
          <div className="max-h-64 overflow-y-auto space-y-1 pr-1 scrollbar-thin">
            {filteredLanguages.length === 0 ? (
              <div className="p-3 text-center text-xs text-slate-500">
                No language found
              </div>
            ) : (
              filteredLanguages.map((lang) => {
                const isSelected = lang.code === locale;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-left transition-all ${
                      isSelected
                        ? 'bg-violet-600 text-white font-bold'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-semibold">
                        {lang.nativeName}
                      </span>
                      <span
                        className={`text-[11px] font-mono ${
                          isSelected ? 'text-violet-200' : 'text-slate-500'
                        }`}
                      >
                        {lang.englishName}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {lang.dir === 'rtl' && (
                        <span className="text-[9px] font-mono font-bold px-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                          RTL
                        </span>
                      )}
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};
