'use client';

import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface AccuracyDonutChartProps {
  correct: number;
  wrong: number;
  blank?: number;
}

export function AccuracyDonutChart({ correct, wrong, blank = 0 }: AccuracyDonutChartProps) {
  const total = correct + wrong + blank;
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  if (total === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-[#94A3B8]">
        <div className="w-32 h-32 rounded-full border-4 border-dashed border-[#1E293B] flex items-center justify-center mb-3">
          <span className="text-sm font-semibold">Sem dados</span>
        </div>
        <p className="text-xs">Faça seu primeiro simulado para ver o gráfico de aproveitamento.</p>
      </div>
    );
  }

  const data = {
    labels: ['Acertos', 'Erros', 'Em Branco'],
    datasets: [
      {
        data: [correct, wrong, blank],
        backgroundColor: [
          '#00E5FF', // Neon Cyan
          '#F43F5E', // Rose / Red
          '#31353F', // Dark Slate for blank
        ],
        borderColor: [
          'rgba(0, 229, 255, 0.8)',
          'rgba(244, 63, 94, 0.8)',
          'rgba(49, 53, 63, 0.8)',
        ],
        borderWidth: 2,
        cutout: '76%',
        hoverOffset: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#BAC9CC',
          font: {
            family: 'Space Grotesk',
            size: 12,
          },
          padding: 16,
          boxWidth: 12,
          boxHeight: 12,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: '#0F172A',
        titleColor: '#00E5FF',
        bodyColor: '#DFE2EF',
        borderColor: '#1E293B',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context: any) {
            const val = context.parsed;
            const pct = Math.round((val / total) * 100);
            return ` ${context.label}: ${val} (${pct}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="relative w-full h-[240px] flex items-center justify-center">
      <Doughnut data={data} options={options} />
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <span className="block text-3xl font-bold text-[#00E5FF] font-heading drop-shadow-[0_0_12px_rgba(0,229,255,0.4)]">
          {percentage}%
        </span>
        <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-medium">
          Aproveitamento
        </span>
      </div>
    </div>
  );
}
