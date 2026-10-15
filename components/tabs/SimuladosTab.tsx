'use client';

import React, { useState } from 'react';
import {
  Search,
  SlidersHorizontal,
  Bookmark,
  Clock,
  Sparkles,
  Users,
  Award,
  BookOpen,
  Plus,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { Exam, ExamType } from '@/types/simulado';
import { ALL_EXAMS } from '@/lib/exams-registry';
import { getBookmarks, toggleBookmark } from '@/lib/storage';

interface SimuladosTabProps {
  onStartExam: (exam: Exam) => void;
  onOpenCustomModal: () => void;
}

export function SimuladosTab({ onStartExam, onOpenCustomModal }: SimuladosTabProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBanca, setSelectedBanca] = useState<string>('Todas as Bancas');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => getBookmarks());

  const bancas = [
    'Todas as Bancas',
    'ENEM',
    'FUVEST',
    'UNICAMP',
    'UNESP',
    'PROVÃO PAULISTA',
    'OBMEP',
    'OBA',
    'OBF',
    'SISU',
  ];

  const categories = [
    'Todos',
    'Vestibulares',
    'Olimpíadas',
    'Ensino Médio',
    'Fundamental',
  ];

  const handleToggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(id);
    setBookmarkedIds(getBookmarks());
  };

  // Filter exams
  const filteredExams = ALL_EXAMS.filter((exam) => {
    // Search filter
    const matchesSearch =
      exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.examType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exam.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    // Banca filter
    const matchesBanca =
      selectedBanca === 'Todas as Bancas' ||
      exam.examType === selectedBanca ||
      exam.tags.some((t) => t.toLowerCase().includes(selectedBanca.toLowerCase()));

    // Category filter
    let matchesCategory = true;
    if (selectedCategory === 'Vestibulares') matchesCategory = exam.category === 'vestibular';
    if (selectedCategory === 'Olimpíadas') matchesCategory = exam.category === 'olimpiada';
    if (selectedCategory === 'Ensino Médio') matchesCategory = exam.category === 'medio';
    if (selectedCategory === 'Fundamental') matchesCategory = exam.category === 'fundamental' || exam.examType === 'OBMEP';

    return matchesSearch && matchesBanca && matchesCategory;
  });

  return (
    <div className="space-y-5 pb-32">
      {/* Search Bar + Filter Button */}
      <div className="flex items-center gap-2.5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por prova, banca ou matéria..."
            className="w-full bg-[#0F172A] border border-white/[0.08] focus:border-[#00E5FF] focus:outline-none rounded-xl py-2.5 pl-10 pr-4 text-xs text-white placeholder:text-[#94A3B8] transition-colors"
          />
        </div>

        <button
          onClick={() => {
            setSelectedBanca('Todas as Bancas');
            setSelectedCategory('Todos');
            setSearchTerm('');
          }}
          className="w-10 h-10 rounded-xl bg-[#0F172A] border border-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-[#00E5FF] hover:border-[#00E5FF]/40 transition-colors"
          title="Limpar Filtros"
        >
          <SlidersHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal Scroll: Bancas */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-none">
        {bancas.map((banca) => (
          <button
            key={banca}
            onClick={() => setSelectedBanca(banca)}
            className={`py-1.5 px-3 rounded-full text-xs font-heading font-semibold border transition-all shrink-0 ${
              selectedBanca === banca
                ? 'bg-[#00E5FF] text-[#05070B] border-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.25)]'
                : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8] hover:border-white/[0.2] hover:text-[#DFE2EF]'
            }`}
          >
            {banca}
          </button>
        ))}
      </div>

      {/* Horizontal Scroll: Secondary Categories */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-4 px-4 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`py-1 px-3 rounded-lg text-[11px] font-heading font-medium border transition-colors shrink-0 ${
              selectedCategory === cat
                ? 'bg-[#1E293B] text-[#38BDF8] border-[#38BDF8]/40'
                : 'bg-transparent border-white/[0.06] text-[#94A3B8] hover:text-[#DFE2EF]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blue Banner: Simulado Sob Medida */}
      <div className="bg-[#0F172A] border border-[#00E5FF]/30 rounded-2xl p-4 shadow-xl flex items-center justify-between gap-3 glow-cyan-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00E5FF] text-[#05070B] flex items-center justify-center shrink-0 shadow-[0_0_12px_#00E5FF]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-heading font-bold text-white">
              Simulado Sob Medida...
            </h3>
            <p className="text-[11px] text-[#BAC9CC]">
              Escolha matérias, bancas e tempo limite
            </p>
          </div>
        </div>

        <button
          onClick={onOpenCustomModal}
          className="px-3.5 py-1.5 rounded-xl bg-[#1E293B] border border-[#00E5FF]/40 text-xs font-heading font-bold text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#05070B] transition-all shrink-0 flex items-center gap-1"
        >
          <span>Configurar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Section Header */}
      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
          <h2 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
            Simulados em Alta
          </h2>
        </div>
        <span className="text-[11px] font-heading font-semibold text-[#94A3B8] uppercase">
          {filteredExams.length} Disponíveis
        </span>
      </div>

      {/* List of Mock Exams */}
      <div className="space-y-4">
        {filteredExams.map((exam, idx) => {
          const isSaved = bookmarkedIds.includes(exam.id);

          return (
            <div
              key={exam.id}
              className="bg-[#0A0E17] border border-[#1E293B] hover:border-[#00E5FF]/40 rounded-2xl p-4 sm:p-5 shadow-xl transition-all duration-200 group"
            >
              {/* Header Badges & Bookmark */}
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded-md bg-[#00E5FF]/15 border border-[#00E5FF]/30 text-[10px] font-heading font-bold text-[#00E5FF]">
                    {exam.tags[0] || exam.examType}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-heading font-bold ${
                      exam.difficulty === 'Difícil' || exam.difficulty === 'Avançado'
                        ? 'bg-[#F43F5E]/15 border border-[#F43F5E]/30 text-[#F43F5E]'
                        : 'bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981]'
                    }`}
                  >
                    ⚡ {exam.difficulty}
                  </span>
                </div>

                <button
                  onClick={(e) => handleToggleBookmark(exam.id, e)}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    isSaved
                      ? 'bg-[#00E5FF]/20 border-[#00E5FF] text-[#00E5FF]'
                      : 'border-transparent text-[#94A3B8] hover:text-white'
                  }`}
                  title="Salvar Simulado"
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base font-bold font-heading text-white group-hover:text-[#00E5FF] transition-colors mb-1">
                {exam.title}
              </h3>
              <p className="text-xs text-[#BAC9CC] leading-relaxed mb-4">
                {exam.subtitle}
              </p>

              {/* 3-Column Statistics Row */}
              <div className="grid grid-cols-3 gap-2 py-2.5 px-3 rounded-xl bg-[#0F172A] border border-white/[0.04] mb-4 text-center">
                <div>
                  <span className="block text-[10px] text-[#94A3B8] font-heading">
                    Questões
                  </span>
                  <span className="text-xs font-heading font-bold text-white">
                    {exam.questionsCount} itens
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#94A3B8] font-heading">
                    Inscritos
                  </span>
                  <span className="text-xs font-heading font-bold text-white">
                    {(14000 + idx * 850).toLocaleString('pt-BR')}
                  </span>
                </div>
                <div>
                  <span className="block text-[10px] text-[#94A3B8] font-heading">
                    {exam.examType === 'ENEM' || exam.examType === 'SISU' ? 'Média TRI' : 'Nota Corte'}
                  </span>
                  <span className="text-xs font-heading font-bold text-[#00E5FF]">
                    {exam.examType === 'ENEM' || exam.examType === 'SISU' ? '685.0' : 'Histórico'}
                  </span>
                </div>
              </div>

              {/* Bottom Action Row: Duration & Começar Button */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] font-heading font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{exam.durationMinutes} min</span>
                </div>

                <button
                  onClick={() => onStartExam(exam)}
                  className="py-2 px-6 rounded-xl bg-[#00E5FF] text-[#05070B] font-heading font-bold text-xs tracking-wider uppercase glow-cyan hover:brightness-110 active:scale-95 transition-all"
                >
                  Começar
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Action Bar: Criar Simulado Personalizado */}
      <div className="fixed bottom-16 left-0 right-0 z-30 px-4 pointer-events-none">
        <div className="max-w-md mx-auto pointer-events-auto">
          <button
            onClick={onOpenCustomModal}
            className="w-full py-3.5 rounded-2xl bg-[#00E5FF] text-[#05070B] font-heading font-bold text-sm tracking-wide shadow-[0_4px_24px_rgba(0,229,255,0.45)] flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
          >
            <SlidersHorizontal className="w-4 h-4 stroke-[2.5]" />
            <span>Criar Simulado Personalizado</span>
          </button>
        </div>
      </div>
    </div>
  );
}
