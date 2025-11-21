"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronRight, ChevronLeft, Sparkles, Check } from 'lucide-react';
import { QUIZ_QUESTIONS } from '@/lib/constants';
import { QuizAnswer } from '@/lib/types';

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});
  const [isAnimating, setIsAnimating] = useState(false);

  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
  const question = QUIZ_QUESTIONS[currentQuestion];
  const isLastQuestion = currentQuestion === QUIZ_QUESTIONS.length - 1;

  const handleAnswer = (value: any) => {
    const key = ['language', 'timezone', 'routine', 'level', 'goal', 'dailyTime', 'notifications'][currentQuestion];
    setAnswers({ ...answers, [key]: value });

    setIsAnimating(true);
    setTimeout(() => {
      if (isLastQuestion) {
        // Salvar respostas no localStorage
        localStorage.setItem('quizAnswers', JSON.stringify({ ...answers, [key]: value }));
        router.push('/quiz/result');
      } else {
        setCurrentQuestion(currentQuestion + 1);
        setIsAnimating(false);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const timeRemaining = Math.max(0, 60 - (currentQuestion * 8));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex flex-col">
      {/* Header com Progress */}
      <header className="p-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handleBack}
              disabled={currentQuestion === 0}
              className="p-2 rounded-full hover:bg-white/50 transition-colors disabled:opacity-0"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div className="text-center">
              <p className="text-sm font-medium text-emerald-700">
                Pergunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                ⏱️ ~{timeRemaining}s restantes
              </p>
            </div>

            <div className="w-10" /> {/* Spacer */}
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </header>

      {/* Question Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-8">
        <div className={`max-w-2xl w-full transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-emerald-700">
                Personalizando sua experiência
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              {question.question}
            </h2>
            <p className="text-lg text-gray-600">
              {question.subtitle}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl hover:scale-102 transition-all duration-300 text-left group border-2 border-transparent hover:border-emerald-500"
              >
                <div className="flex items-center gap-4">
                  {option.emoji && (
                    <span className="text-3xl">{option.emoji}</span>
                  )}
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-lg group-hover:text-emerald-700 transition-colors">
                      {option.label}
                    </p>
                    {option.description && (
                      <p className="text-sm text-gray-600 mt-1">
                        {option.description}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            ))}
          </div>

          {/* Motivational Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {currentQuestion < 3 && "🎯 Estamos quase lá! Continue respondendo..."}
              {currentQuestion >= 3 && currentQuestion < 6 && "✨ Ótimo! Só mais algumas perguntas..."}
              {currentQuestion === 6 && "🎉 Última pergunta! Seu plano está quase pronto..."}
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-xs text-gray-500">
        <p>Suas respostas são privadas e usadas apenas para personalização</p>
      </footer>
    </div>
  );
}
