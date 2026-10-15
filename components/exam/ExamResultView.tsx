'use client';

import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  Share2,
  Home,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  TrendingUp,
  AlertTriangle,
  Award,
  Clock,
  Sparkles,
  ChevronDown,
  ChevronUp,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Exam, ExamAttempt, Question } from '@/types/simulado';
import { ALL_EXAMS } from '@/lib/exams-registry';

interface ExamResultViewProps {
  attempt: ExamAttempt;
  onGoHome: () => void;
  onRetryErrors: (errorExam: Exam) => void;
}

export function ExamResultView({ attempt, onGoHome, onRetryErrors }: ExamResultViewProps) {
  const [filter, setFilter] = useState<'all' | 'correct' | 'wrong' | 'blank'>('all');
  const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});
  const [shareFeedback, setShareFeedback] = useState<string | null>(null);

  // Trigger celebration confetti
  useEffect(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00E5FF', '#38BDF8', '#10B981', '#ffffff'],
      });
    } catch (e) {
      // ignore
    }
  }, []);

  // Find original exam questions
  const originalExam = ALL_EXAMS.find((e) => e.id === attempt.examId) || ALL_EXAMS[0];
  const questions: Question[] = originalExam.questions || [];

  const toggleExpand = (qId: string) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const handleShare = async () => {
    const text = `🎯 Finalizei o simulado "${attempt.examTitle}" no Cimulassão!\n✨ Acertos: ${attempt.correctCount}/${attempt.totalQuestions} (${attempt.percentage}%)\n📈 TRI Estimada: ${attempt.estimatedTri}\nTreine agora no Cimulassão!`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Meu Resultado no Cimulassão',
          text,
        });
      } catch (err) {
        // User cancelled or unsupported
      }
    } else {
      await navigator.clipboard.writeText(text);
      setShareFeedback('Copiado para a área de transferência!');
      setTimeout(() => setShareFeedback(null), 3000);
    }
  };

  const handleCreateRetryExam = () => {
    const wrongQuestions = questions.filter((q) => {
      const userAns = attempt.userAnswers[q.id];
      return userAns && userAns !== q.correctOption;
    });

    if (wrongQuestions.length === 0) return;

    const retryExam: Exam = {
      id: `retry-${attempt.id}`,
      slug: `retry-${attempt.examType.toLowerCase()}`,
      title: `Caderno de Revisão - Erros (${attempt.examType})`,
      subtitle: `Treino direcionado de ${wrongQuestions.length} questões erradas`,
      examType: attempt.examType,
      questionsCount: wrongQuestions.length,
      durationMinutes: Math.max(15, wrongQuestions.length * 3),
      difficulty: 'Médio',
      category: 'vestibular',
      tags: ['Revisão de Erros', attempt.examType, `${wrongQuestions.length} Itens`],
      questions: wrongQuestions,
    };

    onRetryErrors(retryExam);
  };

  // Filtered questions
  const filteredQuestions = questions.filter((q) => {
    const ans = attempt.userAnswers[q.id];
    if (filter === 'correct') return ans === q.correctOption;
    if (filter === 'wrong') return ans && ans !== q.correctOption;
    if (filter === 'blank') return !ans;
    return true;
  });

  const avgSecondsPerQ = Math.round(attempt.timeSpentSeconds / attempt.totalQuestions);
  const avgMins = Math.floor(avgSecondsPerQ / 60);
  const avgSecs = avgSecondsPerQ % 60;
  const totalMinsSpent = Math.floor(attempt.timeSpentSeconds / 60);

  return (
    <div className="min-h-screen bg-[#05070B] text-[#DFE2EF] flex flex-col justify-between selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-xl bg-[#05070B]/90 border-b border-white/[0.06] px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <button
            onClick={onGoHome}
            className="w-9 h-9 rounded-xl bg-[#0F172A] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full border border-[#00E5FF] flex items-center justify-center text-[10px] text-[#00E5FF] font-bold">
              ✓
            </div>
            <span className="font-heading font-bold text-sm text-white tracking-wide">
              Resultado Do Simulado
            </span>
          </div>

          <div className="w-8 h-8 rounded-full ring-2 ring-[#00E5FF] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 pb-28 overflow-y-auto space-y-6">
        {/* Banner Pill & Title */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[#00E5FF] text-[11px] font-heading font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simulado Concluído com Sucesso</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold font-heading text-white">
            {attempt.examTitle}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#94A3B8] mt-1 font-medium">
            <span>📅 {attempt.date}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
              {totalMinsSpent}m gastos (Média: {avgMins}m{avgSecs}s / questão)
            </span>
          </div>
        </div>

        {/* Circular Gauge TRI Card */}
        <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#00E5FF]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Glowing Circular Gauge */}
          <div className="relative w-36 h-36 rounded-full border-4 border-[#1E293B] flex items-center justify-center mb-4">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-[#1E293B]"
                strokeWidth="7"
                fill="transparent"
              />
              <circle
                cx="50"
                cy="50"
                r="44"
                className="stroke-[#00E5FF] transition-all duration-1000 ease-out"
                strokeWidth="7"
                strokeDasharray={276}
                strokeDashoffset={276 - (276 * attempt.percentage) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[10px] font-heading font-semibold text-[#94A3B8] uppercase tracking-wider">
                TRI Estimada
              </span>
              <span className="text-2xl font-heading font-bold text-white tracking-tight">
                {attempt.estimatedTri}
              </span>
              <span className="text-[11px] font-heading font-bold text-[#00E5FF]">
                {attempt.percentage >= 70 ? 'Excelente' : attempt.percentage >= 50 ? 'Bom' : 'Aprimorar'}
              </span>
            </div>
          </div>

          {/* Quick Dual Stats (Aproveitamento & Ranking) */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="bg-[#0F172A] border border-white/[0.06] rounded-xl p-3.5 flex items-center justify-between text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF]">
                  🎯
                </div>
                <div>
                  <span className="block text-[11px] text-[#94A3B8] font-heading">
                    Aproveitamento Total
                  </span>
                  <span className="text-sm font-bold text-white font-heading">
                    {attempt.correctCount} / {attempt.totalQuestions} questões
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="block text-base font-bold text-[#00E5FF] font-heading">
                  {attempt.percentage}%
                </span>
                <span className="text-[10px] text-[#10B981] font-semibold">+4.2% vs. ant.</span>
              </div>
            </div>

            <div className="bg-[#0F172A] border border-white/[0.06] rounded-xl p-3.5 flex items-center justify-between text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8]">
                  🏆
                </div>
                <div>
                  <span className="block text-[11px] text-[#94A3B8] font-heading">
                    Ranking Simulado Geral
                  </span>
                  <span className="text-sm font-bold text-white font-heading">
                    #342 / 12.450
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#38BDF8]/15 text-[#38BDF8] text-xs font-heading font-bold">
                Top 3%
              </span>
            </div>
          </div>
        </div>

        {/* Desempenho por Área */}
        <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00E5FF]" />
              <h3 className="font-heading font-bold text-base text-white">
                Desempenho por Área
              </h3>
            </div>
            <span className="text-[11px] text-[#94A3B8] font-heading font-medium">
              Meta: 70%+
            </span>
          </div>

          <div className="space-y-4">
            {attempt.areaPerformance.map((area) => (
              <div key={area.area} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-heading font-semibold text-[#DFE2EF]">
                    {area.area}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[#94A3B8]">
                      {area.correct}/{area.total} acertos
                    </span>
                    <span className="font-heading font-bold text-[#00E5FF]">
                      {area.percentage}%
                    </span>
                  </div>
                </div>

                <div className="w-full bg-[#181B25] h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#38BDF8] to-[#00E5FF] rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(0,229,255,0.4)]"
                    style={{ width: `${area.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnóstico da IA Cimulassão */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#00E5FF]" />
            <h3 className="font-heading font-bold text-base text-white">
              Diagnóstico Pedagógico Cimulassão
            </h3>
          </div>

          {/* Strength Card */}
          <div className="bg-[#0A0E17] border border-[#10B981]/30 rounded-2xl p-4 flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-heading font-bold text-[#10B981] uppercase tracking-wider block mb-0.5">
                Ponto Forte Detectado
              </span>
              <p className="text-xs text-[#DFE2EF] leading-relaxed">
                Excelente coerência pedagógica na matriz de habilidades. Domínio marcante nas questões conceituais e interpretação contextualizada da prova.
              </p>
            </div>
          </div>

          {/* Alert Card */}
          <div className="bg-[#0A0E17] border border-[#F43F5E]/30 rounded-2xl p-4 flex items-start gap-3.5">
            <div className="w-8 h-8 rounded-xl bg-[#F43F5E]/15 border border-[#F43F5E]/30 flex items-center justify-center text-[#F43F5E] shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-heading font-bold text-[#F43F5E] uppercase tracking-wider block mb-0.5">
                Atenção Necessária
              </span>
              <p className="text-xs text-[#DFE2EF] leading-relaxed">
                {attempt.wrongCount > 0
                  ? `Foram identificados ${attempt.wrongCount} deslizes táticos. Recomendamos revisar o caderno de resoluções comentadas abaixo para consolidar as lacunas.`
                  : 'Desempenho impecável! Mantenha a consistência de resolução para garantir a nota de corte máxima.'}
              </p>
            </div>
          </div>
        </div>

        {/* Gabarito Detalhado (OMR Digital) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#00E5FF]" />
              <h3 className="font-heading font-bold text-base text-white">
                Gabarito Detalhado
              </h3>
            </div>
            <span className="text-xs text-[#94A3B8] font-heading font-semibold uppercase tracking-wider">
              OMR Digital
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold border transition-colors shrink-0 ${
                filter === 'all'
                  ? 'bg-[#00E5FF] text-[#05070B] border-[#00E5FF]'
                  : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8]'
              }`}
            >
              Todas ({questions.length})
            </button>
            <button
              onClick={() => setFilter('correct')}
              className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold border transition-colors shrink-0 ${
                filter === 'correct'
                  ? 'bg-[#10B981] text-[#05070B] border-[#10B981]'
                  : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8]'
              }`}
            >
              Acertos ({attempt.correctCount})
            </button>
            <button
              onClick={() => setFilter('wrong')}
              className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold border transition-colors shrink-0 ${
                filter === 'wrong'
                  ? 'bg-[#F43F5E] text-white border-[#F43F5E]'
                  : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8]'
              }`}
            >
              Erros ({attempt.wrongCount})
            </button>
            <button
              onClick={() => setFilter('blank')}
              className={`px-3 py-1.5 rounded-xl text-xs font-heading font-bold border transition-colors shrink-0 ${
                filter === 'blank'
                  ? 'bg-[#31353F] text-white border-[#31353F]'
                  : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8]'
              }`}
            >
              Em Branco ({attempt.blankCount})
            </button>
          </div>

          {/* Questions Solution List */}
          <div className="space-y-3">
            {filteredQuestions.map((q, index) => {
              const userAns = attempt.userAnswers[q.id];
              const isCorrect = userAns === q.correctOption;
              const isBlank = !userAns;
              const isExpanded = !!expandedQuestions[q.id];

              // Find question original index in exam
              const originalIndex = questions.findIndex((item) => item.id === q.id) + 1;

              return (
                <div
                  key={q.id}
                  className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-4 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {/* Number Badge */}
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-heading font-bold text-xs shrink-0 ${
                          isCorrect
                            ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40'
                            : isBlank
                            ? 'bg-[#31353F] text-[#94A3B8]'
                            : 'bg-[#F43F5E]/20 text-[#F43F5E] border border-[#F43F5E]/40'
                        }`}
                      >
                        {originalIndex.toString().padStart(2, '0')}
                      </div>

                      {/* Info & Answers */}
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-heading font-semibold text-white">
                            {q.subject}
                          </span>
                          <span className="text-[10px] text-[#94A3B8]">•</span>
                          <span className="text-[11px] text-[#94A3B8]">{q.subtopic}</span>
                        </div>

                        <div className="text-xs text-[#BAC9CC] font-mono">
                          Sua resposta:{' '}
                          <span
                            className={`font-bold ${
                              isCorrect
                                ? 'text-[#10B981]'
                                : isBlank
                                ? 'text-[#94A3B8]'
                                : 'text-[#F43F5E]'
                            }`}
                          >
                            {userAns || 'Sem resposta'}
                          </span>{' '}
                          • Gabarito:{' '}
                          <span className="font-bold text-[#00E5FF]">{q.correctOption}</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Pill */}
                    <div className="shrink-0">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-md border border-[#10B981]/20">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Correta
                        </span>
                      ) : isBlank ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-[#94A3B8] bg-[#31353F]/40 px-2 py-0.5 rounded-md">
                          Em Branco
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-heading font-bold text-[#F43F5E] bg-[#F43F5E]/10 px-2 py-0.5 rounded-md border border-[#F43F5E]/20">
                          <XCircle className="w-3.5 h-3.5" />
                          Incorreta
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Toggle Explanation Button */}
                  <div className="mt-3 pt-2.5 border-t border-white/[0.05]">
                    <button
                      onClick={() => toggleExpand(q.id)}
                      className="w-full py-1.5 px-3 rounded-lg bg-[#0F172A] border border-white/[0.06] text-xs font-heading font-semibold text-[#38BDF8] hover:text-[#00E5FF] hover:border-[#00E5FF]/30 flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        Ver Resolução Comentada em Vídeo e Texto
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {/* Expanded Explanation Drawer */}
                    {isExpanded && (
                      <div className="mt-3 p-4 rounded-xl bg-[#0F172A] border border-[#38BDF8]/20 space-y-3 animate-fadeIn text-xs leading-relaxed">
                        {q.contextText && (
                          <div className="p-3 rounded-lg bg-[#0A0E17] border border-white/[0.04] text-[#BAC9CC]">
                            <span className="text-[10px] font-heading font-bold text-[#94A3B8] uppercase block mb-1">
                              Enunciado
                            </span>
                            {q.contextText}
                            <p className="font-semibold text-white mt-1.5">{q.prompt}</p>
                          </div>
                        )}

                        <div className="space-y-1">
                          <span className="text-xs font-heading font-bold text-[#00E5FF] uppercase tracking-wider block">
                            💡 Resolução Comentada pelo Professor
                          </span>
                          <div className="text-[#DFE2EF] whitespace-pre-line leading-relaxed">
                            {q.explanation}
                          </div>
                        </div>

                        {q.formulaHint && (
                          <div className="p-2.5 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 text-[11px] text-[#00E5FF] font-mono">
                            {q.formulaHint}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Bottom Floating Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-30 backdrop-blur-xl bg-[#05070B]/95 border-t border-white/[0.08] px-4 py-3">
        <div className="max-w-3xl mx-auto space-y-2.5">
          {shareFeedback && (
            <div className="text-center text-xs font-heading font-semibold text-[#10B981] animate-fadeIn">
              {shareFeedback}
            </div>
          )}

          {attempt.wrongCount > 0 && (
            <button
              onClick={handleCreateRetryExam}
              className="w-full py-3.5 rounded-xl bg-[#00E5FF] text-[#05070B] font-heading font-bold text-sm tracking-wide flex items-center justify-center gap-2 glow-cyan hover:brightness-110 active:scale-[0.99] transition-all"
            >
              <RotateCcw className="w-4 h-4 stroke-[2.5]" />
              <span>Refazer Questões Erradas ({attempt.wrongCount})</span>
            </button>
          )}

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={handleShare}
              className="py-2.5 px-4 rounded-xl bg-[#0F172A] border border-white/[0.08] text-xs font-heading font-semibold text-[#DFE2EF] hover:border-[#38BDF8]/40 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Share2 className="w-4 h-4 text-[#38BDF8]" />
              <span>Compartilhar</span>
            </button>

            <button
              onClick={onGoHome}
              className="py-2.5 px-4 rounded-xl bg-[#0F172A] border border-white/[0.08] text-xs font-heading font-semibold text-[#DFE2EF] hover:border-[#00E5FF]/40 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
            >
              <Home className="w-4 h-4 text-[#00E5FF]" />
              <span>Voltar ao Início</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
