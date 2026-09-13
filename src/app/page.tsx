'use client';

import React, { useState, useEffect } from 'react';
import { useQuizStore } from '../core/store/useQuizStore';
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

export default function MentalisApp() {
  const { viewMode, isCustomDrillModalOpen, setIsCustomDrillModalOpen } = useQuizStore();
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  return (
    <main className="flex-1 flex flex-col min-h-screen bg-slate-950 relative">
      {/* Navigation Top Bar */}
      <Navigation onOpenTutorial={() => setIsTutorialOpen(true)} />

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

      {/* Root-Level Centralized Custom Workout Builder Modal */}
      <CustomDrillModal
        isOpen={isCustomDrillModalOpen}
        onClose={() => setIsCustomDrillModalOpen(false)}
      />
    </main>
  );
}
