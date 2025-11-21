// Types para o app Sakina

export interface QuizAnswer {
  language: string;
  timezone: string;
  routine: 'morning' | 'afternoon' | 'evening' | 'night' | 'flexible';
  level: 'beginner' | 'intermediate' | 'advanced';
  goal: 'read' | 'memorize' | 'listen' | 'habit';
  dailyTime: '3-5' | '5-10' | '10-20' | '20+';
  notifications: boolean;
}

export interface Surah {
  number: number;
  name: string;
  transliteration: string;
  translation: string;
  verses: number;
  revelation: 'Meccan' | 'Medinan';
  isFree: boolean;
  arabicText?: string;
}

export interface UserProgress {
  completedSurahs: number[];
  currentSurah: number;
  currentVerse: number;
  streak: number;
  totalMinutes: number;
}

export type PlanType = 'free' | 'premium';
