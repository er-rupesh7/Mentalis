'use client';

import React, { useState, useEffect } from 'react';
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
  User,
  Shield,
  ExternalLink,
  Sparkles,
  Trash2,
  AlertTriangle,
  Loader2,
  Palette,
  Type,
  Activity,
  Layers,
  Flame,
  Music,
} from 'lucide-react';
import { useQuizStore } from '../core/store/useQuizStore';
import { LanguageSelector } from './LanguageSelector';
import { BadgeEmblem } from './badges/BadgeEmblem';
import { getBadgeForLevel } from '../core/levelEngine';
import { socialEngine } from '../core/social/socialEngine';
import { playClickSound, playCorrectSound } from '../core/soundEffects';

type SettingsTab = 'theme' | 'profile' | 'preferences' | 'language' | 'data';

export const SettingsModal: React.FC = () => {
  const {
    isSettingsModalOpen,
    setIsSettingsModalOpen,
    currentUser,
    username,
    avatarType,
    selectedBadgeLevel,
    level,
    setAvatarPreference,
    updateDisplayName,
    updateUsername,
    setIsBadgePickerOpen,
    soundEnabled,
    toggleSound,
    reducedMotion,
    toggleReducedMotion,
    timerVisible,
    toggleTimerVisibility,
    themeConfig,
    setThemeConfig,
    exportBrainMatrixJSON,
    importBrainMatrixJSON,
    resetProgress,
    deleteAccount,
    setAuthModalOpen,
  } = useQuizStore();

  const [activeTab, setActiveTab] = useState<SettingsTab>('theme');
  const [backupFeedback, setBackupFeedback] = useState<string | null>(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importText, setImportText] = useState('');
  const [importError, setImportError] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Account deletion state
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteInputText, setDeleteInputText] = useState('');
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  // Display name form state
  const [inputDisplayName, setInputDisplayName] = useState(currentUser?.displayName || '');
  const [displayNameSaving, setDisplayNameSaving] = useState(false);
  const [displayNameMessage, setDisplayNameMessage] = useState<{ text: string; isError: boolean } | null>(null);

  // Username form state
  const [inputUsername, setInputUsername] = useState(username || '');
  const [usernameSaving, setUsernameSaving] = useState(false);
  const [usernameMessage, setUsernameMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const [isCheckingAvailability, setIsCheckingAvailability] = useState(false);
  const [availabilityResult, setAvailabilityResult] = useState<{
    available?: boolean;
    text: string;
    isError?: boolean;
    remainingMinute?: number;
    remainingHour?: number;
  } | null>(null);

  // Default to theme tab whenever settings modal is opened
  useEffect(() => {
    if (isSettingsModalOpen) {
      setActiveTab('theme');
    }
  }, [isSettingsModalOpen]);

  useEffect(() => {
    if (currentUser?.displayName) {
      setInputDisplayName(currentUser.displayName);
    }
  }, [currentUser?.displayName]);

  useEffect(() => {
    setInputUsername(username || '');
    setAvailabilityResult(null);
  }, [username]);

  if (!isSettingsModalOpen) return null;

  const handleSaveDisplayName = async () => {
    if (!currentUser) return;
    const clean = inputDisplayName.trim().replace(/\s+/g, ' ');
    if (clean.length < 1 || clean.length > 50) {
      setDisplayNameMessage({ text: 'Display name must be between 1 and 50 characters.', isError: true });
      return;
    }
    setDisplayNameSaving(true);
    setDisplayNameMessage(null);
    const res = await updateDisplayName(clean);
    setDisplayNameSaving(false);
    if (res.success) {
      setDisplayNameMessage({ text: 'Display name updated successfully everywhere!', isError: false });
    } else {
      setDisplayNameMessage({ text: res.error || 'Failed to update display name.', isError: true });
    }
  };

  const handleCheckAvailability = async () => {
    if (!currentUser) {
      setAvailabilityResult({ text: 'Please sign in to check username availability.', isError: true });
      return;
    }
    const clean = inputUsername.trim().toLowerCase();
    if (!/^[a-z0-9_]{3,20}$/.test(clean)) {
      setAvailabilityResult({
        text: 'Must be 3-20 characters using only lowercase letters, numbers, or underscores.',
        isError: true,
      });
      return;
    }
    if (clean === username) {
      setAvailabilityResult({ text: `@${clean} is currently your assigned username!`, available: true });
      return;
    }

    setIsCheckingAvailability(true);
    setAvailabilityResult(null);
    const res = await socialEngine.checkUsernameAvailability(currentUser.id, clean);
    setIsCheckingAvailability(false);

    if (res.available) {
      setAvailabilityResult({
        text: `✓ @${clean} is available! (${res.remainingMinute ?? 4} checks left this min)`,
        available: true,
        remainingMinute: res.remainingMinute,
        remainingHour: res.remainingHour,
      });
    } else {
      setAvailabilityResult({
        text: res.error || 'Username is not available.',
        isError: true,
        remainingMinute: res.remainingMinute,
        remainingHour: res.remainingHour,
      });
    }
  };

  const handleSaveUsername = async () => {
    if (!currentUser) return;
    const clean = inputUsername.trim().toLowerCase();
    if (!/^[a-z0-9_]{3,20}$/.test(clean)) {
      setUsernameMessage({
        text: 'Must be 3-20 characters using only lowercase letters, numbers, or underscores.',
        isError: true,
      });
      return;
    }

    setUsernameSaving(true);
    setUsernameMessage(null);
    const res = await updateUsername(clean);
    setUsernameSaving(false);

    if (res.success) {
      setUsernameMessage({ text: `Username successfully updated to @${clean}!`, isError: false });
      setAvailabilityResult(null);
    } else {
      setUsernameMessage({ text: res.error || 'Failed to update username.', isError: true });
    }
  };

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
      a.download = `mentalab_backup_${Date.now()}.json`;
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

  const handleDeleteAccount = async () => {
    setIsDeletingAccount(true);
    setDeleteError(null);
    try {
      const res = await deleteAccount();
      if (res.success) {
        setShowDeleteConfirm(false);
        setIsSettingsModalOpen(false);
      } else {
        setDeleteError(res.error || 'Failed to delete profile.');
      }
    } catch (err: any) {
      setDeleteError(err?.message || 'Error occurred during deletion.');
    } finally {
      setIsDeletingAccount(false);
    }
  };

  const equippedBadge = getBadgeForLevel(selectedBadgeLevel || level || 1);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 pt-3 sm:pt-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="w-full max-w-xl max-h-[92vh] sm:max-h-[88vh] rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl flex flex-col overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-slate-800 shrink-0 bg-slate-950/90">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                  Settings & Preferences
                </h2>
                <p className="text-[11px] text-slate-400">
                  Customization, themes, profile, audio & data controls
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsSettingsModalOpen(false)}
              className="p-1.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close Settings"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tab Bar */}
          <div className="flex items-center gap-1 px-3 sm:px-4 py-2 border-b border-slate-800 bg-slate-900/40 overflow-x-auto scrollbar-none shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('theme')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'theme'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Appearance & Theme</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('profile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'profile'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Profile & Avatar</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('preferences')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'preferences'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Music className="w-3.5 h-3.5" />
              <span>Audio & Speed</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('language')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'language'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Language / भाषा</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('data')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activeTab === 'data'
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Data & Backup</span>
            </button>
          </div>

          {/* Tab Content Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 custom-scrollbar">
            {/* Feedback Alert */}
            {backupFeedback && (
              <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs font-semibold text-emerald-300 text-center animate-in fade-in">
                {backupFeedback}
              </div>
            )}

            {/* TAB 1: APPEARANCE & THEME */}
            {activeTab === 'theme' && (
              <div className="space-y-5 animate-in fade-in duration-200">
                {/* Visual Theme Header */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-violet-400" />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Visual Theme & Matrix Canvas
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    Realtime Synced
                  </span>
                </div>

                {/* Neon Accent Glow Aura */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Neon Accent Glow Aura
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'violet', label: 'Violet Cyber', hex: '#8b5cf6', desc: 'Futuristic Purple' },
                      { id: 'emerald', label: 'Emerald Hacker', hex: '#10b981', desc: 'Matrix Cyberpunk' },
                      { id: 'cyan', label: 'Neon Cyan', hex: '#06b6d4', desc: 'Electric Tech' },
                      { id: 'amber', label: 'Gold Spark', hex: '#f59e0b', desc: 'Solar Energy' },
                      { id: 'rose', label: 'Apex Crimson', hex: '#f43f5e', desc: 'High Adrenaline' },
                    ].map((color) => {
                      const isSelected = (themeConfig?.accentColor || 'violet') === color.id;
                      return (
                        <button
                          key={color.id}
                          type="button"
                          onClick={() => setThemeConfig({ accentColor: color.id as any })}
                          className={`p-2.5 rounded-xl border flex items-center gap-2.5 transition-all text-left ${
                            isSelected
                              ? 'border-white text-white shadow-lg bg-slate-900'
                              : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                          }`}
                          style={{
                            boxShadow: isSelected ? `0 0 14px ${color.hex}60` : undefined,
                          }}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full shrink-0 shadow-sm"
                            style={{ backgroundColor: color.hex }}
                          />
                          <div className="truncate">
                            <div className="text-xs font-bold">{color.label}</div>
                            <div className="text-[10px] text-slate-500">{color.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Typography Font Style */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Type className="w-3.5 h-3.5 text-slate-400" />
                    <span>Typography Font Style</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'inter', label: 'Inter', desc: 'Modern Clean' },
                      { id: 'space_mono', label: 'Space Mono', desc: 'Sci-Fi Terminal' },
                      { id: 'outfit', label: 'Outfit', desc: 'Geometric Elegance' },
                      { id: 'roboto', label: 'Roboto', desc: 'Crisp & Neutral' },
                    ].map((font) => (
                      <button
                        key={font.id}
                        type="button"
                        onClick={() => setThemeConfig({ fontFamily: font.id as any })}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          (themeConfig?.fontFamily || 'inter') === font.id
                            ? 'bg-violet-600/25 border-violet-500 text-white shadow-md shadow-violet-600/20'
                            : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-400'
                        }`}
                      >
                        <div className="text-xs font-bold text-white">{font.label}</div>
                        <div className="text-[10px] text-slate-500">{font.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Digital Matrix Rain Background Toggle */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-emerald-400">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Digital Matrix Rain Background
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        Luminous math symbols, formulas & roots cascading in background
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setThemeConfig({ matrixRainEnabled: !themeConfig?.matrixRainEnabled })}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 shrink-0 ${
                      themeConfig?.matrixRainEnabled ? 'bg-emerald-600' : 'bg-slate-800'
                    }`}
                    aria-label="Toggle Matrix Rain"
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        themeConfig?.matrixRainEnabled ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Tactile 3D Buttons & Animations */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-violet-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Tactile 3D Keypad Feedback
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        Physical mechanical button depression physics and micro-press animations
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      playClickSound();
                      setThemeConfig({ tactile3DEnabled: themeConfig?.tactile3DEnabled === false ? true : false });
                    }}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 shrink-0 ${
                      themeConfig?.tactile3DEnabled !== false ? 'bg-violet-600' : 'bg-slate-800'
                    }`}
                    aria-label="Toggle 3D buttons"
                  >
                    <div
                      className={`w-4 h-4 rounded-full bg-white transition-transform ${
                        themeConfig?.tactile3DEnabled !== false ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Font Size Scaling */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Interface Scale & Font Size
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { id: 'compact', label: 'Compact', scale: '90%' },
                      { id: 'standard', label: 'Standard', scale: '100%' },
                      { id: 'large', label: 'Large', scale: '110%' },
                      { id: 'xlarge', label: 'X-Large', scale: '125%' },
                    ].map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setThemeConfig({ fontSize: size.id as any })}
                        className={`py-2 px-2 rounded-xl text-xs font-medium border text-center transition-all ${
                          (themeConfig?.fontSize || 'standard') === size.id
                            ? 'bg-violet-600/25 border-violet-500 text-violet-300 font-bold'
                            : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {size.label} ({size.scale})
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: PROFILE & AVATAR */}
            {activeTab === 'profile' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                {currentUser ? (
                  <div className="space-y-4">
                    {/* Public Display Name Input */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-slate-300">
                          Public Display Name (Platform-wide)
                        </label>
                        <span className="text-[10px] text-slate-400">
                          Shown on profile, leaderboards & chat
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <input
                          type="text"
                          value={inputDisplayName}
                          onChange={(e) => {
                            setInputDisplayName(e.target.value);
                            setDisplayNameMessage(null);
                          }}
                          placeholder="e.g. Mentalist Champion"
                          maxLength={50}
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500"
                        />
                        <button
                          type="button"
                          onClick={handleSaveDisplayName}
                          disabled={displayNameSaving || !inputDisplayName.trim()}
                          className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white font-bold text-xs shadow-md shadow-violet-600/30 transition-all flex items-center justify-center gap-1.5"
                        >
                          {displayNameSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Check className="w-3.5 h-3.5" />}
                          <span>Save Name</span>
                        </button>
                      </div>

                      {displayNameMessage && (
                        <p className={`text-[11px] font-medium ${displayNameMessage.isError ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {displayNameMessage.text}
                        </p>
                      )}
                    </div>

                    {/* Custom Username */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-semibold text-slate-300">
                          Custom Username (Public Profile URL)
                        </label>
                        <span className="text-[10px] text-slate-400">
                          1 change / 30 days
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="relative flex-1">
                          <span className="absolute left-3 top-2.5 text-xs text-slate-500 font-mono">@</span>
                          <input
                            type="text"
                            value={inputUsername}
                            onChange={(e) => {
                              setInputUsername(e.target.value);
                              setUsernameMessage(null);
                              setAvailabilityResult(null);
                            }}
                            placeholder="username"
                            maxLength={20}
                            className="w-full pl-7 pr-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white font-mono placeholder:text-slate-600 focus:outline-none focus:border-violet-500"
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={handleCheckAvailability}
                            disabled={isCheckingAvailability || !inputUsername.trim()}
                            className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 text-xs font-semibold border border-slate-700 transition-all flex items-center justify-center gap-1"
                          >
                            {isCheckingAvailability ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Check'}
                          </button>
                          <button
                            type="button"
                            onClick={handleSaveUsername}
                            disabled={usernameSaving || !inputUsername.trim()}
                            className="px-3.5 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-xs font-bold shadow-md shadow-violet-600/30 transition-all flex items-center justify-center gap-1"
                          >
                            {usernameSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Save'}
                          </button>
                        </div>
                      </div>

                      {availabilityResult && (
                        <p className={`text-[11px] font-medium ${availabilityResult.isError ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {availabilityResult.text}
                        </p>
                      )}

                      {usernameMessage && (
                        <p className={`text-[11px] font-medium ${usernameMessage.isError ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {usernameMessage.text}
                        </p>
                      )}
                    </div>

                    {/* Display Picture Source */}
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Display Picture (DP) Source
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setAvatarPreference('google')}
                          className={`p-3 rounded-2xl border flex flex-col items-center text-center gap-2 transition-all ${
                            avatarType === 'google'
                              ? 'bg-violet-600/10 border-violet-500 shadow-sm shadow-violet-500/20'
                              : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {currentUser.avatarUrl ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={currentUser.avatarUrl}
                              alt={currentUser.displayName || 'Profile'}
                              className="w-10 h-10 rounded-full border border-slate-700 object-cover"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-violet-600/30 text-violet-300 flex items-center justify-center font-bold text-sm">
                              {(currentUser.displayName || 'U')[0].toUpperCase()}
                            </div>
                          )}
                          <div>
                            <p className="text-xs font-bold text-white">Google Profile</p>
                            <p className="text-[10px] text-slate-400">Social Account Photo</p>
                          </div>
                          {avatarType === 'google' && (
                            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                              Active DP
                            </span>
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => setAvatarPreference('badge')}
                          className={`p-3 rounded-2xl border flex flex-col items-center text-center gap-2 transition-all ${
                            avatarType === 'badge'
                              ? 'bg-amber-500/10 border-amber-500 shadow-sm shadow-amber-500/20'
                              : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <BadgeEmblem level={selectedBadgeLevel || level || 1} size="sm" showLevel={false} showStars={false} />
                          <div>
                            <p className="text-xs font-bold text-white">Equipped Badge</p>
                            <p className="text-[10px] text-amber-300 font-mono">Lv.{selectedBadgeLevel || level || 1} {equippedBadge.tier.name}</p>
                          </div>
                          {avatarType === 'badge' && (
                            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              Active DP
                            </span>
                          )}
                        </button>
                      </div>

                      <div className="flex justify-end pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setIsSettingsModalOpen(false);
                            setIsBadgePickerOpen(true);
                          }}
                          className="flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline"
                        >
                          <Shield className="w-3.5 h-3.5" />
                          <span>Browse all 1000 Badges to Equip</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
                    <div className="w-12 h-12 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center mx-auto">
                      <User className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">Guest Account</h4>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto">
                        Sign in with Google to equip custom 1000-level badges, secure your profile username, and sync streaks across all devices.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSettingsModalOpen(false);
                        setAuthModalOpen(true);
                      }}
                      className="px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all"
                    >
                      Sign In / Connect Profile
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: AUDIO & SPEED PREFERENCES */}
            {activeTab === 'preferences' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                {/* Sound Effects */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
                      {soundEnabled ? (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <VolumeX className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Tactile Sound Effects & Fanfares
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        Synthesized zero-latency clicks, harmonic streak chimes & fanfares
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => playCorrectSound(3)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] text-slate-300 font-semibold border border-slate-700 transition-colors"
                      title="Test Audio"
                    >
                      Test
                    </button>
                    <button
                      type="button"
                      onClick={toggleSound}
                      className={`w-12 h-6 rounded-full transition-colors relative p-1 shrink-0 ${
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
                </div>

                {/* Response Latency Timer */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
                      {timerVisible ? (
                        <Eye className="w-4 h-4 text-violet-400" />
                      ) : (
                        <EyeOff className="w-4 h-4 text-slate-500" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Response Latency Milliseconds Timer
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        Show live target time & latency countdown on questions
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={toggleTimerVisibility}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 shrink-0 ${
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

                {/* Reduced Motion */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-800 text-slate-300">
                      <Zap className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        Reduced Motion
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        Minimize animated page transitions and celebratory screen shake
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={toggleReducedMotion}
                    className={`w-12 h-6 rounded-full transition-colors relative p-1 shrink-0 ${
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
              </div>
            )}

            {/* TAB 4: LANGUAGE */}
            {activeTab === 'language' && (
              <div className="space-y-3 animate-in fade-in duration-200">
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
            )}

            {/* TAB 5: DATA MANAGEMENT & BACKUP */}
            {activeTab === 'data' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                    Data Backup & Export
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

                  {/* Danger Zone: Delete Profile & Account */}
                  {currentUser && (
                    <div className="pt-3 border-t border-rose-900/40 space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                            <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                            <span>Delete Profile & Account</span>
                          </h4>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Permanently delete your profile and all learning data.
                          </p>
                        </div>

                        {!showDeleteConfirm && (
                          <button
                            type="button"
                            onClick={() => {
                              setShowDeleteConfirm(true);
                              setDeleteInputText('');
                              setDeleteError(null);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 text-xs font-semibold transition-all whitespace-nowrap"
                          >
                            Delete Account
                          </button>
                        )}
                      </div>

                      {showDeleteConfirm && (
                        <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/60 space-y-3 mt-2">
                          <div className="flex items-start gap-2.5 text-rose-200">
                            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                            <div className="text-xs space-y-1">
                              <p className="font-bold text-rose-300">Permanent Account Deletion Warning</p>
                              <p className="text-slate-300 leading-relaxed text-[11px]">
                                This will permanently wipe all your mastered facts, Bayesian learner models, streak history, badges, and mutual friendships.
                              </p>
                            </div>
                          </div>

                          {deleteError && (
                            <div className="p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs">
                              {deleteError}
                            </div>
                          )}

                          <div className="space-y-1.5">
                            <label className="text-[11px] font-semibold text-slate-400">
                              Type <span className="font-mono text-rose-400 font-bold">DELETE</span> to confirm:
                            </label>
                            <input
                              type="text"
                              value={deleteInputText}
                              onChange={(e) => setDeleteInputText(e.target.value)}
                              placeholder="Type DELETE..."
                              className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-rose-900/60 text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-rose-500"
                            />
                          </div>

                          <div className="flex items-center gap-2 justify-end pt-1">
                            <button
                              type="button"
                              onClick={() => setShowDeleteConfirm(false)}
                              disabled={isDeletingAccount}
                              className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={handleDeleteAccount}
                              disabled={deleteInputText.trim() !== 'DELETE' || isDeletingAccount}
                              className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                            >
                              {isDeletingAccount ? (
                                <>
                                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                  <span>Deleting Everything...</span>
                                </>
                              ) : (
                                <>
                                  <Trash2 className="w-3.5 h-3.5" />
                                  <span>Permanently Delete My Profile</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
