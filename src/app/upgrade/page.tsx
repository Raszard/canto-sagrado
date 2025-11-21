"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Check, Sparkles, Crown, Zap } from 'lucide-react';
import { PREMIUM_FEATURES, PRICING } from '@/lib/constants';

export default function UpgradePage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');

  const handleUpgrade = () => {
    // Aqui você integraria com sistema de pagamento (Stripe, etc)
    alert('Integração com pagamento será implementada');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="font-bold text-xl text-gray-900">Planos Premium</h1>
              <p className="text-sm text-gray-600">Desbloqueie o Quran completo</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            <Crown className="w-4 h-4" />
            Oferta Especial de Lançamento
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Transforme Seu Celular no Seu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-700">
              Companheiro de Quran
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Você já deu o primeiro passo. Agora ative o acesso total e comece sua jornada completa com o Livro de Allah.
          </p>
        </div>

        {/* Comparação Demo vs Premium */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          {/* Demo Gratuito */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Gratuito</h3>
              <p className="text-gray-600">Experimente o básico</p>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">7 suratas gratuitas</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">1 recitador básico</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Interface de leitura simples</span>
              </li>
              <li className="flex items-start gap-3 opacity-40">
                <span className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 line-through">Quran completo</span>
              </li>
              <li className="flex items-start gap-3 opacity-40">
                <span className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 line-through">Modo memorização</span>
              </li>
              <li className="flex items-start gap-3 opacity-40">
                <span className="w-5 h-5 border-2 border-gray-300 rounded mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 line-through">Download offline</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">Grátis</div>
                <p className="text-sm text-gray-600">Sempre disponível</p>
              </div>
            </div>
          </div>

          {/* Premium */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
            
            <div className="relative">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Crown className="w-6 h-6 text-amber-300" />
                <h3 className="text-2xl font-bold">Acesso Premium</h3>
                <Sparkles className="w-6 h-6 text-amber-300" />
              </div>
              
              <ul className="space-y-3 mb-6">
                {PREMIUM_FEATURES.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-amber-300 mt-0.5 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-amber-300 text-sm font-medium mb-2">
                  <Zap className="w-4 h-4" />
                  Oferta de Lançamento
                </div>
                <p className="text-white/90 text-sm">
                  Garanta o preço especial agora. Valor aumentará em breve!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seletor de Planos */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Escolha Seu Plano
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Plano Mensal */}
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`
                p-6 rounded-xl border-2 transition-all duration-200 text-left
                ${selectedPlan === 'monthly'
                  ? 'border-emerald-600 bg-emerald-50 shadow-md'
                  : 'border-gray-200 hover:border-emerald-300'
                }
              `}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Mensal</h4>
                  <p className="text-sm text-gray-600">Flexibilidade total</p>
                </div>
                {selectedPlan === 'monthly' && (
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">
                  {PRICING.monthly.currency}{PRICING.monthly.price.toFixed(2)}
                </span>
                <span className="text-gray-600">{PRICING.monthly.period}</span>
              </div>
            </button>

            {/* Plano Anual */}
            <button
              onClick={() => setSelectedPlan('yearly')}
              className={`
                p-6 rounded-xl border-2 transition-all duration-200 text-left relative overflow-hidden
                ${selectedPlan === 'yearly'
                  ? 'border-emerald-600 bg-emerald-50 shadow-md'
                  : 'border-gray-200 hover:border-emerald-300'
                }
              `}
            >
              <div className="absolute top-3 right-3 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-bold rounded-full">
                {PRICING.yearly.discount}
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-bold text-lg text-gray-900">Anual</h4>
                  <p className="text-sm text-gray-600">Melhor valor</p>
                </div>
                {selectedPlan === 'yearly' && (
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-gray-900">
                  {PRICING.yearly.currency}{PRICING.yearly.price.toFixed(2)}
                </span>
                <span className="text-gray-600">{PRICING.yearly.period}</span>
              </div>
              <p className="text-sm text-emerald-600 font-medium mt-2">
                Equivale a R$ 7,49/mês
              </p>
            </button>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleUpgrade}
            className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 active:scale-100 transition-all duration-200"
          >
            Desbloquear Acesso Completo
          </button>

          <p className="text-center text-sm text-gray-500 mt-4">
            🔒 Pagamento seguro • Cancele quando quiser
          </p>
        </div>

        {/* Garantia */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
          <h4 className="font-bold text-gray-900 mb-2">Garantia de 7 Dias</h4>
          <p className="text-gray-700">
            Não está satisfeito? Devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
        </div>

        {/* Testemunho */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic max-w-2xl mx-auto">
            "E recite o Alcorão com calma e clareza" - Surah Al-Muzzammil (73:4)
          </p>
        </div>
      </main>
    </div>
  );
}
