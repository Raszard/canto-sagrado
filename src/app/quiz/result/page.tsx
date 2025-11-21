"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, BookOpen, Clock, Target, TrendingUp } from 'lucide-react';
import type { QuizAnswer } from '@/lib/types';

export default function QuizResultPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Partial<QuizAnswer> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('quizAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    } else {
      router.push('/quiz');
    }
    setLoading(false);
  }, [router]);

  if (loading || !answers) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Preparando seu plano...</p>
        </div>
      </div>
    );
  }

  const getGoalText = (goal?: string) => {
    const goals: Record<string, string> = {
      read: 'Completar a leitura do Quran',
      memorize: 'Memorizar e revisar (Hifz)',
      listen: 'Conectar através de recitações',
      habit: 'Criar consistência diária'
    };
    return goals[goal || 'read'] || 'Crescer espiritualmente';
  };

  const getLevelText = (level?: string) => {
    const levels: Record<string, string> = {
      beginner: 'Iniciante',
      intermediate: 'Intermediário',
      advanced: 'Avançado'
    };
    return levels[level || 'beginner'] || 'Iniciante';
  };

  const getRoutineText = (routine?: string) => {
    const routines: Record<string, string> = {
      morning: 'Manhã (Fajr/Dhuhr)',
      afternoon: 'Tarde (Asr)',
      evening: 'Noite (Maghrib)',
      night: 'Madrugada (Isha)',
      flexible: 'Horário flexível'
    };
    return routines[routine || 'flexible'] || 'Horário flexível';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header com celebração */}
      <header className="pt-12 pb-8 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-600/30">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Seu Plano Está Pronto! 🎉
          </h1>
          <p className="text-lg text-gray-600">
            Montamos um caminho personalizado de Quran só para você
          </p>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="px-6 pb-12">
        <div className="max-w-2xl mx-auto space-y-6">
          
          {/* Card do plano personalizado */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
              <h2 className="text-xl font-bold text-white">Seu Plano Personalizado</h2>
            </div>
            
            <div className="p-6 space-y-5">
              {/* Objetivo principal */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <Target className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Objetivo Principal</h3>
                  <p className="text-gray-600">{getGoalText(answers.goal)}</p>
                </div>
              </div>

              {/* Nível */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Nível Atual</h3>
                  <p className="text-gray-600">{getLevelText(answers.level)}</p>
                </div>
              </div>

              {/* Tempo diário */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Tempo Diário</h3>
                  <p className="text-gray-600">{answers.dailyTime} minutos por dia</p>
                </div>
              </div>

              {/* Melhor horário */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-50 rounded-lg">
                  <BookOpen className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">Melhor Horário</h3>
                  <p className="text-gray-600">{getRoutineText(answers.routine)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Próximos passos */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-3">Próximos Passos</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-2xl">📖</span>
                <div>
                  <p className="font-medium">Comece com 7 suratas gratuitas</p>
                  <p className="text-emerald-100 text-sm">Al-Fatiha e as últimas 6 suratas do Quran</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-medium">Estabeleça sua rotina diária</p>
                  <p className="text-emerald-100 text-sm">Sessões curtas e consistentes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-medium">Desbloqueie o Quran completo</p>
                  <p className="text-emerald-100 text-sm">114 suratas + recursos avançados</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTAs */}
          <div className="space-y-3">
            <button
              onClick={() => router.push('/read')}
              className="w-full px-8 py-4 bg-emerald-600 text-white text-lg font-semibold rounded-xl hover:bg-emerald-700 active:scale-98 transition-all duration-200 shadow-lg shadow-emerald-600/20"
            >
              Começar a Ler Agora
            </button>

            <button
              onClick={() => router.push('/upgrade')}
              className="w-full px-8 py-4 bg-white text-emerald-600 text-lg font-semibold rounded-xl border-2 border-emerald-600 hover:bg-emerald-50 active:scale-98 transition-all duration-200"
            >
              Ver Plano Completo
            </button>
          </div>

          {/* Mensagem motivacional */}
          <p className="text-center text-sm text-gray-500 italic">
            "E recite o Alcorão com calma e clareza" - Surah Al-Muzzammil (73:4)
          </p>
        </div>
      </main>
    </div>
  );
}
