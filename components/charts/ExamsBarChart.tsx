'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ExamScoreItem {
  name: string;
  percentage: number;
  attemptsCount: number;
}

interface ExamsBarChartProps {
  dataItems: ExamScoreItem[];
}

export function ExamsBarChart({ dataItems }: ExamsBarChartProps) {
  if (!dataItems || dataItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center text-[#94A3B8]">
        <div className="w-24 h-24 rounded-2xl bg-[#0F172A] border border-[#1E293B] flex items-center justify-center mb-3">
          <span className="text-2xl">📊</span>
        </div>
        <p className="text-xs">Nenhum comparativo disponível ainda. Conclua simulados de provas diferentes.</p>
      </div>
    );
  }

  const labels = dataItems.map((d) => d.name);
  const scores = dataItems.map((d) => d.percentage);

  const data = {
    labels,
    datasets: [
      {
        label: '% de Acerto',
        data: scores,
        backgroundColor: scores.map((val) =>
          val >= 70
            ? 'rgba(0, 229, 255, 0.85)' // Neon Cyan
            : val >= 50
            ? 'rgba(56, 189, 248, 0.75)' // Sky Blue
            : 'rgba(244, 63, 94, 0.75)' // Rose
        ),
        borderColor: scores.map((val) =>
          val >= 70
            ? '#00E5FF'
            : val >= 50
            ? '#38BDF8'
            : '#F43F5E'
        ),
        borderWidth: 1.5,
        borderRadius: 8,
        barThickness: 24,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.05)',
        },
        ticks: {
          color: '#94A3B8',
          font: { family: 'Lexend', size: 11 },
          callback: function (val: any) {
            return val + '%';
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#BAC9CC',
          font: { family: 'Space Grotesk', size: 11, weight: 'bold' as const },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#0F172A',
        titleColor: '#00E5FF',
        bodyColor: '#DFE2EF',
        borderColor: '#1E293B',
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: function (context: any) {
            return ` Aproveitamento: ${context.parsed.y}%`;
          },
        },
      },
    },
  };

  return (
    <div className="relative w-full h-[260px]">
      <Bar data={data} options={options} />
    </div>
  );
}
