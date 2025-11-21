"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChevronLeft, Play, Pause, Lock, BookOpen } from 'lucide-react';
import { getFreeSurahs, getSurahById } from '@/lib/quran-data';

export default function ReadPage() {
  const router = useRouter();
  const freeSurahs = getFreeSurahs();
  const [selectedSurah, setSelectedSurah] = useState(freeSurahs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSurahSelect = (surahNumber: number) => {
    const surah = getSurahById(surahNumber);
    if (surah) {
      setSelectedSurah(surah);
      setIsPlaying(false);
    }
  };

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
    // Aqui você integraria com um player de áudio real
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/quiz/result')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Voltar"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex-1">
              <h1 className="font-bold text-xl text-gray-900">Leitura do Quran</h1>
              <p className="text-sm text-gray-600">7 suratas gratuitas disponíveis</p>
            </div>
            <button
              onClick={() => router.push('/upgrade')}
              className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Desbloquear Tudo
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-[300px,1fr] gap-6">
          
          {/* Sidebar - Lista de Suratas */}
          <aside className="space-y-3">
            <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-emerald-600" />
              Suratas Disponíveis
            </h2>
            
            <div className="space-y-2">
              {freeSurahs.map((surah) => (
                <button
                  key={surah.number}
                  onClick={() => handleSurahSelect(surah.number)}
                  className={`
                    w-full p-4 rounded-xl text-left transition-all duration-200
                    ${selectedSurah.number === surah.number
                      ? 'bg-emerald-50 border-2 border-emerald-600 shadow-md'
                      : 'bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-sm'
                    }
                  `}
                >
                  <div className="flex items-center gap-3">
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm
                      ${selectedSurah.number === surah.number
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                      }
                    `}>
                      {surah.number}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 truncate">
                        {surah.transliteration}
                      </div>
                      <div className="text-sm text-gray-600 truncate">
                        {surah.translation}
                      </div>
                    </div>
                  </div>
                </button>
              ))}

              {/* Locked suratas preview */}
              <div className="relative">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-500">+107 suratas</div>
                      <div className="text-sm text-gray-400">Plano Premium</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main - Texto do Quran */}
          <main className="space-y-6">
            
            {/* Header da Surata */}
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold mb-2">{selectedSurah.name}</div>
                <div className="text-xl font-semibold">{selectedSurah.transliteration}</div>
                <div className="text-emerald-100">{selectedSurah.translation}</div>
                <div className="flex items-center justify-center gap-4 text-sm text-emerald-100 mt-4">
                  <span>{selectedSurah.verses} versos</span>
                  <span>•</span>
                  <span>{selectedSurah.revelation === 'Meccan' ? 'Meca' : 'Medina'}</span>
                </div>
              </div>
            </div>

            {/* Player de Áudio */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <button
                  onClick={toggleAudio}
                  className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
                  aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 text-white" fill="white" />
                  ) : (
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  )}
                </button>
                
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Recitação de Sheikh Mishary Rashid Alafasy
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-600 transition-all duration-300"
                      style={{ width: isPlaying ? '45%' : '0%' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Texto Árabe */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <div className="inline-block px-4 py-2 bg-emerald-50 rounded-lg">
                  <span className="text-emerald-700 font-medium text-sm">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</span>
                </div>
              </div>

              <div 
                className="text-right leading-loose space-y-6"
                style={{ 
                  fontSize: '1.75rem',
                  fontFamily: 'Traditional Arabic, Arial',
                  lineHeight: '2.5'
                }}
              >
                {selectedSurah.arabicText?.split('\n').map((verse, index) => (
                  <p 
                    key={index}
                    className="text-gray-900 hover:text-emerald-600 transition-colors cursor-pointer p-4 rounded-lg hover:bg-emerald-50"
                  >
                    {verse} <span className="text-emerald-600 text-xl">﴿{index + 1}﴾</span>
                  </p>
                ))}
              </div>
            </div>

            {/* CTA para upgrade */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-gray-900">
                  Quer acessar o Quran completo?
                </h3>
                <p className="text-gray-600">
                  Desbloqueie todas as 114 suratas + recursos avançados de memorização
                </p>
                <button
                  onClick={() => router.push('/upgrade')}
                  className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Ver Planos Premium
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
