'use client';

import React, { useState, useEffect } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { useQuizStore } from '../core/store/useQuizStore';
import { allMessages, getMessagesForLocale } from '../i18n/messages';
import { Navigation } from '../components/Navigation';
import { Dashboard } from '../components/Dashboard';
import { PracticeScreen } from '../components/PracticeScreen';
import { AnzanFlashScreen } from '../components/AnzanFlashScreen';
import { TableHeatmap } from '../components/TableHeatmap';
import { TableChart } from '../components/TableChart';
import { TutorialModal } from '../components/TutorialModal';
import { SkillAssessmentModal } from '../components/SkillAssessmentModal';
import { SkillProfileView } from '../components/SkillProfileView';
import { MemoryMap } from '../components/MemoryMap';
import { TablesBootcampView } from '../components/TablesBootcampView';
import { ExamQuantView } from '../components/ExamQuantView';
import { TechniquesCurriculumView } from '../components/TechniquesCurriculumView';
import { CustomDrillModal } from '../components/CustomDrillModal';
import { LanguageOnboardingModal } from '../components/LanguageOnboardingModal';
import { SettingsModal } from '../components/SettingsModal';
import { AuthModal } from '../components/auth/AuthModal';
import { BadgePickerModal } from '../components/badges/BadgePickerModal';
import { LevelUpModal } from '../components/badges/LevelUpModal';
import { ChatDrawer } from '../components/chat/ChatDrawer';
import { MobileTabBar } from '../components/MobileTabBar';

export default function MentalisApp() {
  const {
    viewMode,
    isCustomDrillModalOpen,
    setIsCustomDrillModalOpen,
    locale,
    initializeAuthAndSync,
    isBadgePickerOpen,
    setIsBadgePickerOpen,
    level,
    xp,
    selectedBadgeLevel,
    selectedMasteryBadgeId,
    avatarType,
    setAvatarPreference,
    setAuthModalOpen,
  } = useQuizStore();

  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    initializeAuthAndSync();
  }, [initializeAuthAndSync]);

  // First-landing login prompt for unauthenticated users so progress is monitored and maintained across devices
  useEffect(() => {
    if (!isMounted) return;

    const timer = setTimeout(() => {
      const state = useQuizStore.getState();
      if (!state.currentUser && typeof window !== 'undefined') {
        const hasPrompted = window.localStorage.getItem('mentalis_landing_login_prompted');
        if (!hasPrompted) {
          window.localStorage.setItem('mentalis_landing_login_prompted', 'true');
          state.setAuthModalOpen(true);
        }
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [isMounted]);

  // Update dynamic document lang and RTL direction whenever locale changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === 'ur' ? 'rtl' : 'ltr';
    }
  }, [locale]);

  if (!isMounted) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-screen bg-slate-950 text-slate-400 font-mono">
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border-2 border-violet-500 border-t-transparent animate-spin" />
          <span>Starting Mentalis Engine...</span>
        </div>
      </div>
    );
  }

  const currentMessages = getMessagesForLocale(locale);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={currentMessages}
      timeZone="Asia/Kolkata"
    >
      <main className="flex-1 flex flex-col min-h-screen bg-transparent relative">
        {/* Navigation Top Bar (Hidden during practice/anzan for 100% full screen focus) */}
        {viewMode !== 'practice' && viewMode !== 'anzan' && (
          <Navigation onOpenTutorial={() => setIsTutorialOpen(true)} />
        )}

        {/* Dynamic View Router */}
        <div className="flex-1 flex flex-col">
          {viewMode === 'dashboard' && (
            <Dashboard onOpenTutorial={() => setIsTutorialOpen(true)} />
          )}
          {viewMode === 'bootcamp_11_20' && <TablesBootcampView />}
          {viewMode === 'exam_quant' && <ExamQuantView />}
          {viewMode === 'techniques' && <TechniquesCurriculumView />}
          {viewMode === 'practice' && (
            <PracticeScreen onOpenTutorial={() => setIsTutorialOpen(true)} />
          )}
          {viewMode === 'anzan' && <AnzanFlashScreen />}
          {viewMode === 'heatmap' && <TableHeatmap />}
          {viewMode === 'table_chart' && <TableChart />}
          {viewMode === 'memory_map' && <MemoryMap />}
          {viewMode === 'assessment' && <SkillAssessmentModal />}
          {viewMode === 'profile' && <SkillProfileView />}
        </div>

        {/* Interactive Theory & Tutorial Modal */}
        <TutorialModal
          isOpen={isTutorialOpen}
          onClose={() => setIsTutorialOpen(false)}
        />

        {/* Centralized Custom Workout Builder Modal */}
        <CustomDrillModal
          isOpen={isCustomDrillModalOpen}
          onClose={() => setIsCustomDrillModalOpen(false)}
        />

        {/* First-Launch Language Onboarding Modal */}
        <LanguageOnboardingModal />

        {/* Centralized Settings & Accessibility Modal */}
        <SettingsModal />

        {/* Cloud Authentication & Sync Modal */}
        <AuthModal />

        {/* 1000-Level & Mastery Badge Equipment Modal */}
        <BadgePickerModal
          isOpen={isBadgePickerOpen}
          onClose={() => setIsBadgePickerOpen(false)}
          currentLevel={level}
          currentXP={xp}
          selectedBadgeLevel={selectedBadgeLevel}
          selectedMasteryBadgeId={selectedMasteryBadgeId}
          avatarType={avatarType}
          onSelectBadge={(lvl) => setAvatarPreference('badge', lvl)}
          onSelectMasteryBadge={(badgeId) => setAvatarPreference('mastery', selectedBadgeLevel, badgeId)}
          onSelectAvatarType={(type) => setAvatarPreference(type)}
        />

        {/* Level Up Celebration Alert */}
        <LevelUpModal />

        {/* Realtime 1v1 Chat & Friends Drawer */}
        <ChatDrawer />

        {/* Native Mobile Bottom Navigation Dock */}
        <MobileTabBar />
      </main>
    </NextIntlClientProvider>
  );
}
