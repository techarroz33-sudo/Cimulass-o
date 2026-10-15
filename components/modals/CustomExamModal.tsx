'use client';

import React, { useState } from 'react';
import { X, Sparkles, Sliders, Clock, HelpCircle, Check, ArrowRight } from 'lucide-react';
import { Exam, ExamType } from '@/types/simulado';
import { ALL_EXAMS } from '@/lib/exams-registry';

interface CustomExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartCustomExam: (customExam: Exam) => void;
}

export function CustomExamModal({ isOpen, onClose, onStartCustomExam }: CustomExamModalProps) {
  const [selectedExamType, setSelectedExamType] = useState<ExamType>('ENEM');
  const [selectedSubject, setSelectedSubject] = useState<string>('Todas');
  const [questionCount, setQuestionCount] = useState<number>(20);
  const [durationMinutes, setDurationMinutes] = useState<number>(45);

  if (!isOpen) return null;

  const examTypes: { type: ExamType; label: string }[] = [
    { type: 'ENEM', label: 'ENEM' },
    { type: 'FUVEST', label: 'FUVEST' },
    { type: 'UNICAMP', label: 'UNICAMP' },
    { type: 'UNESP', label: 'UNESP' },
    { type: 'OBMEP', label: 'OBMEP' },
    { type: 'OBA', label: 'OBA' },
    { type: 'OBF', label: 'OBF' },
    { type: 'PROVAO_PAULISTA', label: 'Provão Paulista' },
    { type: 'SISU', label: 'SiSU' },
  ];

  const subjects = ['Todas', 'Matemática', 'Física', 'Química', 'Biologia', 'Linguagens', 'Humanas', 'Astronomia'];
  const countOptions = [5, 10, 15, 20];
  const durationOptions = [15, 30, 45, 60];

  const handleCreate = () => {
    // Find base exam or pool questions
    const base = ALL_EXAMS.find((e) => e.examType === selectedExamType) || ALL_EXAMS[0];
    let pool = [...base.questions];

    if (selectedSubject !== 'Todas') {
      const filtered = pool.filter((q) =>
        q.subject.toLowerCase().includes(selectedSubject.toLowerCase()) ||
        q.subtopic.toLowerCase().includes(selectedSubject.toLowerCase())
      );
      if (filtered.length >= 3) {
        pool = filtered;
      }
    }

    // Shuffle pool and take requested amount
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, Math.min(questionCount, pool.length));

    const customExam: Exam = {
      id: `custom-${selectedExamType.toLowerCase()}-${selectedQuestions.length}`,
      slug: `custom-${selectedExamType.toLowerCase()}`,
      title: `Simulado Sob Medida: ${selectedExamType}`,
      subtitle: `Foco: ${selectedSubject} • ${selectedQuestions.length} questões personalizadas`,
      examType: selectedExamType,
      questionsCount: selectedQuestions.length,
      durationMinutes: durationMinutes,
      difficulty: 'Médio',
      category: 'vestibular',
      tags: ['Personalizado', selectedExamType, selectedSubject, `${selectedQuestions.length} Itens`],
      questions: selectedQuestions,
    };

    onStartCustomExam(customExam);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#0A0E17] border border-[#1E293B] rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-heading">
                Criar Simulado Sob Medida
              </h2>
              <p className="text-xs text-[#94A3B8]">
                Monte um simulado tático com base no seu objetivo de estudo
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#94A3B8] hover:text-white rounded-lg hover:bg-white/[0.05] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="mt-5 space-y-5">
          {/* 1. Prova / Banca */}
          <div>
            <label className="block text-xs font-heading font-semibold text-[#BAC9CC] mb-2 uppercase tracking-wider">
              1. Selecione a Prova / Banca
            </label>
            <div className="grid grid-cols-3 gap-2">
              {examTypes.map((item) => (
                <button
                  key={item.type}
                  type="button"
                  onClick={() => setSelectedExamType(item.type)}
                  className={`py-2 px-3 text-xs rounded-xl font-heading font-semibold border transition-all text-center ${
                    selectedExamType === item.type
                      ? 'bg-[#00E5FF]/15 border-[#00E5FF] text-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.2)]'
                      : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8] hover:border-white/[0.2]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Matéria / Área de foco */}
          <div>
            <label className="block text-xs font-heading font-semibold text-[#BAC9CC] mb-2 uppercase tracking-wider">
              2. Foco Temático
            </label>
            <div className="flex flex-wrap gap-2">
              {subjects.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => setSelectedSubject(sub)}
                  className={`py-1.5 px-3 text-xs rounded-full font-medium border transition-all ${
                    selectedSubject === sub
                      ? 'bg-[#38BDF8]/20 border-[#38BDF8] text-[#38BDF8]'
                      : 'bg-[#0F172A] border-white/[0.08] text-[#94A3B8] hover:border-white/[0.2]'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Quantidade de Questões */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-heading font-semibold text-[#BAC9CC] uppercase tracking-wider">
                3. Quantidade de Questões
              </label>
              <span className="text-xs font-bold text-[#00E5FF]">
                {questionCount} itens
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {countOptions.map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setQuestionCount(num)}
                  className={`py-2 rounded-xl text-xs font-heading font-bold border transition-all ${
                    questionCount === num
                      ? 'bg-[#00E5FF] text-[#05070B] border-[#00E5FF] font-bold'
                      : 'bg-[#0F172A] border-white/[0.08] text-[#DFE2EF] hover:border-white/[0.2]'
                  }`}
                >
                  {num} Qs
                </button>
              ))}
            </div>
          </div>

          {/* 4. Tempo Limite */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-heading font-semibold text-[#BAC9CC] uppercase tracking-wider">
                4. Tempo Limite (Timer)
              </label>
              <span className="text-xs font-bold text-[#38BDF8]">
                {durationMinutes} minutos
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {durationOptions.map((time) => (
                <button
                  key={time}
                  type="button"
                  onClick={() => setDurationMinutes(time)}
                  className={`py-2 rounded-xl text-xs font-heading font-bold border transition-all flex items-center justify-center gap-1 ${
                    durationMinutes === time
                      ? 'bg-[#1E293B] border-[#00E5FF] text-[#00E5FF]'
                      : 'bg-[#0F172A] border-white/[0.08] text-[#DFE2EF] hover:border-white/[0.2]'
                  }`}
                >
                  <Clock className="w-3 h-3" />
                  {time}m
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 pt-4 border-t border-white/[0.08]">
          <button
            onClick={handleCreate}
            className="w-full py-3.5 px-4 rounded-xl bg-[#00E5FF] text-[#05070B] font-heading font-bold text-sm tracking-wide flex items-center justify-center gap-2 glow-cyan hover:brightness-110 active:scale-[0.99] transition-all"
          >
            <span>Gerar e Iniciar Simulado</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
