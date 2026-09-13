'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Zap,
  Globe,
  Download,
  Upload,
  Copy,
  Check,
  RotateCcw,
  Sliders,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { LanguageSelector } from './LanguageSelector';

export const SettingsModal: React.FC = () => {
  const {
    isSettingsModalOpen,
    setIsSettingsModalOpen,
    soundEnabled,
    toggleSound,
    reducedMotion,
    toggleReducedMotion,
    timerVisible,
    toggleTimerVisibility,
    exportBrainMatrixJSON,
    importBrainMatrixJSON,
    resetProgress,
  } = useQuizStore();

  const [backupFeedback, setBackupFeedback] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  if (!isSettingsModalOpen) return null;

  const handleCopyBackup = () => {
    try {
      const json = exportBrainMatrixJSON();
      navigator.clipboard.writeText(json);
      setBackupFeedback('Copied to clipboard!');
      setTimeout(() => setBackupFeedback(null), 3000);
    } catch {
      setBackupFeedback('Failed to copy');
      setTimeout(() => setBackupFeedback(null), 3000);
    }
  };

  const handleDownloadBackup = () => {
    try {
      const json = exportBrainMatrixJSON();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mentalis_backup_${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
      setBackupFeedback('Backup downloaded!');
      setTimeout(() => setBackupFeedback(null), 3000);
    } catch {
      setBackupFeedback('Export failed');
      setTimeout(() => setBackupFeedback(null), 3000);
    }
  };

  const handleImport = () => {
    if (!importText.trim()) return;
    const res = importBrainMatrixJSON(importText);
    if (res.success) {
      setIsImporting(false);
      setImportText('');
      setImportError(null);
      setBackupFeedback('Data restored successfully!');
      setTimeout(() => setBackupFeedback(null), 3000);
    } else {
      setImportError(res.error || 'Failed to import backup');
    }
  };

  const handleReset = () => {
    resetProgress();
    setShowResetConfirm(false);
    setBackupFeedback('All progress reset to default.');
    setTimeout(() => setBackupFeedback(null), 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="w-full max-w-xl max-h-[90vh] rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-800 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white">
                  Settings & Accessibility
                </h2>
                <p className="text-xs text-slate-400">
                  Manage language, audio, animations, and data
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSettingsModalOpen(false)}
              className="p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-5 overflow-y-auto space-y-6 scrollbar-thin">
            {/* Feedback Alert */}
            {backupFeedback && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs font-semibold text-emerald-300 text-center animate-in fade-in">
                {backupFeedback}
              </div>
            )}

            {/* Language Selection Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-violet-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Language / भाषा
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Choose from 13 supported Indian and international languages.
              </p>
              <div className="bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
                <LanguageSelector variant="inline" />
              </div>
            </div>

            {/* Audio & Visual Preferences */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Preferences
              </h3>

              <div className="space-y-2">
                {/* Sound Effects */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
                      {soundEnabled ? (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <VolumeX className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">
                        Sound Effects
                      </span>
                      <span className="text-xs text-slate-400 block">
                        Audio feedback for correct and error responses
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={toggleSound}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                      soundEnabled ? 'bg-violet-600' : 'bg-slate-800'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        soundEnabled ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
                      <Zap className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">
                        Reduced Motion
                      </span>
                      <span className="text-xs text-slate-400 block">
                        Minimize animated page transitions and screen shake
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={toggleReducedMotion}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                      reducedMotion ? 'bg-violet-600' : 'bg-slate-800'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        reducedMotion ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Response Latency Timer */}
                <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
                      {timerVisible ? (
                        <Eye className="w-4 h-4 text-violet-400" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-white block">
                        Latency Timer
                      </span>
                      <span className="text-xs text-slate-400 block">
                        Show live milliseconds timer during drills
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={toggleTimerVisibility}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 ${
                      timerVisible ? 'bg-violet-600' : 'bg-slate-800'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        timerVisible ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Data Management & Backup */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Data Backup & Reset
              </h3>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleCopyBackup}
                  className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
                >
                  <Copy className="w-3.5 h-3.5 text-violet-400" />
                  <span>Copy Matrix JSON</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadBackup}
                  className="flex items-center justify-center gap-1.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-semibold border border-slate-800 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Download Backup</span>
                </button>
              </div>

              {!isImporting ? (
                <button
                  type="button"
                  onClick={() => setIsImporting(true)}
                  className="w-full flex items-center justify-center gap-1.5 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>Restore from Backup JSON</span>
                </button>
              ) : (
                <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                  <textarea
                    rows={3}
                    value={importText}
                    onChange={(e) => setImportText(e.target.value)}
                    placeholder="Paste Brain Matrix JSON here..."
                    className="w-full p-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono focus:outline-none focus:border-violet-500"
                  />
                  {importError && (
                    <div className="text-[11px] text-rose-400">{importError}</div>
                  )}
                  <div className="flex items-center gap-2 justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setIsImporting(false);
                        setImportText('');
                        setImportError(null);
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleImport}
                      className="px-4 py-1.5 rounded-lg text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/30"
                    >
                      Import & Restore
                    </button>
                  </div>
                </div>
              )}

              {/* Reset Section */}
              <div className="pt-2 border-t border-slate-800/80">
                {!showResetConfirm ? (
                  <button
                    type="button"
                    onClick={() => setShowResetConfirm(true)}
                    className="text-xs text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset All Data & Progress</span>
                  </button>
                ) : (
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-800/60 space-y-2">
                    <p className="text-xs text-rose-300">
                      Are you sure? This will permanently delete all mastered facts, streak, and history.
                    </p>
                    <div className="flex items-center gap-2 justify-end">
                      <button
                        type="button"
                        onClick={() => setShowResetConfirm(false)}
                        className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-400 hover:text-white"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-3 py-1 rounded-lg text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white"
                      >
                        Confirm Reset
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
