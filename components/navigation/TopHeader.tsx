'use client';

import React from 'react';
import { Flame, Sparkles } from 'lucide-react';
import { UserStats } from '@/types/simulado';

interface TopHeaderProps {
  currentTab: 'inicio' | 'simulados' | 'desempenho' | 'perfil';
  userStats: UserStats;
  onOpenProfile: () => void;
}

export function TopHeader({ currentTab, userStats, onOpenProfile }: TopHeaderProps) {
  const getSubtext = () => {
    switch (currentTab) {
      case 'inicio':
        return 'INÍCIO';
      case 'simulados':
        return 'SIMULADOS';
      case 'desempenho':
        return 'DESEMPENHO';
      case 'perfil':
        return 'MEU PERFIL';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#05070B]/80 border-b border-white/[0.06] px-4 py-3 sm:px-6">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#00E5FF]/20 to-[#38BDF8]/10 border border-[#00E5FF]/40 flex items-center justify-center glow-cyan-sm">
            <div className="w-4 h-4 rounded-full border-2 border-[#00E5FF] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#10B981] ring-2 ring-[#05070B]" />
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-bold text-lg text-white tracking-tight">
                Cimulassão
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20">
                PRO
              </span>
            </div>
            <span className="block text-[10px] font-heading font-semibold tracking-wider text-[#94A3B8]">
              {getSubtext()}
            </span>
          </div>
        </div>

        {/* Right actions: Streak & Avatar */}
        <div className="flex items-center gap-2.5">
          {/* Streak pill */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F172A] border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-heading font-bold hover:border-[#00E5FF]/40 transition-colors">
            <Flame className="w-4 h-4 text-[#00E5FF] fill-[#00E5FF]/30 animate-pulse" />
            <span>{userStats.streakDays} d</span>
          </div>

          {/* Avatar button */}
          <button
            onClick={onOpenProfile}
            title="Ver Perfil"
            className="relative w-9 h-9 rounded-full ring-2 ring-[#00E5FF] ring-offset-2 ring-offset-[#05070B] overflow-hidden transition-transform active:scale-95 focus:outline-none"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
              alt="Avatar do Usuário"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
