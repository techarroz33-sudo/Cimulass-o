'use client';

import React, { useState } from 'react';
import {
  User,
  Flame,
  Award,
  BookMarked,
  Target,
  Edit2,
  Check,
  Zap,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { UserStats, Exam } from '@/types/simulado';
import { saveUserStats, getErrorNotebook } from '@/lib/storage';
import { ALL_EXAMS } from '@/lib/exams-registry';

interface PerfilTabProps {
  userStats: UserStats;
  onUpdateStats: (newStats: UserStats) => void;
  onStartExam: (exam: Exam) => void;
}

export function PerfilTab({ userStats, onUpdateStats, onStartExam }: PerfilTabProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(userStats.userName);
  const [dailyGoalInput, setDailyGoalInput] = useState(userStats.dailyGoalTarget);

  const errorIds = getErrorNotebook();

  const handleSaveProfile = () => {
    const updated: UserStats = {
      ...userStats,
      userName: nameInput.trim() || 'Estudante',
      dailyGoalTarget: Number(dailyGoalInput) || 25,
    };
    saveUserStats(updated);
    onUpdateStats(updated);
    setIsEditingName(false);
  };

  const handleStartCadernoErros = () => {
    if (errorIds.length === 0) return;
    const allQs = ALL_EXAMS.flatMap((e) => e.questions);
    const errorQuestions = allQs.filter((q) => errorIds.includes(q.id));

    if (errorQuestions.length === 0) return;

    const errorExam: Exam = {
      id: `caderno-erros-${errorQuestions.length}`,
      slug: 'caderno-erros',
      title: 'Caderno de Erros Personalizado',
      subtitle: `Revisão direcionada de ${errorQuestions.length} questões com erros anteriores`,
      examType: 'ENEM',
      questionsCount: errorQuestions.length,
      durationMinutes: Math.max(15, errorQuestions.length * 3),
      difficulty: 'Médio',
      category: 'vestibular',
      tags: ['Caderno de Erros', 'Revisão', `${errorQuestions.length} Itens`],
      questions: errorQuestions,
    };

    onStartExam(errorExam);
  };

  const badges = [
    { title: 'Estudante Focado', desc: '12 dias consecutivos de simulados', icon: '🔥', unlocked: true },
    { title: 'Mestre ENEM', desc: 'Nota TRI acima de 700 pontos', icon: '🎯', unlocked: true },
    { title: 'Olimpíada de Ouro', desc: 'Completou simulado OBA ou OBMEP', icon: '🥇', unlocked: true },
    { title: 'Maratonista', desc: 'Mais de 100 questões resolvidas', icon: '⚡', unlocked: userStats.totalQuestionsAnswered >= 100 },
  ];

  return (
    <div className="space-y-6 pb-28">
      {/* Profile Card Header */}
      <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          {/* Avatar with cyan neon ring */}
          <div className="relative w-20 h-20 rounded-full ring-4 ring-[#00E5FF] ring-offset-4 ring-offset-[#0A0E17] overflow-hidden shrink-0 shadow-[0_0_20px_rgba(0,229,255,0.35)]">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
              alt="Avatar do Usuário"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Info & Edit */}
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="bg-[#0F172A] border border-[#00E5FF] rounded-lg px-3 py-1 text-sm text-white font-heading font-bold"
                  />
                  <button
                    onClick={handleSaveProfile}
                    className="p-1.5 rounded-lg bg-[#00E5FF] text-[#05070B]"
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold font-heading text-white">
                    {userStats.userName}
                  </h1>
                  <button
                    onClick={() => setIsEditingName(true)}
                    className="text-[#94A3B8] hover:text-[#00E5FF] p-1"
                    title="Editar Nome"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              <span className="px-2 py-0.5 rounded-md bg-[#00E5FF]/15 text-[#00E5FF] text-[10px] font-heading font-bold uppercase border border-[#00E5FF]/30">
                PRO Aluno
              </span>
            </div>

            <p className="text-xs text-[#BAC9CC]">
              Vestibulando(a) • Foco: Medicina & Engenharias
            </p>

            <div className="flex items-center justify-center sm:justify-start gap-3 pt-2 text-xs">
              <span className="flex items-center gap-1 text-[#00E5FF] font-heading font-bold">
                <Flame className="w-4 h-4 fill-[#00E5FF]/20" />
                {userStats.streakDays} Dias de Ofensiva
              </span>
              <span className="text-[#94A3B8]">•</span>
              <span className="text-[#10B981] font-heading font-semibold">
                Nível 7 Aspirante
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Goal Configurator */}
      <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#00E5FF]" />
            <h3 className="font-heading font-bold text-sm text-white">
              Meta Diária de Questões
            </h3>
          </div>
          <span className="text-xs font-heading font-bold text-[#00E5FF]">
            {userStats.dailyGoalCompleted} / {userStats.dailyGoalTarget} resolvidas
          </span>
        </div>

        <p className="text-xs text-[#94A3B8] mb-4">
          Defina quantas questões você pretende resolver todos os dias para manter o ritmo e a aprovação no vestibular.
        </p>

        <div className="grid grid-cols-4 gap-2">
          {[15, 20, 25, 30].map((goal) => (
            <button
              key={goal}
              onClick={() => {
                const updated = { ...userStats, dailyGoalTarget: goal };
                saveUserStats(updated);
                onUpdateStats(updated);
              }}
              className={`py-2 rounded-xl text-xs font-heading font-bold border transition-all ${
                userStats.dailyGoalTarget === goal
                  ? 'bg-[#00E5FF] text-[#05070B] border-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.3)]'
                  : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8] hover:border-white/[0.2]'
              }`}
            >
              {goal} / dia
            </button>
          ))}
        </div>
      </div>

      {/* Caderno de Erros Dedicado */}
      <div className="bg-[#0A0E17] border border-[#F43F5E]/30 rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-[#F43F5E]">
            <BookMarked className="w-5 h-5" />
            <h3 className="font-heading font-bold text-sm text-white">
              Caderno de Erros Ativo
            </h3>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#F43F5E]/15 text-[#F43F5E] text-[10px] font-heading font-bold border border-[#F43F5E]/30">
            {errorIds.length} Questões Registradas
          </span>
        </div>

        <p className="text-xs text-[#BAC9CC] leading-relaxed mb-4">
          Questões que você errou nos simulados são salvas automaticamente aqui. Refaça-as para fechar todas as lacunas de conteúdo.
        </p>

        <button
          onClick={handleStartCadernoErros}
          disabled={errorIds.length === 0}
          className={`w-full py-3 rounded-xl font-heading font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-all ${
            errorIds.length > 0
              ? 'bg-[#F43F5E] text-white hover:bg-[#e11d48] shadow-[0_0_14px_rgba(244,63,94,0.3)]'
              : 'bg-[#181B25] text-[#94A3B8] cursor-not-allowed border border-white/[0.05]'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>
            {errorIds.length > 0
              ? `Treinar Caderno de Erros (${errorIds.length} questões)`
              : 'Nenhum erro registrado ainda! Faça simulados.'}
          </span>
        </button>
      </div>

      {/* Conquistas e Medalhas Gamificadas */}
      <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-5 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-[#38BDF8]" />
          <h3 className="font-heading font-bold text-sm text-white">
            Medalhas e Conquistas
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {badges.map((b) => (
            <div
              key={b.title}
              className={`p-3.5 rounded-xl border flex items-start gap-3 transition-colors ${
                b.unlocked
                  ? 'bg-[#0F172A] border-white/[0.08]'
                  : 'bg-[#0A0E17] border-white/[0.04] opacity-50'
              }`}
            >
              <span className="text-2xl shrink-0">{b.icon}</span>
              <div>
                <h4 className="text-xs font-heading font-bold text-white mb-0.5">
                  {b.title}
                </h4>
                <p className="text-[10px] text-[#94A3B8] leading-tight">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
