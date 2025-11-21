"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, CheckCircle2, BookOpen, Target, Clock, TrendingUp } from 'lucide-react';
import { QuizAnswer } from '@/lib/types';

export default function QuizResultPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<QuizAnswer | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('quizAnswers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
      setTimeout(() => setIsLoading(false), 2000);
    } else {
      router.push('/quiz');
    }
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto" />
            <Sparkles className="w-8 h-8 text-emerald-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="space-y-2">
            <p className="text-xl font-bold text-gray-900">Analisando suas respostas...</p>
            <p className="text-gray-600">Criando seu plano personalizado de Qur'an</p>
          </div>
        </div>
      </div>
    );
  }

  const goalLabels: Record<string, string> = {
    read: 'Completar a leitura do Qur\'an',
    memorize: 'Memorização (Hifz)',
    listen: 'Ouvir recitações',
    habit: 'Criar hábito diário'
  };

  const levelLabels: Record<string, string> = {
    beginner: 'Iniciante',
    intermediate: 'Intermediário',
    advanced: 'Avançado'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Success Header */}
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mb-6 shadow-2xl">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seu Espaço Sagrado Está Pronto! ✨
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Com base nas suas respostas, montamos um caminho de Qur'an personalizado só para você.
          </p>
        </div>

        {/* Personalized Plan */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border-2 border-emerald-100">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Seu Plano Personalizado</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-xl">
              <Target className="w-6 h-6 text-emerald-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Objetivo Principal</p>
                <p className="text-gray-700">{answers && goalLabels[answers.goal]}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-xl">
              <BookOpen className="w-6 h-6 text-amber-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Nível de Experiência</p>
                <p className="text-gray-700">{answers && levelLabels[answers.level]}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
              <Clock className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Tempo Diário</p>
                <p className="text-gray-700">{answers?.dailyTime} minutos</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
              <TrendingUp className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Meta Semanal</p>
                <p className="text-gray-700">
                  {answers?.goal === 'read' && '3-5 páginas por dia'}
                  {answers?.goal === 'memorize' && '1-2 versos por dia'}
                  {answers?.goal === 'listen' && '15-20 min de áudio'}
                  {answers?.goal === 'habit' && 'Sessão diária consistente'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl shadow-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">
            Pronto para Começar Sua Jornada?
          </h3>
          <p className="text-emerald-100 mb-6 text-lg">
            Comece agora com suratas gratuitas e descubra seu refúgio de paz
          </p>
          
          <button
            onClick={() => router.push('/read')}
            className="px-10 py-4 bg-white text-emerald-700 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Entrar no Meu Espaço Sagrado
          </button>

          <p className="text-sm text-emerald-200 mt-4">
            ✨ Algumas suratas liberadas gratuitamente para você começar
          </p>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Você pode ajustar suas preferências a qualquer momento nas configurações
          </p>
        </div>
      </div>
    </div>
  );
}
