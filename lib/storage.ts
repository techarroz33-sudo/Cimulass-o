import { ActiveExamSession, ExamAttempt, UserStats } from '@/types/simulado';

const ATTEMPTS_KEY = 'cimulassao_attempts_v1';
const ACTIVE_SESSION_KEY = 'cimulassao_active_session_v1';
const ERROR_NOTEBOOK_KEY = 'cimulassao_error_notebook_v1';
const USER_STATS_KEY = 'cimulassao_user_stats_v1';
const BOOKMARKS_KEY = 'cimulassao_bookmarks_v1';

export function getStoredAttempts(): ExamAttempt[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ATTEMPTS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to parse attempts from localStorage', e);
    return [];
  }
}

export function saveExamAttempt(attempt: ExamAttempt): void {
  if (typeof window === 'undefined') return;
  try {
    const list = getStoredAttempts();
    const updated = [attempt, ...list];
    localStorage.setItem(ATTEMPTS_KEY, JSON.stringify(updated));

    // Update user stats
    const stats = getUserStats();
    stats.totalAttempts += 1;
    stats.totalQuestionsAnswered += attempt.totalQuestions;
    stats.totalCorrect += attempt.correctCount;
    stats.totalWrong += attempt.wrongCount;
    stats.totalTimeSpentSeconds += attempt.timeSpentSeconds;
    stats.dailyGoalCompleted = Math.min(stats.dailyGoalTarget, stats.dailyGoalCompleted + attempt.correctCount);

    // Update streak if today
    const todayStr = new Date().toISOString().slice(0, 10);
    if (stats.lastActiveDate !== todayStr) {
      stats.streakDays += 1;
      stats.lastActiveDate = todayStr;
    }
    saveUserStats(stats);

    // Save wrongly answered questions to error notebook
    const errorNotebook = getErrorNotebook();
    Object.entries(attempt.userAnswers).forEach(([qId, answer]) => {
      // Find whether it was wrong
      // We will record question IDs into the error notebook if incorrect
      if (answer && attempt.wrongCount > 0) {
        if (!errorNotebook.includes(qId)) {
          errorNotebook.push(qId);
        }
      }
    });
    saveErrorNotebook(errorNotebook);

    // Clear active session once completed
    clearActiveSession();
  } catch (e) {
    console.error('Failed to save attempt', e);
  }
}

export function getActiveSession(): ActiveExamSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(ACTIVE_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

export function saveActiveSession(session: ActiveExamSession): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ACTIVE_SESSION_KEY, JSON.stringify(session));
  } catch (e) {
    console.error('Failed to save active session', e);
  }
}

export function clearActiveSession(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(ACTIVE_SESSION_KEY);
  } catch (e) {
    console.error('Failed to clear active session', e);
  }
}

export function getErrorNotebook(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ERROR_NOTEBOOK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveErrorNotebook(ids: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(ERROR_NOTEBOOK_KEY, JSON.stringify(ids));
  } catch (e) {
    console.error('Failed to save error notebook', e);
  }
}

export function getBookmarks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function toggleBookmark(qId: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const list = getBookmarks();
    let isBookmarked = false;
    let updated: string[];
    if (list.includes(qId)) {
      updated = list.filter((id) => id !== qId);
      isBookmarked = false;
    } else {
      updated = [...list, qId];
      isBookmarked = true;
    }
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
    return isBookmarked;
  } catch (e) {
    return false;
  }
}

export function getUserStats(): UserStats {
  const defaultStats: UserStats = {
    totalAttempts: 0,
    totalQuestionsAnswered: 0,
    totalCorrect: 0,
    totalWrong: 0,
    totalTimeSpentSeconds: 0,
    streakDays: 12, // initial gamified streak as seen in design
    lastActiveDate: new Date().toISOString().slice(0, 10),
    dailyGoalTarget: 25,
    dailyGoalCompleted: 18, // 72% as seen in reference image
    userName: 'Larissa',
    avatarSeed: 'larissa',
  };

  if (typeof window === 'undefined') return defaultStats;
  try {
    const raw = localStorage.getItem(USER_STATS_KEY);
    if (!raw) {
      localStorage.setItem(USER_STATS_KEY, JSON.stringify(defaultStats));
      return defaultStats;
    }
    return JSON.parse(raw);
  } catch (e) {
    return defaultStats;
  }
}

export function saveUserStats(stats: UserStats): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(USER_STATS_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error('Failed to save user stats', e);
  }
}

export function resetAllStorage(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(ATTEMPTS_KEY);
    localStorage.removeItem(ACTIVE_SESSION_KEY);
    localStorage.removeItem(ERROR_NOTEBOOK_KEY);
    localStorage.removeItem(USER_STATS_KEY);
    localStorage.removeItem(BOOKMARKS_KEY);
  } catch (e) {
    console.error('Failed to reset storage', e);
  }
}
