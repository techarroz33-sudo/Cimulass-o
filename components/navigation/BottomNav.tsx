'use client';

import React from 'react';
import { LayoutGrid, FileText, TrendingUp, User } from 'lucide-react';

export type NavTab = 'inicio' | 'simulados' | 'desempenho' | 'perfil';

interface BottomNavProps {
  currentTab: NavTab;
  onChangeTab: (tab: NavTab) => void;
}

export function BottomNav({ currentTab, onChangeTab }: BottomNavProps) {
  const tabs = [
    { id: 'inicio', label: 'Início', icon: LayoutGrid },
    { id: 'simulados', label: 'Simulados', icon: FileText },
    { id: 'desempenho', label: 'Desempenho', icon: TrendingUp },
    { id: 'perfil', label: 'Perfil', icon: User },
  ] as const;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-xl bg-[#05070B]/90 border-t border-white/[0.08] px-4 py-2 pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-[#00E5FF]'
                  : 'text-[#94A3B8] hover:text-[#DFE2EF] hover:bg-white/[0.03]'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 stroke-[2.5]' : 'stroke-[1.8]'
                  }`}
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
                )}
              </div>
              <span
                className={`text-[11px] mt-1 font-heading font-medium tracking-wide transition-colors ${
                  isActive ? 'font-bold text-[#00E5FF]' : 'text-[#94A3B8]'
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
