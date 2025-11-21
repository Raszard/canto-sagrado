"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Crown, Check, Sparkles, Zap, BookOpen, Volume2, Brain, Download, TrendingUp, Palette, BellRing, Shield } from 'lucide-react';
import { PREMIUM_FEATURES, PRICING } from '@/lib/constants';

export default function UpgradePage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const features = [
    { icon: BookOpen, text: "Alcorão completo (114 suratas)" },
    { icon: Volume2, text: "10+ recitadores renomados" },
    { icon: Download, text: "Download offline de áudios" },
    { icon: Brain, text: "Modo memorização (Hifz) com IA" },
    { icon: Palette, text: "Tajweed colorido" },
    { icon: TrendingUp, text: "Estatísticas de progresso" },
    { icon: BellRing, text: "Lembretes inteligentes" },
    { icon: Shield, text: "Sem anúncios, sem distrações" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header */}
      <header className="p-6 text-center">
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-900 mb-4"
        >
          ← Voltar
        </button>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in fade-in duration-700">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full mb-6 shadow-2xl">
            <Crown className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Desbloqueie o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-600">
              Alcorão Completo
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Você já deu o primeiro passo. Agora ative o acesso total e comece sua jornada completa com o Livro de Allah.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Monthly Plan */}
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`p-8 rounded-3xl transition-all duration-300 text-left ${
              selectedPlan === 'monthly'
                ? 'bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-2xl scale-105'
                : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Mensal</h3>
              {selectedPlan === 'monthly' && (
                <Check className="w-6 h-6" />
              )}
            </div>
            
            <div className="mb-6">
              <span className="text-5xl font-bold">{PRICING.monthly.currency}{PRICING.monthly.price}</span>
              <span className={selectedPlan === 'monthly' ? 'text-emerald-100' : 'text-gray-600'}>
                {PRICING.monthly.period}
              </span>
            </div>

            <p className={`text-sm ${selectedPlan === 'monthly' ? 'text-emerald-100' : 'text-gray-600'}`}>
              Cancele quando quiser
            </p>
          </button>

          {/* Yearly Plan */}
          <button
            onClick={() => setSelectedPlan('yearly')}
            className={`p-8 rounded-3xl transition-all duration-300 text-left relative ${
              selectedPlan === 'yearly'
                ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-2xl scale-105'
                : 'bg-white text-gray-900 shadow-lg hover:shadow-xl'
            }`}
          >
            <div className="absolute -top-3 -right-3 px-4 py-1 bg-red-500 text-white text-sm font-bold rounded-full shadow-lg">
              {PRICING.yearly.discount}
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold">Anual</h3>
              {selectedPlan === 'yearly' && (
                <Check className="w-6 h-6" />
              )}
            </div>
            
            <div className="mb-6">
              <span className="text-5xl font-bold">{PRICING.yearly.currency}{PRICING.yearly.price}</span>
              <span className={selectedPlan === 'yearly' ? 'text-amber-100' : 'text-gray-600'}>
                {PRICING.yearly.period}
              </span>
            </div>

            <p className={`text-sm ${selectedPlan === 'yearly' ? 'text-amber-100' : 'text-gray-600'}`}>
              Economia de R$ 28,90 por ano
            </p>
          </button>
        </div>

        {/* Features Grid */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-emerald-600" />
            <h2 className="text-2xl font-bold text-gray-900">Tudo que Você Vai Desbloquear</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-gray-900 font-medium pt-2">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-center text-white shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6" />
            <p className="text-lg font-semibold">Oferta Especial de Lançamento</p>
          </div>

          <button
            className="w-full md:w-auto px-12 py-5 bg-white text-emerald-700 font-bold text-xl rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4"
          >
            Começar Agora - {selectedPlan === 'monthly' ? 'R$ 9,90/mês' : 'R$ 89,90/ano'}
          </button>

          <p className="text-emerald-100 text-sm">
            ✨ Garantia de 7 dias • Cancele quando quiser • Sem taxas ocultas
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-amber-600">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl">⭐</span>
            ))}
          </div>
          <p className="text-gray-700 font-medium">
            "Transformou minha relação com o Qur'an. Agora leio todos os dias!"
          </p>
          <p className="text-sm text-gray-500">
            Junte-se a milhares de muçulmanos que já transformaram seu celular em um refúgio sagrado
          </p>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.back()}
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            Continuar com versão gratuita
          </button>
        </div>
      </main>
    </div>
  );
}
