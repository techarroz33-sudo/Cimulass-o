'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Lightbulb,
  Flag,
  Pause,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Type,
  Grid,
  X,
  Sigma,
  BookOpen,
} from 'lucide-react';
import { Exam, Question, ExamAttempt, ActiveExamSession } from '@/types/simulado';
import { saveActiveSession, clearActiveSession, saveExamAttempt } from '@/lib/storage';

interface ExamRunnerProps {
  exam: Exam;
  initialSession?: ActiveExamSession | null;
  onFinishExam: (attempt: ExamAttempt) => void;
  onExit: () => void;
}

export function ExamRunner({
  exam,
  initialSession,
  onFinishExam,
  onExit,
}: ExamRunnerProps) {
  const totalQuestions = exam.questions.length;

  // Active question state
  const [currentIndex, setCurrentIndex] = useState<number>(
    initialSession ? Math.min(initialSession.currentIndex, totalQuestions - 1) : 0
  );
  const [userAnswers, setUserAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>>(
    initialSession?.userAnswers || {}
  );
  const [flaggedQuestions, setFlaggedQuestions] = useState<string[]>(
    initialSession?.flaggedQuestions || []
  );

  // Timer state
  const initialSeconds = initialSession?.remainingSeconds
    ? initialSession.remainingSeconds
    : exam.durationMinutes * 60;
  const [remainingSeconds, setRemainingSeconds] = useState<number>(initialSeconds);
  const [isPaused, setIsPaused] = useState<boolean>(initialSession?.isPaused || false);

  // UI state
  const [fontSizeIndex, setFontSizeIndex] = useState<number>(1); // 0=sm, 1=base, 2=lg, 3=xl
  const fontSizes = ['text-sm', 'text-base', 'text-lg', 'text-xl'];

  const [showFormulaDrawer, setShowFormulaDrawer] = useState<boolean>(false);
  const [showMapDrawer, setShowMapDrawer] = useState<boolean>(false);
  const [showFinishConfirmModal, setShowFinishConfirmModal] = useState<boolean>(false);
  const [showExitConfirmModal, setShowExitConfirmModal] = useState<boolean>(false);

  // Time tracker
  const startTimeRef = useRef<number>(0);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!startTimeRef.current) {
      startTimeRef.current = Date.now();
    }
  }, []);

  // Current question object
  const currentQuestion: Question = exam.questions[currentIndex] || exam.questions[0];
  const currentQId = currentQuestion.id;
  const currentAnswer = userAnswers[currentQId];
  const isCurrentFlagged = flaggedQuestions.includes(currentQId);

  // Grade calculation
  const calculateResult = React.useCallback((): ExamAttempt => {
    let correctCount = 0;
    let wrongCount = 0;
    let blankCount = 0;

    const areaMap: Record<string, { total: number; correct: number }> = {};

    exam.questions.forEach((q) => {
      const ans = userAnswers[q.id];
      const area = q.subject;

      if (!areaMap[area]) {
        areaMap[area] = { total: 0, correct: 0 };
      }
      areaMap[area].total += 1;

      if (!ans) {
        blankCount += 1;
      } else if (ans === q.correctOption) {
        correctCount += 1;
        areaMap[area].correct += 1;
      } else {
        wrongCount += 1;
      }
    });

    const percentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const timeSpentSeconds = exam.durationMinutes * 60 - remainingSeconds;

    const baseScore = 450;
    const estimatedTri = Math.min(
      950,
      Math.round(baseScore + percentage * 4.4 + (correctCount > 15 ? 40 : 10) + 2)
    );

    const areaPerformance = Object.entries(areaMap).map(([area, data]) => ({
      area,
      total: data.total,
      correct: data.correct,
      percentage: Math.round((data.correct / data.total) * 100),
    }));

    const attempt: ExamAttempt = {
      id: `attempt-${exam.id}-${timeSpentSeconds}`,
      examId: exam.id,
      examTitle: exam.title,
      examType: exam.examType,
      date: '2024-10-24',
      timestamp: startTimeRef.current || 1,
      totalQuestions,
      correctCount,
      wrongCount,
      blankCount,
      percentage,
      estimatedTri,
      timeSpentSeconds: Math.max(15, timeSpentSeconds),
      userAnswers,
      flaggedQuestions,
      areaPerformance,
    };

    return attempt;
  }, [exam, userAnswers, flaggedQuestions, remainingSeconds, totalQuestions]);

  const handleAutoSubmit = React.useCallback(() => {
    const attempt = calculateResult();
    saveExamAttempt(attempt);
    clearActiveSession();
    onFinishExam(attempt);
  }, [calculateResult, onFinishExam]);

  // Countdown timer effect
  useEffect(() => {
    if (isPaused) {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
      return;
    }

    timerIntervalRef.current = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerIntervalRef.current!);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isPaused, handleAutoSubmit]);

  // Periodic autosave to localStorage
  useEffect(() => {
    const session: ActiveExamSession = {
      examId: exam.id,
      startedAt: startTimeRef.current || 0,
      totalDurationSeconds: exam.durationMinutes * 60,
      remainingSeconds,
      currentIndex,
      userAnswers,
      flaggedQuestions,
      isPaused,
      fontSize: (['sm', 'base', 'lg', 'xl'][fontSizeIndex] as any) || 'base',
      customExam: exam.id.startsWith('custom-') ? exam : undefined,
    };
    saveActiveSession(session);
  }, [exam, remainingSeconds, currentIndex, userAnswers, flaggedQuestions, isPaused, fontSizeIndex]);


  // Format seconds to HH:MM:SS
  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const mins = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${hours.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optId: 'A' | 'B' | 'C' | 'D' | 'E') => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQId]: optId,
    }));
  };

  const handleToggleFlag = () => {
    setFlaggedQuestions((prev) =>
      prev.includes(currentQId)
        ? prev.filter((id) => id !== currentQId)
        : [...prev, currentQId]
    );
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setShowFormulaDrawer(false);
    } else {
      setShowFinishConfirmModal(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setShowFormulaDrawer(false);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentIndex(index);
    setShowMapDrawer(false);
    setShowFormulaDrawer(false);
  };

  const handleFinishConfirmed = () => {
    setShowFinishConfirmModal(false);
    handleAutoSubmit();
  };


  const answeredCount = Object.keys(userAnswers).length;
  const unansweredCount = totalQuestions - answeredCount;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-[#05070B] text-[#DFE2EF] flex flex-col justify-between selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Top sticky progress line */}
      <div className="w-full bg-[#0F172A] h-1.5 overflow-hidden">
        <div
          className="h-full bg-[#00E5FF] transition-all duration-300 shadow-[0_0_10px_#00E5FF]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Header HUD */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#05070B]/90 border-b border-white/[0.06] px-4 py-2.5">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          {/* Back button */}
          <button
            onClick={() => setShowExitConfirmModal(true)}
            className="w-9 h-9 rounded-xl bg-[#0F172A] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#00E5FF]/40 transition-colors"
            title="Sair do Simulado"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Title */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[#00E5FF] flex items-center justify-center text-[10px] text-[#00E5FF] font-bold">
              ✓
            </div>
            <span className="font-heading font-bold text-sm text-white tracking-wide truncate max-w-[180px] sm:max-w-xs">
              Simulado Em Andamento
            </span>
          </div>

          {/* User mini avatar */}
          <div className="w-8 h-8 rounded-full ring-2 ring-[#00E5FF] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second HUD Row: Progress count, Timer, Tactical Buttons */}
        <div className="max-w-3xl mx-auto mt-2 flex items-center justify-between gap-2">
          {/* Progress */}
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
            <span className="text-[10px] font-heading font-semibold text-[#94A3B8] uppercase">
              Progresso
            </span>
            <span className="text-sm font-heading font-bold text-white ml-1">
              {currentIndex + 1} <span className="text-[#94A3B8] font-normal">/ {totalQuestions}</span>
            </span>
          </div>

          {/* Countdown Timer */}
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full border font-heading font-bold text-xs tracking-wider transition-colors ${
              remainingSeconds < 300
                ? 'bg-[#F43F5E]/15 border-[#F43F5E] text-[#F43F5E] animate-pulse'
                : 'bg-[#0F172A] border-[#00E5FF]/30 text-[#00E5FF]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{formatTime(remainingSeconds)}</span>
          </div>

          {/* Quick HUD actions: Hint, Flag, Pause */}
          <div className="flex items-center gap-1.5">
            {/* Formula hint */}
            {currentQuestion.formulaHint && (
              <button
                onClick={() => setShowFormulaDrawer((prev) => !prev)}
                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors border ${
                  showFormulaDrawer
                    ? 'bg-[#00E5FF] text-[#05070B] border-[#00E5FF]'
                    : 'bg-[#0F172A] border-white/[0.08] text-[#38BDF8] hover:border-[#38BDF8]'
                }`}
                title="Dica de Fórmula"
              >
                <Lightbulb className="w-4 h-4" />
              </button>
            )}

            {/* Flag / Review */}
            <button
              onClick={handleToggleFlag}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors border ${
                isCurrentFlagged
                  ? 'bg-[#F59E0B] text-[#05070B] border-[#F59E0B]'
                  : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8] hover:text-white'
              }`}
              title="Marcar para Revisão"
            >
              <Flag className="w-4 h-4" />
            </button>

            {/* Pause */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="w-8 h-8 rounded-lg bg-[#0F172A] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-[#00E5FF]/30 transition-colors"
              title={isPaused ? 'Retomar Simulado' : 'Pausar Simulado'}
            >
              {isPaused ? <Play className="w-4 h-4 text-[#10B981]" /> : <Pause className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-4 pb-24 overflow-y-auto">
        {/* Question Metadata Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="px-2.5 py-1 rounded-lg bg-[#0F172A] border border-white/[0.08] text-[11px] font-heading font-semibold text-[#38BDF8]">
            {exam.examType} {currentQuestion.year}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#0F172A] border border-white/[0.08] text-[11px] font-heading font-medium text-[#BAC9CC]">
            {currentQuestion.subject}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#0F172A] border border-white/[0.08] text-[11px] font-medium text-[#94A3B8] hidden sm:inline-block">
            {currentQuestion.subtopic}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-[#10B981]/10 border border-[#10B981]/30 text-[11px] font-heading font-semibold text-[#10B981] flex items-center gap-1 ml-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Nível {currentQuestion.difficulty}
          </span>
        </div>

        {/* Question Content Box */}
        <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-4 sm:p-6 shadow-xl relative overflow-hidden mb-5">
          {/* Top tools inside card: TEXTO BASE & Font Adjuster */}
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#00E5FF] uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Texto Base & Enunciado</span>
            </div>

            <button
              onClick={() => setFontSizeIndex((prev) => (prev + 1) % fontSizes.length)}
              className="flex items-center gap-1 text-xs text-[#94A3B8] hover:text-[#00E5FF] px-2 py-1 rounded-lg hover:bg-white/[0.04] transition-colors"
              title="Ajustar Tamanho da Fonte"
            >
              <Type className="w-3.5 h-3.5" />
              <span>Ajustar Fonte</span>
            </button>
          </div>

          {/* Context Text */}
          {currentQuestion.contextText && (
            <div
              className={`text-[#DFE2EF] leading-relaxed mb-4 font-normal ${fontSizes[fontSizeIndex]}`}
            >
              {currentQuestion.contextText}
            </div>
          )}

          {/* Prompt */}
          <div className="p-3.5 rounded-xl bg-[#0F172A]/80 border border-white/[0.05] mb-3">
            <p className={`font-semibold text-white leading-relaxed ${fontSizes[fontSizeIndex]}`}>
              {currentQuestion.prompt}
            </p>
          </div>

          {/* Formula Hint Button */}
          {currentQuestion.formulaHint && (
            <div className="mt-3">
              <button
                onClick={() => setShowFormulaDrawer((prev) => !prev)}
                className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#38BDF8] hover:text-[#00E5FF] transition-colors"
              >
                <Sigma className="w-3.5 h-3.5" />
                <span>
                  {showFormulaDrawer
                    ? 'Ocultar fórmula de apoio'
                    : `Σ Ver fórmula de ${currentQuestion.formulaTitle || 'apoio'}`}
                </span>
              </button>

              {showFormulaDrawer && (
                <div className="mt-2 p-3 rounded-xl bg-[#0F172A] border border-[#38BDF8]/30 animate-fadeIn">
                  <span className="block text-xs font-bold text-[#00E5FF] font-heading mb-1">
                    {currentQuestion.formulaTitle || 'Fórmula de Apoio'}
                  </span>
                  <p className="text-xs text-[#BAC9CC] font-mono leading-relaxed">
                    {currentQuestion.formulaHint}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Alternatives Section */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wider mb-2">
            <span className="text-[#94A3B8]">Alternativas</span>
            <span className="text-[#00E5FF] flex items-center gap-1 font-bold">
              <span>Selecione uma resposta</span>
            </span>
          </div>

          {currentQuestion.options.map((option) => {
            const isSelected = currentAnswer === option.id;

            return (
              <button
                key={option.id}
                onClick={() => handleSelectOption(option.id)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-150 flex items-start gap-3.5 group relative ${
                  isSelected
                    ? 'bg-[#1E293B] border-[#00E5FF] shadow-[0_0_16px_rgba(0,229,255,0.22)] ring-1 ring-[#00E5FF]'
                    : 'bg-[#0F172A] border-white/[0.08] hover:border-white/[0.2] hover:bg-[#181B25]'
                }`}
              >
                {/* Letter Badge */}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center font-heading font-bold text-sm shrink-0 transition-colors ${
                    isSelected
                      ? 'bg-[#00E5FF] text-[#05070B] shadow-[0_0_8px_#00E5FF]'
                      : 'bg-[#181B25] text-[#BAC9CC] border border-white/[0.08] group-hover:text-white'
                  }`}
                >
                  {option.id}
                </div>

                {/* Option Text */}
                <span
                  className={`flex-1 pt-1 leading-snug transition-colors ${
                    isSelected ? 'text-white font-medium' : 'text-[#DFE2EF]'
                  }`}
                >
                  {option.text}
                </span>

                {/* Radio Indicator */}
                <div className="pt-1.5 shrink-0">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'border-[#00E5FF] bg-[#00E5FF]/20 shadow-[0_0_8px_#00E5FF]'
                        : 'border-[#31353F]'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Quick finalize link */}
        <div className="text-center pt-2">
          <button
            onClick={() => setShowFinishConfirmModal(true)}
            className="text-xs text-[#94A3B8] hover:text-[#00E5FF] underline-offset-4 hover:underline transition-colors font-heading"
          >
            ↳ Finalizar Simulado Completo
          </button>
        </div>
      </main>

      {/* Bottom Sticky Action Rail */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 backdrop-blur-xl bg-[#05070B]/95 border-t border-white/[0.08] px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          {/* Previous Question Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed border-white/[0.05] bg-[#0F172A] text-[#94A3B8]'
                : 'border-white/[0.08] bg-[#0F172A] text-[#DFE2EF] hover:border-[#00E5FF]/40 active:scale-95'
            }`}
            title="Questão Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* OMR Map Button */}
          <button
            onClick={() => setShowMapDrawer(true)}
            className="flex-1 max-w-[160px] py-2.5 px-3 rounded-xl bg-[#0F172A] border border-white/[0.08] text-xs font-heading font-semibold text-[#BAC9CC] hover:text-white hover:border-[#38BDF8]/40 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Grid className="w-4 h-4 text-[#38BDF8]" />
            <span>Mapa ({totalQuestions})</span>
          </button>

          {/* Next or Finish Button */}
          {currentIndex < totalQuestions - 1 ? (
            <button
              onClick={handleNext}
              className="flex-1 py-3 px-5 rounded-xl bg-[#00E5FF] text-[#05070B] font-heading font-bold text-sm tracking-wide flex items-center justify-center gap-1.5 glow-cyan hover:brightness-110 active:scale-98 transition-all"
            >
              <span>Próxima</span>
              <ChevronRight className="w-4 h-4 stroke-[3]" />
            </button>
          ) : (
            <button
              onClick={() => setShowFinishConfirmModal(true)}
              className="flex-1 py-3 px-5 rounded-xl bg-[#10B981] text-[#05070B] font-heading font-bold text-sm tracking-wide flex items-center justify-center gap-1.5 glow-emerald hover:brightness-110 active:scale-98 transition-all"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Finalizar Prova</span>
            </button>
          )}
        </div>
      </footer>

      {/* OMR Map Drawer / Modal */}
      {showMapDrawer && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-md animate-fadeIn p-0 sm:p-4">
          <div className="w-full max-w-lg bg-[#0A0E17] border border-[#1E293B] rounded-t-3xl sm:rounded-2xl p-5 shadow-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
              <div className="flex items-center gap-2">
                <Grid className="w-5 h-5 text-[#00E5FF]" />
                <h3 className="font-heading font-bold text-white text-base">
                  Mapa de Questões ({totalQuestions})
                </h3>
              </div>
              <button
                onClick={() => setShowMapDrawer(false)}
                className="p-1.5 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/[0.05]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-around py-2 px-3 bg-[#0F172A] rounded-xl text-[11px] font-heading font-medium text-[#BAC9CC] mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-[#00E5FF]" />
                <span>Respondida</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded bg-[#F59E0B]" />
                <span>Marcada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded border border-white/20 bg-[#181B25]" />
                <span>Em Branco</span>
              </div>
            </div>

            {/* Grid of buttons 1 to totalQuestions */}
            <div className="grid grid-cols-5 gap-2.5">
              {exam.questions.map((q, idx) => {
                const ans = userAnswers[q.id];
                const isFlagged = flaggedQuestions.includes(q.id);
                const isCurrent = idx === currentIndex;

                let btnBg = 'bg-[#181B25] border-white/[0.08] text-[#94A3B8]';
                if (ans) {
                  btnBg = 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF] font-bold';
                }
                if (isFlagged) {
                  btnBg = 'bg-[#F59E0B]/20 border-[#F59E0B] text-[#F59E0B] font-bold';
                }
                if (isCurrent) {
                  btnBg += ' ring-2 ring-white';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => handleJumpToQuestion(idx)}
                    className={`h-11 rounded-xl border flex flex-col items-center justify-center transition-all ${btnBg}`}
                  >
                    <span className="text-xs font-heading font-bold">{idx + 1}</span>
                    <span className="text-[9px] uppercase tracking-tighter opacity-80">
                      {ans ? `[${ans}]` : '-'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Finish Confirmation Modal */}
      {showFinishConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[#00E5FF] flex items-center justify-center mx-auto mb-4 glow-cyan">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Finalizar Simulado?
            </h3>
            <p className="text-xs text-[#BAC9CC] mb-5">
              Revise o resumo das suas respostas antes de gerar seu gabarito comentado oficial.
            </p>

            <div className="grid grid-cols-3 gap-2 bg-[#0F172A] p-3.5 rounded-xl border border-white/[0.06] mb-6">
              <div>
                <span className="block text-xl font-heading font-bold text-[#00E5FF]">
                  {answeredCount}
                </span>
                <span className="text-[10px] text-[#94A3B8] uppercase">Respondidas</span>
              </div>
              <div>
                <span className="block text-xl font-heading font-bold text-[#F43F5E]">
                  {unansweredCount}
                </span>
                <span className="text-[10px] text-[#94A3B8] uppercase">Em Branco</span>
              </div>
              <div>
                <span className="block text-xl font-heading font-bold text-[#F59E0B]">
                  {flaggedQuestions.length}
                </span>
                <span className="text-[10px] text-[#94A3B8] uppercase">Marcadas</span>
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                onClick={handleFinishConfirmed}
                className="w-full py-3.5 rounded-xl bg-[#00E5FF] text-[#05070B] font-heading font-bold text-sm glow-cyan hover:brightness-110 active:scale-[0.98] transition-all"
              >
                Sim, Entregar e Ver Gabarito
              </button>

              <button
                onClick={() => setShowFinishConfirmModal(false)}
                className="w-full py-2.5 rounded-xl bg-transparent text-[#94A3B8] hover:text-white text-xs font-heading font-semibold hover:bg-white/[0.04] transition-colors"
              >
                Continuar Respondendo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exit Confirmation Modal */}
      {showExitConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-sm bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#F43F5E]/15 border border-[#F43F5E]/30 text-[#F43F5E] flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Deseja sair do simulado?
            </h3>
            <p className="text-xs text-[#BAC9CC] mb-5">
              Seu progresso será salvo automaticamente e você poderá continuar de onde parou no Início.
            </p>

            <div className="space-y-2">
              <button
                onClick={onExit}
                className="w-full py-3 rounded-xl bg-[#F43F5E] text-white font-heading font-bold text-xs hover:bg-[#e11d48] transition-colors"
              >
                Salvar e Sair
              </button>
              <button
                onClick={() => setShowExitConfirmModal(false)}
                className="w-full py-2.5 rounded-xl bg-[#0F172A] border border-white/[0.08] text-[#BAC9CC] text-xs font-heading font-semibold"
              >
                Voltar à Prova
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pause Screen Overlay */}
      {isPaused && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn">
          <div className="w-full max-w-xs bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#38BDF8] flex items-center justify-center mx-auto mb-3">
              <Pause className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-1">
              Simulado Pausado
            </h3>
            <p className="text-xs text-[#94A3B8] mb-5">
              O cronômetro está congelado. Respire fundo e retome quando estiver pronto.
            </p>
            <button
              onClick={() => setIsPaused(false)}
              className="w-full py-3 rounded-xl bg-[#00E5FF] text-[#05070B] font-heading font-bold text-sm glow-cyan hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Retomar Simulado</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
