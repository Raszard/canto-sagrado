"use client";

import { useRouter } from 'next/navigation';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integrará com Supabase depois
    console.log('Login:', formData);
    router.push('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 flex flex-col px-6 py-8">
      
      {/* Header com botão voltar */}
      <div className="mb-8">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-indigo-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Voltar</span>
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          
          {/* Título */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-white">
              Bem-vindo de volta
            </h1>
            <p className="text-indigo-300/80">
              Continue sua jornada espiritual
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Campo Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-indigo-200">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" />
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-indigo-200">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-400" />
                <input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-indigo-400/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Sua senha"
                />
              </div>
            </div>

            {/* Link esqueci senha */}
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Esqueci minha senha
              </button>
            </div>

            {/* Botão submit */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg font-semibold rounded-xl hover:from-indigo-600 hover:to-purple-700 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-indigo-500/30 mt-8"
            >
              Entrar
            </button>
          </form>

          {/* Link para signup */}
          <div className="text-center">
            <p className="text-indigo-300/60 text-sm">
              Ainda não tem conta?{' '}
              <button
                onClick={() => router.push('/signup')}
                className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
              >
                Criar conta
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
