"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Check } from 'lucide-react';
import { QUIZ_QUESTIONS } from '@/lib/constants';
import type { QuizAnswer } from '@/lib/types';

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});

  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;
  const isLastStep = currentStep === QUIZ_QUESTIONS.length - 1;

  const handleAnswer = (value: any) => {
    const questionKey = getQuestionKey(currentQuestion.id);
    const newAnswers = { ...answers, [questionKey]: value };
    setAnswers(newAnswers);

    // Auto-avançar após selecionar
    setTimeout(() => {
      if (isLastStep) {
        // Salvar respostas e ir para resultado
        localStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
        router.push('/quiz/result');
      } else {
        setCurrentStep(currentStep + 1);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      router.push('/');
    }
  };

  const getQuestionKey = (id: number): keyof QuizAnswer => {
    const keyMap: Record<number, keyof QuizAnswer> = {
      1: 'language',
      2: 'timezone',
      3: 'routine',
      4: 'level',
      5: 'goal',
      6: 'dailyTime',
      7: 'notifications'
    };
    return keyMap[id];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex flex-col">
      {/* Header com progresso */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 z-10">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-3">
            <button
              onClick={handleBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                <span>Passo {currentStep + 1} de {QUIZ_QUESTIONS.length}</span>
                <span className="font-medium">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo da pergunta */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-lg w-full space-y-8 animate-in fade-in duration-500">
          
          {/* Pergunta */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {currentQuestion.question}
            </h2>
            <p className="text-gray-600">
              {currentQuestion.subtitle}
            </p>
          </div>

          {/* Opções */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const questionKey = getQuestionKey(currentQuestion.id);
              const isSelected = answers[questionKey] === option.value;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className={`
                    w-full p-5 rounded-xl border-2 text-left transition-all duration-200
                    ${isSelected 
                      ? 'border-emerald-600 bg-emerald-50 shadow-md' 
                      : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-sm'
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    {/* Emoji ou ícone */}
                    {option.emoji && (
                      <span className="text-2xl">{option.emoji}</span>
                    )}
                    
                    {/* Conteúdo */}
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">
                        {option.label}
                      </div>
                      {option.description && (
                        <div className="text-sm text-gray-600 mt-1">
                          {option.description}
                        </div>
                      )}
                    </div>

                    {/* Check icon */}
                    {isSelected && (
                      <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Motivação */}
          {currentStep === 0 && (
            <p className="text-center text-sm text-emerald-600 font-medium">
              🎯 Você está a {QUIZ_QUESTIONS.length * 10} segundos do seu plano personalizado
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
