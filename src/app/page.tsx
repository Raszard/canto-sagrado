"use client";

import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      
      {/* Efeito de brilho sutil no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-md space-y-8 text-center">
        
        {/* Logo + Nome do App */}
        <div className="space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/30 mb-4">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Khalwa
          </h1>
          
          <p className="text-indigo-300 text-sm font-medium tracking-wide">
            Canto Sagrado do Qur'an
          </p>
        </div>

        {/* Frase principal (headline) */}
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
            Transforme tempo de tela<br />em tempo com Allah
          </h2>
          
          {/* Texto de apoio */}
          <p className="text-indigo-200/80 text-base leading-relaxed max-w-sm mx-auto">
            No mesmo aparelho em que você se distrai, agora você terá um espaço reservado só para Qur'an, foco e paz interior.
          </p>
        </div>

        {/* Botões de ação */}
        <div className="space-y-4 pt-8">
          {/* Botão primário */}
          <button
            onClick={() => router.push('/signup')}
            className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-2xl hover:from-indigo-600 hover:to-purple-700 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-indigo-500/30"
          >
            Criar minha conta
          </button>

          {/* Botão secundário */}
          <button
            onClick={() => router.push('/login')}
            className="w-full px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-lg font-medium rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-[0.98] transition-all duration-200"
          >
            Já tenho conta
          </button>
        </div>

        {/* Texto de confiança */}
        <div className="pt-6">
          <p className="text-indigo-300/60 text-sm">
            ✨ Sem anúncios. Sem distrações. Só você e o Qur'an.
          </p>
        </div>
      </div>

      {/* Footer discreto */}
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <p className="text-indigo-400/40 text-xs">
          Com respeito e reverência ao Livro Sagrado de Allah
        </p>
      </div>
    </div>
  );
}
