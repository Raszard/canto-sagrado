"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, Lock, Crown, Volume2, Heart, ChevronRight, Sparkles } from 'lucide-react';
import { getFreeSurahs, getAllSurahs } from '@/lib/quran-data';

export default function ReadPage() {
  const router = useRouter();
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  const freeSurahs = getFreeSurahs();
  const allSurahs = getAllSurahs();

  const handleSurahClick = (surahNumber: number, isFree: boolean) => {
    if (!isFree) {
      router.push('/upgrade');
      return;
    }
    setSelectedSurah(selectedSurah === surahNumber ? null : surahNumber);
  };

  const selectedSurahData = allSurahs.find(s => s.number === selectedSurah);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Sakina</h1>
                <p className="text-xs text-gray-600">Seu refúgio de Qur'an</p>
              </div>
            </div>
            
            <button
              onClick={() => router.push('/upgrade')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              <Crown className="w-4 h-4" />
              <span className="text-sm">Premium</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Bem-vindo ao Seu Espaço Sagrado</h2>
          </div>
          <p className="text-emerald-100 text-lg mb-6">
            Comece sua jornada com as suratas gratuitas. Quando estiver pronto, desbloqueie o Alcorão completo.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-300 rounded-full" />
              <span>{freeSurahs.length} suratas liberadas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-300 rounded-full" />
              <span>114 no total</span>
            </div>
          </div>
        </div>

        {/* Surahs List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Suratas Disponíveis</h3>
            <p className="text-sm text-gray-600">{freeSurahs.length} gratuitas</p>
          </div>

          {allSurahs.slice(0, 10).map((surah) => (
            <div key={surah.number}>
              <button
                onClick={() => handleSurahClick(surah.number, surah.isFree)}
                className={`w-full p-5 rounded-2xl transition-all duration-300 text-left ${
                  surah.isFree
                    ? 'bg-white hover:bg-emerald-50 shadow-md hover:shadow-lg border-2 border-transparent hover:border-emerald-500'
                    : 'bg-gray-100 hover:bg-gray-200 opacity-75'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                    surah.isFree ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {surah.number}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-gray-900">{surah.transliteration}</h4>
                      {!surah.isFree && (
                        <Lock className="w-4 h-4 text-gray-500" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{surah.translation} • {surah.verses} versos</p>
                  </div>

                  <div className="text-2xl">{surah.name}</div>
                  
                  {surah.isFree ? (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Crown className="w-5 h-5 text-amber-500" />
                  )}
                </div>
              </button>

              {/* Expanded Surah Content */}
              {selectedSurah === surah.number && surah.isFree && surah.arabicText && (
                <div className="mt-3 p-6 bg-gradient-to-br from-emerald-50 to-white rounded-2xl border-2 border-emerald-200 animate-in fade-in duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-medium text-gray-700">Recitação disponível</span>
                    </div>
                    <button className="p-2 hover:bg-emerald-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
                    </button>
                  </div>

                  <div className="text-right leading-loose text-2xl mb-6 font-arabic text-gray-900">
                    {surah.arabicText.split('\n').map((line, i) => (
                      <p key={i} className="mb-4">{line}</p>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-emerald-200">
                    <p className="text-sm text-gray-600 text-center">
                      ✨ Desbloqueie traduções, tajweed e mais recursos com o plano Premium
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Upgrade CTA */}
        <div className="mt-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <Crown className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-3">
            Desbloqueie o Alcorão Completo
          </h3>
          <p className="text-amber-100 mb-6 text-lg">
            Acesse todas as 114 suratas + recursos avançados de memorização, múltiplos recitadores e muito mais
          </p>
          <button
            onClick={() => router.push('/upgrade')}
            className="px-10 py-4 bg-white text-amber-600 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Ver Planos Premium
          </button>
        </div>
      </main>
    </div>
  );
}
