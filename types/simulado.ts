export type ExamType = 
  | 'ENEM' 
  | 'FUVEST' 
  | 'UNICAMP' 
  | 'UNESP' 
  | 'OBMEP' 
  | 'OBA' 
  | 'OBF' 
  | 'PROVAO_PAULISTA' 
  | 'SISU';

export type QuestionDifficulty = 'Fácil' | 'Médio' | 'Difícil' | 'Avançado';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D' | 'E';
  text: string;
}

export interface Question {
  id: string;
  exam: ExamType;
  year: number | string;
  subject: string; // e.g. "Física", "Matemática", "Astronomia", "Química", "Biologia", "Linguagens", "Humanas"
  subtopic: string; // e.g. "Mecânica e Energia", "Órbita e Kepler", "Geometria Espacial"
  difficulty: QuestionDifficulty;
  contextText?: string;
  prompt: string;
  formulaTitle?: string;
  formulaHint?: string;
  options: QuestionOption[];
  correctOption: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
}

export interface Exam {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  examType: ExamType;
  questionsCount: number;
  durationMinutes: number;
  difficulty: QuestionDifficulty;
  category: 'vestibular' | 'olimpiada' | 'fundamental' | 'medio';
  tags: string[];
  bannerGradient?: string;
  questions: Question[];
}

export interface ExamAttempt {
  id: string;
  examId: string;
  examTitle: string;
  examType: ExamType;
  date: string;
  timestamp: number;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  blankCount: number;
  percentage: number;
  estimatedTri: number;
  timeSpentSeconds: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  flaggedQuestions: string[];
  areaPerformance: {
    area: string;
    total: number;
    correct: number;
    percentage: number;
  }[];
}

export interface ActiveExamSession {
  examId: string;
  startedAt: number;
  totalDurationSeconds: number;
  remainingSeconds: number;
  currentIndex: number;
  userAnswers: Record<string, 'A' | 'B' | 'C' | 'D' | 'E'>;
  flaggedQuestions: string[];
  isPaused: boolean;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  customExam?: Exam;
}

export interface UserStats {
  totalAttempts: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  totalWrong: number;
  totalTimeSpentSeconds: number;
  streakDays: number;
  lastActiveDate: string;
  dailyGoalTarget: number;
  dailyGoalCompleted: number;
  userName: string;
  avatarSeed: string;
}
