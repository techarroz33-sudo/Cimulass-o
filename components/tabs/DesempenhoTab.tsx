'use client';

import React, { useState } from 'react';
import {
  TrendingUp,
  BarChart3,
  PieChart,
  History,
  Trash2,
  Clock,
  Award,
  AlertCircle,
  Eye,
  CheckCircle2,
  RotateCcw,
} from 'lucide-react';
import { ExamAttempt, UserStats } from '@/types/simulado';
import { AccuracyDonutChart } from '@/components/charts/AccuracyDonutChart';
import { ExamsBarChart } from '@/components/charts/ExamsBarChart';
import { resetAllStorage } from '@/lib/storage';

interface DesempenhoTabProps {
  attempts: ExamAttempt[];
  userStats: UserStats;
  onReviewAttempt: (attempt: ExamAttempt) => void;
  onStatsReset: () => void;
}

export function DesempenhoTab({
  attempts,
  userStats,
  onReviewAttempt,
  onStatsReset,
}: DesempenhoTabProps) {
  const [showResetConfirmModal, setShowResetConfirmModal] = useState(false);

  // Calculate totals
  const totalCorrect = attempts.reduce((acc, cur) => acc + cur.correctCount, 0);
  const totalWrong = attempts.reduce((acc, cur) => acc + cur.wrongCount, 0);
  const totalBlank = attempts.reduce((acc, cur) => acc + cur.blankCount, 0);
  const totalQuestions = totalCorrect + totalWrong + totalBlank;

  const globalAccuracy =
    totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  // Breakdown by Exam Type for Bar Chart
  const examMap: Record<string, { total: number; correct: number; count: number }> = {};
  attempts.forEach((att) => {
    const key = att.examType;
    if (!examMap[key]) {
      examMap[key] = { total: 0, correct: 0, count: 0 };
    }
    examMap[key].total += att.totalQuestions;
    examMap[key].correct += att.correctCount;
    examMap[key].count += 1;
  });

  const barChartItems = Object.entries(examMap).map(([name, data]) => ({
    name,
    percentage: Math.round((data.correct / data.total) * 100),
    attemptsCount: data.count,
  }));

  // If no attempts, provide sample baseline so the charts look alive if needed, or let user test
  const displayCorrect = totalQuestions > 0 ? totalCorrect : 42;
  const displayWrong = totalQuestions > 0 ? totalWrong : 12;
  const displayBlank = totalQuestions > 0 ? totalBlank : 2;

  const handleConfirmReset = () => {
    resetAllStorage();
    setShowResetConfirmModal(false);
    onStatsReset();
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Page Title & Reset Action */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold font-heading text-white">
            Desempenho e Estatísticas
          </h1>
          <p className="text-xs text-[#94A3B8]">
            Acompanhe seu avanço tático e histórico de simulados
          </p>
        </div>

        <button
          onClick={() => setShowResetConfirmModal(true)}
          className="px-3 py-1.5 rounded-xl bg-[#F43F5E]/10 border border-[#F43F5E]/20 text-xs font-heading font-semibold text-[#F43F5E] hover:bg-[#F43F5E]/20 transition-colors flex items-center gap-1.5"
          title="Zerar Estatísticas"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Zerar Dados</span>
        </button>
      </div>

      {/* Metric Highlights 3-Card Row */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-4 text-center">
          <span className="block text-[10px] text-[#94A3B8] font-heading uppercase tracking-wider mb-1">
            Simulados
          </span>
          <span className="text-2xl font-bold font-heading text-white">
            {attempts.length}
          </span>
          <span className="text-[10px] text-[#38BDF8] font-semibold block mt-0.5">
            Concluídos
          </span>
        </div>

        <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-4 text-center">
          <span className="block text-[10px] text-[#94A3B8] font-heading uppercase tracking-wider mb-1">
            Acerto Geral
          </span>
          <span className="text-2xl font-bold font-heading text-[#00E5FF]">
            {attempts.length > 0 ? `${globalAccuracy}%` : '78.8%'}
          </span>
          <span className="text-[10px] text-[#10B981] font-semibold block mt-0.5">
            +5.2% esta sem.
          </span>
        </div>

        <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-4 text-center">
          <span className="block text-[10px] text-[#94A3B8] font-heading uppercase tracking-wider mb-1">
            Média TRI
          </span>
          <span className="text-2xl font-bold font-heading text-white">
            {attempts.length > 0
              ? Math.round(attempts.reduce((a, b) => a + b.estimatedTri, 0) / attempts.length)
              : '742.5'}
          </span>
          <span className="text-[10px] text-[#00E5FF] font-semibold block mt-0.5">
            Faixa Medicina
          </span>
        </div>
      </div>

      {/* Chart 1: Donut Chart (Taxa Global de Acerto vs Erro) */}
      <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-[#00E5FF]" />
            <h3 className="font-heading font-bold text-sm text-white">
              Taxa Global de Acertos vs. Erros
            </h3>
          </div>
          <span className="text-[11px] font-heading font-semibold text-[#94A3B8]">
            Porcentagem Geral
          </span>
        </div>

        <AccuracyDonutChart
          correct={displayCorrect}
          wrong={displayWrong}
          blank={displayBlank}
        />
      </div>

      {/* Chart 2: Bar Chart (Percentual de Acertos por Prova Específica) */}
      <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-[#38BDF8]" />
            <h3 className="font-heading font-bold text-sm text-white">
              Comparativo de Aproveitamento por Prova
            </h3>
          </div>
          <span className="text-[11px] font-heading font-semibold text-[#94A3B8]">
            % por Exame
          </span>
        </div>

        <ExamsBarChart
          dataItems={
            barChartItems.length > 0
              ? barChartItems
              : [
                  { name: 'ENEM', percentage: 78, attemptsCount: 3 },
                  { name: 'FUVEST', percentage: 70, attemptsCount: 2 },
                  { name: 'UNICAMP', percentage: 82, attemptsCount: 2 },
                  { name: 'UNESP', percentage: 85, attemptsCount: 1 },
                  { name: 'OBMEP', percentage: 65, attemptsCount: 1 },
                  { name: 'OBA', percentage: 90, attemptsCount: 1 },
                ]
          }
        />
      </div>

      {/* History Table: Últimas Tentativas */}
      <div className="bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-5 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-[#10B981]" />
            <h3 className="font-heading font-bold text-sm text-white">
              Histórico das Últimas Tentativas
            </h3>
          </div>
          <span className="text-[11px] font-heading font-semibold text-[#94A3B8]">
            {attempts.length} Registros
          </span>
        </div>

        {attempts.length === 0 ? (
          <div className="p-8 text-center text-[#94A3B8]">
            <History className="w-8 h-8 mx-auto mb-2 opacity-40 text-[#00E5FF]" />
            <p className="text-xs">Nenhum simulado finalizado ainda.</p>
            <p className="text-[11px] text-[#94A3B8] mt-1">
              Escolha uma prova na aba Simulados para registrar seu primeiro histórico.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/[0.08] text-[10px] font-heading uppercase text-[#94A3B8]">
                  <th className="py-2.5 font-bold">Data</th>
                  <th className="py-2.5 font-bold">Prova</th>
                  <th className="py-2.5 font-bold text-center">Tempo</th>
                  <th className="py-2.5 font-bold text-center">Nota / Acertos</th>
                  <th className="py-2.5 font-bold text-right">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {attempts.map((att) => {
                  const mins = Math.floor(att.timeSpentSeconds / 60);

                  return (
                    <tr key={att.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 text-[#BAC9CC] whitespace-nowrap">
                        {att.date}
                      </td>
                      <td className="py-3 font-heading font-semibold text-white whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded bg-[#0F172A] border border-white/[0.06] text-[10px] text-[#00E5FF] mr-1.5 font-bold">
                          {att.examType}
                        </span>
                        <span className="max-w-[140px] truncate inline-block align-bottom">
                          {att.examTitle}
                        </span>
                      </td>
                      <td className="py-3 text-center text-[#94A3B8] whitespace-nowrap">
                        {mins} min
                      </td>
                      <td className="py-3 text-center whitespace-nowrap">
                        <span className="font-heading font-bold text-[#00E5FF]">
                          {att.percentage}%
                        </span>
                        <span className="text-[10px] text-[#94A3B8] block">
                          ({att.correctCount}/{att.totalQuestions})
                        </span>
                      </td>
                      <td className="py-3 text-right whitespace-nowrap">
                        <button
                          onClick={() => onReviewAttempt(att)}
                          className="px-2.5 py-1 rounded-lg bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[11px] font-heading font-semibold text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#05070B] transition-colors inline-flex items-center gap-1"
                        >
                          <Eye className="w-3 h-3" />
                          <span>Ver</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Confirmation Modal to Reset */}
      {showResetConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-sm bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-2xl bg-[#F43F5E]/15 border border-[#F43F5E]/30 text-[#F43F5E] flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6" />
            </div>

            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Zerar Todas as Estatísticas?
            </h3>
            <p className="text-xs text-[#BAC9CC] mb-6 leading-relaxed">
              Esta ação apagará todo o histórico de tentativas, notas e simulados gravados no seu navegador via localStorage.
            </p>

            <div className="space-y-2">
              <button
                onClick={handleConfirmReset}
                className="w-full py-3 rounded-xl bg-[#F43F5E] text-white font-heading font-bold text-xs hover:bg-[#e11d48] transition-colors"
              >
                Sim, Limpar Tudo
              </button>
              <button
                onClick={() => setShowResetConfirmModal(false)}
                className="w-full py-2.5 rounded-xl bg-[#0F172A] border border-white/[0.08] text-[#BAC9CC] text-xs font-heading font-semibold hover:text-white"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
