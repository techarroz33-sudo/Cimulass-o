'use client';

import React, { useState, useEffect } from 'react';
import { TopHeader } from '@/components/navigation/TopHeader';
import { BottomNav, NavTab } from '@/components/navigation/BottomNav';
import { InicioTab } from '@/components/tabs/InicioTab';
import { SimuladosTab } from '@/components/tabs/SimuladosTab';
import { DesempenhoTab } from '@/components/tabs/DesempenhoTab';
import { PerfilTab } from '@/components/tabs/PerfilTab';
import { ExamRunner } from '@/components/exam/ExamRunner';
import { ExamResultView } from '@/components/exam/ExamResultView';
import { CustomExamModal } from '@/components/modals/CustomExamModal';
import { Exam, ExamAttempt, ActiveExamSession, UserStats } from '@/types/simulado';
import {
  getStoredAttempts,
  getActiveSession,
  clearActiveSession,
  getUserStats,
  getErrorNotebook,
} from '@/lib/storage';
import { ALL_EXAMS } from '@/lib/exams-registry';

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState<NavTab>('inicio');
  const [activeExam, setActiveExam] = useState<Exam | null>(null);
  const [activeSession, setActiveSession] = useState<ActiveExamSession | null>(() => {
    if (typeof window !== 'undefined') return getActiveSession();
    return null;
  });
  const [latestAttempt, setLatestAttempt] = useState<ExamAttempt | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState<boolean>(false);

  // Stored state
  const [attempts, setAttempts] = useState<ExamAttempt[]>(() => {
    if (typeof window !== 'undefined') return getStoredAttempts();
    return [];
  });
  const [userStats, setUserStats] = useState<UserStats>(() => getUserStats());
  const [errorNotebookCount, setErrorNotebookCount] = useState<number>(() => {
    if (typeof window !== 'undefined') return getErrorNotebook().length;
    return 0;
  });

  const refreshData = React.useCallback(() => {
    setAttempts(getStoredAttempts());
    const stats = getUserStats();
    setUserStats(stats);
    const session = getActiveSession();
    setActiveSession(session);
    setErrorNotebookCount(getErrorNotebook().length);
  }, []);


  // Start an exam
  const handleStartExam = (exam: Exam) => {
    clearActiveSession();
    setActiveSession(null);
    setLatestAttempt(null);
    setActiveExam(exam);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resume active session
  const handleResumeSession = () => {
    if (!activeSession) return;
    const base =
      activeSession.customExam ||
      ALL_EXAMS.find((e) => e.id === activeSession.examId) ||
      ALL_EXAMS[0];

    setActiveExam(base);
    setLatestAttempt(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Finish an exam
  const handleFinishExam = (attempt: ExamAttempt) => {
    setActiveExam(null);
    setActiveSession(null);
    setLatestAttempt(attempt);
    refreshData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Exit from active exam back to main view
  const handleExitExam = () => {
    setActiveExam(null);
    refreshData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Review a past attempt from history table
  const handleReviewAttempt = (attempt: ExamAttempt) => {
    setLatestAttempt(attempt);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Return to home from result view
  const handleGoHomeFromResult = () => {
    setLatestAttempt(null);
    setCurrentTab('inicio');
    refreshData();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Retry errors from result view
  const handleRetryErrors = (errorExam: Exam) => {
    handleStartExam(errorExam);
  };


  // Active Exam Runner Mode
  if (activeExam) {
    return (
      <ExamRunner
        exam={activeExam}
        initialSession={activeSession}
        onFinishExam={handleFinishExam}
        onExit={handleExitExam}
      />
    );
  }

  // Exam Result View Mode
  if (latestAttempt) {
    return (
      <ExamResultView
        attempt={latestAttempt}
        onGoHome={handleGoHomeFromResult}
        onRetryErrors={handleRetryErrors}
      />
    );
  }

  // Normal Portal Tab View
  return (
    <div className="min-h-screen bg-[#05070B] text-[#DFE2EF] flex flex-col justify-between selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Top Header */}
      <TopHeader
        currentTab={currentTab}
        userStats={userStats}
        onOpenProfile={() => setCurrentTab('perfil')}
      />

      {/* Main Tab Content */}
      <main className="flex-1 max-w-xl w-full mx-auto px-4 py-5">
        {currentTab === 'inicio' && (
          <InicioTab
            userStats={userStats}
            activeSession={activeSession}
            errorNotebookCount={errorNotebookCount}
            onStartExam={handleStartExam}
            onResumeSession={handleResumeSession}
            onGoToSimulados={() => setCurrentTab('simulados')}
            onOpenCadernoErros={() => setCurrentTab('perfil')}
          />
        )}

        {currentTab === 'simulados' && (
          <SimuladosTab
            onStartExam={handleStartExam}
            onOpenCustomModal={() => setIsCustomModalOpen(true)}
          />
        )}

        {currentTab === 'desempenho' && (
          <DesempenhoTab
            attempts={attempts}
            userStats={userStats}
            onReviewAttempt={handleReviewAttempt}
            onStatsReset={refreshData}
          />
        )}

        {currentTab === 'perfil' && (
          <PerfilTab
            userStats={userStats}
            onUpdateStats={(newStats) => setUserStats(newStats)}
            onStartExam={handleStartExam}
          />
        )}
      </main>

      {/* Bottom Sticky Navigation */}
      <BottomNav
        currentTab={currentTab}
        onChangeTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Custom Mock Exam Modal */}
      <CustomExamModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onStartCustomExam={handleStartExam}
      />
    </div>
  );
}
