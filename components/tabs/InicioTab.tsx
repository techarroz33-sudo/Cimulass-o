'use client';

import React, { useState } from 'react';
import {
  Play,
  Zap,
  BookOpen,
  FolderArchive,
  BookMarked,
  RotateCcw,
  TrendingUp,
  ArrowRight,
  Flame,
  CheckCircle2,
  Clock,
  Award,
} from 'lucide-react';
import { Exam, ActiveExamSession, UserStats } from '@/types/simulado';
import { ALL_EXAMS } from '@/lib/exams-registry';

interface InicioTabProps {
  userStats: UserStats;
  activeSession: ActiveExamSession | null;
  errorNotebookCount: number;
  onStartExam: (exam: Exam) => void;
  onResumeSession: () => void;
  onGoToSimulados: () => void;
  onOpenCadernoErros: () => void;
}

export function InicioTab({
  userStats,
  activeSession,
  errorNotebookCount,
  onStartExam,
  onResumeSession,
  onGoToSimulados,
  onOpenCadernoErros,
}: InicioTabProps) {
  const [selectedCategory, setSelectedCategory] = useState<'todos' | 'enem' | 'concursos' | 'olimpiadas'>('todos');

  // Featured Official Exam
  const featuredExam = ALL_EXAMS[0]; // ENEM 2024

  // Daily goal calculation
  const dailyTarget = userStats.dailyGoalTarget || 25;
  const dailyDone = userStats.dailyGoalCompleted || 18;
  const dailyPercent = Math.min(100, Math.round((dailyDone / dailyTarget) * 100));
  const dailyRemaining = Math.max(0, dailyTarget - dailyDone);

  // Quick Express Exam (15 questions from mix)
  const handleStartExpress = () => {
    const allQs = ALL_EXAMS.flatMap((e) => e.questions);
    const shuffled = [...allQs].sort(() => 0.5 - Math.random()).slice(0, 15);
    const expressExam: Exam = {
      id: 'express-tatico',
      slug: 'express',
      title: 'Simulado Express Tático',
      subtitle: '15 questões selecionadas em modo contra-o-relógio',
      examType: 'ENEM',
      questionsCount: 15,
      durationMinutes: 20,
      difficulty: 'Médio',
      category: 'vestibular',
      tags: ['Express', 'Contra o Relógio', '15 Itens'],
      questions: shuffled,
    };
    onStartExam(expressExam);
  };

  return (
    <div className="space-y-6 pb-24">
      {/* 1. Plano Reta Final Header Card */}
      <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-5 shadow-xl relative overflow-hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-1.5 text-[10px] font-heading font-bold text-[#00E5FF] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
              <span>Plano Reta Final</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Olá, {userStats.userName}! 👋
            </h1>

            <p className="text-xs text-[#BAC9CC] leading-relaxed">
              Foco total na aprovação. Mantenha o ritmo!
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs">
              <span className="flex items-center gap-1 text-[#10B981] font-heading font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Meta Diária: {dailyPercent}% completa
              </span>
              <span className="text-[#94A3B8]">•</span>
              <span className="text-[#38BDF8] font-medium">
                {dailyRemaining > 0 ? `Faltam ${dailyRemaining} questões` : 'Meta batida hoje! 🎉'}
              </span>
            </div>
          </div>

          {/* Radial Ring Gauge */}
          <div className="relative w-20 h-20 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-[#1E293B]"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-[#00E5FF] shadow-[0_0_8px_#00E5FF]"
                strokeDasharray={`${dailyPercent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-xs font-heading font-bold text-white">
                {dailyDone}
              </span>
              <span className="text-[9px] text-[#94A3B8]">
                /{dailyTarget}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          { id: 'todos', label: 'Todos' },
          { id: 'enem', label: 'ENEM & Vestibulares' },
          { id: 'concursos', label: 'Concursos Públicos' },
          { id: 'olimpiadas', label: 'Olimpíadas Científicas' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedCategory(tab.id as any)}
            className={`py-2 px-3.5 rounded-full text-xs font-heading font-semibold border transition-all shrink-0 ${
              selectedCategory === tab.id
                ? 'bg-[#00E5FF] text-[#05070B] border-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.25)]'
                : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8] hover:border-white/[0.2] hover:text-[#DFE2EF]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 3. Featured Hero Exam Card */}
      <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-[#00E5FF]/30 rounded-2xl p-5 shadow-2xl overflow-hidden glow-cyan-sm">
        {/* Ambient background glow */}
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between mb-2.5">
          <span className="px-2.5 py-0.5 rounded-full bg-[#00E5FF]/20 text-[#00E5FF] text-[10px] font-heading font-bold uppercase tracking-wider border border-[#00E5FF]/30">
            ★ Mais Procurado
          </span>
          <span className="text-[10px] font-heading font-semibold text-[#38BDF8] tracking-wider uppercase">
            Oficial da Semana
          </span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold font-heading text-white mb-1.5">
          {featuredExam.title}
        </h2>
        <p className="text-xs text-[#BAC9CC] leading-relaxed mb-4">
          {featuredExam.subtitle}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#DFE2EF] font-heading font-semibold mb-5">
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05070B]/60 border border-white/[0.08]">
            <BookOpen className="w-3.5 h-3.5 text-[#00E5FF]" />
            {featuredExam.questionsCount} questões
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05070B]/60 border border-white/[0.08]">
            <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
            {featuredExam.durationMinutes} min
          </span>
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#05070B]/60 border border-white/[0.08]">
            <Award className="w-3.5 h-3.5 text-[#10B981]" />
            TRI Real
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => onStartExam(featuredExam)}
          className="w-full py-3.5 rounded-xl bg-[#00E5FF] text-[#05070B] font-heading font-bold text-sm tracking-wide flex items-center justify-center gap-2 glow-cyan hover:brightness-110 active:scale-[0.99] transition-all"
        >
          <span>Iniciar Simulado Agora</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* 4. Continuar de onde parou (Active Session Resume) */}
      {activeSession ? (
        <div className="bg-[#0A0E17] border border-[#38BDF8]/40 rounded-2xl p-4 shadow-xl">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs font-heading font-bold text-[#38BDF8]">
              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
              <span>Continuar de onde parou</span>
            </div>
            <button
              onClick={onResumeSession}
              className="px-3 py-1 rounded-lg bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-xs font-heading font-bold text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#05070B] transition-all"
            >
              Retomar ▶
            </button>
          </div>

          <p className="text-sm font-heading font-bold text-white mb-2">
            {activeSession.customExam?.title || 'Simulado em Andamento'}
          </p>

          <div className="flex items-center justify-between text-xs text-[#94A3B8] mb-1.5">
            <span>
              {Object.keys(activeSession.userAnswers).length} respondidas (Questão {activeSession.currentIndex + 1})
            </span>
            <span className="font-bold text-[#00E5FF]">
              {Math.round(
                (Object.keys(activeSession.userAnswers).length /
                  (activeSession.customExam?.questionsCount || 20)) *
                  100
              )}
              %
            </span>
          </div>

          <div className="w-full bg-[#181B25] h-1.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00E5FF] rounded-full transition-all"
              style={{
                width: `${Math.round(
                  (Object.keys(activeSession.userAnswers).length /
                    (activeSession.customExam?.questionsCount || 20)) *
                    100
                )}%`,
              }}
            />
          </div>
        </div>
      ) : (
        <div className="bg-[#0A0E17] border border-white/[0.08] rounded-2xl p-4 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0F172A] border border-white/[0.08] flex items-center justify-center text-[#00E5FF]">
              🏛️
            </div>
            <div>
              <span className="text-[10px] text-[#94A3B8] font-heading font-semibold uppercase">
                Próximo da Lista
              </span>
              <p className="text-xs font-heading font-bold text-white">
                FUVEST 2024 - 1ª Fase Geral (USP)
              </p>
            </div>
          </div>
          <button
            onClick={() => onStartExam(ALL_EXAMS[1])}
            className="px-3 py-1.5 rounded-xl bg-[#0F172A] border border-white/[0.08] text-xs font-heading font-bold text-[#DFE2EF] hover:border-[#00E5FF]/40 hover:text-[#00E5FF] transition-colors"
          >
            Iniciar
          </button>
        </div>
      )}

      {/* 5. Acesso Rápido Grid */}
      <div className="space-y-3">
        <h3 className="text-xs font-heading font-bold text-[#BAC9CC] uppercase tracking-wider">
          Acesso Rápido
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {/* Card 1: Banco de Questões */}
          <button
            onClick={onGoToSimulados}
            className="p-4 rounded-2xl bg-[#0A0E17] border border-white/[0.08] hover:border-[#00E5FF]/40 text-left transition-all hover:bg-[#0F172A] group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center text-[#00E5FF] mb-2.5 group-hover:scale-105 transition-transform">
              <BookOpen className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-heading font-bold text-white mb-0.5">
              Banco de Questões
            </h4>
            <p className="text-[11px] text-[#94A3B8] leading-tight">
              +180 mil itens com gabarito comentado
            </p>
          </button>

          {/* Card 2: Simulados Express */}
          <button
            onClick={handleStartExpress}
            className="p-4 rounded-2xl bg-[#0A0E17] border border-white/[0.08] hover:border-[#38BDF8]/40 text-left transition-all hover:bg-[#0F172A] group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] mb-2.5 group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-heading font-bold text-white mb-0.5">
              Simulados Express
            </h4>
            <p className="text-[11px] text-[#94A3B8] leading-tight">
              15 questões táticas em 20 minutos
            </p>
          </button>

          {/* Card 3: Provas Anteriores */}
          <button
            onClick={onGoToSimulados}
            className="p-4 rounded-2xl bg-[#0A0E17] border border-white/[0.08] hover:border-white/[0.2] text-left transition-all hover:bg-[#0F172A] group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#181B25] border border-white/[0.08] flex items-center justify-center text-[#BAC9CC] mb-2.5 group-hover:scale-105 transition-transform">
              <FolderArchive className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-heading font-bold text-white mb-0.5">
              Provas Anteriores
            </h4>
            <p className="text-[11px] text-[#94A3B8] leading-tight">
              ENEM, FUVEST, UNICAMP e UNESP
            </p>
          </button>

          {/* Card 4: Caderno de Erros */}
          <button
            onClick={onOpenCadernoErros}
            className="p-4 rounded-2xl bg-[#0A0E17] border border-white/[0.08] hover:border-[#F43F5E]/40 text-left transition-all hover:bg-[#0F172A] group relative"
          >
            {errorNotebookCount > 0 && (
              <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#F43F5E]/20 text-[#F43F5E] text-[10px] font-heading font-bold border border-[#F43F5E]/30">
                {errorNotebookCount} pendentes
              </span>
            )}
            <div className="w-9 h-9 rounded-xl bg-[#F43F5E]/10 border border-[#F43F5E]/20 flex items-center justify-center text-[#F43F5E] mb-2.5 group-hover:scale-105 transition-transform">
              <BookMarked className="w-4 h-4" />
            </div>
            <h4 className="text-sm font-heading font-bold text-white mb-0.5">
              Caderno de Erros
            </h4>
            <p className="text-[11px] text-[#94A3B8] leading-tight">
              Revise e domine onde você errou
            </p>
          </button>
        </div>
      </div>

      {/* 6. Desempenho Semanal Mini-Chart */}
      <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-4 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-[10px] font-heading font-semibold text-[#94A3B8] uppercase tracking-wider block">
              Desempenho Semanal
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-2xl font-bold font-heading text-white">78.4%</span>
              <span className="text-xs font-semibold text-[#10B981] flex items-center">
                ↗ +5.2%
              </span>
            </div>
          </div>
          <span className="text-[11px] font-heading font-medium text-[#BAC9CC] px-2.5 py-1 rounded-lg bg-[#0F172A] border border-white/[0.06]">
            Últimos 7 dias
          </span>
        </div>

        {/* 7 Days Vertical Bars */}
        <div className="grid grid-cols-7 gap-2 pt-2 items-end h-24">
          {[
            { day: 'Seg', height: 40, active: false },
            { day: 'Ter', height: 55, active: false },
            { day: 'Qua', height: 85, active: true },
            { day: 'Qui', height: 45, active: false },
            { day: 'Sex', height: 75, active: true },
            { day: 'Sáb', height: 90, active: true },
            { day: 'Hoje', height: 95, active: true },
          ].map((bar, i) => (
            <div key={bar.day} className="flex flex-col items-center gap-1.5 h-full justify-end">
              <div
                className={`w-full rounded-md transition-all duration-300 ${
                  bar.active
                    ? 'bg-[#00E5FF] shadow-[0_0_8px_rgba(0,229,255,0.4)]'
                    : 'bg-[#181B25]'
                }`}
                style={{ height: `${bar.height}%` }}
              />
              <span
                className={`text-[10px] font-heading font-medium ${
                  bar.day === 'Hoje' ? 'text-[#00E5FF] font-bold' : 'text-[#94A3B8]'
                }`}
              >
                {bar.day}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
