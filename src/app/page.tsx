"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, BookOpen, Heart, Zap } from 'lucide-react';
import { APP_NAME, APP_TAGLINE, APP_DESCRIPTION } from '@/lib/constants';

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);

  const features = [
    {
      icon: BookOpen,
      title: "Seu Refúgio Sagrado",
      description: "No mesmo celular das distrações, um espaço só para Qur'an e paz interior"
    },
    {
      icon: Heart,
      title: "Plano Personalizado",
      description: "Em 60 segundos, criamos um caminho de Qur'an feito especialmente para você"
    },
    {
      icon: Zap,
      title: "Hábitos Reais",
      description: "Sessões de 3-5 minutos que cabem na sua rotina, sem culpa, só progresso"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 flex flex-col">
      {/* Header */}
      <header className="p-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-4">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          <span className="font-bold text-2xl text-gray-900">{APP_NAME}</span>
        </div>
        <p className="text-emerald-700 font-medium text-lg">{APP_TAGLINE}</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          {step === 0 && (
            <div className="text-center space-y-8 animate-in fade-in duration-700">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Transforme Seu Celular em um{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
                  Canto Sagrado
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
                {APP_DESCRIPTION}
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <feature.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => router.push('/quiz')}
                className="mt-12 px-12 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-300"
              >
                Começar Minha Jornada
              </button>

              <p className="text-sm text-gray-500 mt-6">
                ✨ Menos de 60 segundos para personalizar sua experiência
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 text-center text-sm text-gray-500">
        <p>Com respeito e reverência ao Livro Sagrado de Allah</p>
      </footer>
    </div>
  );
}
