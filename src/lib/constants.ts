// Constantes do app Sakina

export const APP_NAME = "Sakina";
export const APP_TAGLINE = "Transforme tempo de tela em tempo com Allah";
export const APP_DESCRIPTION = "No mesmo aparelho em que você perde horas rolando a tela, agora você terá um espaço reservado só para Quran, foco e paz interior.";

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Qual idioma você prefere?",
    subtitle: "Vamos personalizar sua experiência",
    options: [
      { value: 'pt', label: 'Português', emoji: '🇧🇷' },
      { value: 'en', label: 'English', emoji: '🇺🇸' },
      { value: 'ar', label: 'العربية', emoji: '🇸🇦' },
      { value: 'es', label: 'Español', emoji: '🇪🇸' },
    ]
  },
  {
    id: 2,
    question: "Onde você está?",
    subtitle: "Para ajustar horários de oração e lembretes",
    options: [
      { value: 'America/Sao_Paulo', label: 'Brasil (São Paulo)', emoji: '🇧🇷' },
      { value: 'America/New_York', label: 'EUA (Nova York)', emoji: '🇺🇸' },
      { value: 'Europe/London', label: 'Reino Unido', emoji: '🇬🇧' },
      { value: 'Asia/Dubai', label: 'Emirados Árabes', emoji: '🇦🇪' },
      { value: 'Asia/Riyadh', label: 'Arábia Saudita', emoji: '🇸🇦' },
    ]
  },
  {
    id: 3,
    question: "Qual seu melhor momento do dia?",
    subtitle: "Vamos sugerir horários ideais para você",
    options: [
      { value: 'morning', label: 'Manhã (Fajr/Dhuhr)', emoji: '🌅' },
      { value: 'afternoon', label: 'Tarde (Asr)', emoji: '☀️' },
      { value: 'evening', label: 'Noite (Maghrib)', emoji: '🌆' },
      { value: 'night', label: 'Madrugada (Isha)', emoji: '🌙' },
      { value: 'flexible', label: 'Flexível', emoji: '⏰' },
    ]
  },
  {
    id: 4,
    question: "Qual sua experiência com o Quran?",
    subtitle: "Sem julgamentos, apenas para personalizar",
    options: [
      { value: 'beginner', label: 'Iniciante', description: 'Estou começando agora' },
      { value: 'intermediate', label: 'Intermediário', description: 'Leio regularmente' },
      { value: 'advanced', label: 'Avançado', description: 'Pratico memorização' },
    ]
  },
  {
    id: 5,
    question: "Qual seu objetivo principal?",
    subtitle: "Vamos focar no que importa para você",
    options: [
      { value: 'read', label: 'Ler mais', description: 'Completar a leitura do Quran', emoji: '📖' },
      { value: 'memorize', label: 'Memorizar', description: 'Hifz e revisão espaçada', emoji: '🧠' },
      { value: 'listen', label: 'Ouvir recitações', description: 'Conectar através do áudio', emoji: '🎧' },
      { value: 'habit', label: 'Criar hábito', description: 'Consistência diária', emoji: '✨' },
    ]
  },
  {
    id: 6,
    question: "Quanto tempo você tem por dia?",
    subtitle: "Vamos criar metas realistas",
    options: [
      { value: '3-5', label: '3-5 minutos', description: 'Sessões rápidas' },
      { value: '5-10', label: '5-10 minutos', description: 'Equilíbrio ideal' },
      { value: '10-20', label: '10-20 minutos', description: 'Imersão moderada' },
      { value: '20+', label: '20+ minutos', description: 'Dedicação profunda' },
    ]
  },
  {
    id: 7,
    question: "Quer lembretes gentis?",
    subtitle: "Notificações discretas nos seus horários ideais",
    options: [
      { value: true, label: 'Sim, me ajude a lembrar', emoji: '🔔' },
      { value: false, label: 'Não, eu gerencio sozinho', emoji: '🔕' },
    ]
  }
];

export const FREE_SURAHS = [1, 112, 113, 114, 109, 110, 111]; // Al-Fatiha + últimas 6 suratas

export const PREMIUM_FEATURES = [
  "Alcorão completo (114 suratas)",
  "10+ recitadores renomados",
  "Download offline de áudios",
  "Modo memorização (Hifz) com IA",
  "Tajweed colorido",
  "Múltiplas traduções",
  "Estatísticas de progresso",
  "Lembretes inteligentes",
  "Temas visuais premium",
  "Sem anúncios, sem distrações"
];

export const PRICING = {
  monthly: {
    price: 9.90,
    currency: 'R$',
    period: '/mês'
  },
  yearly: {
    price: 89.90,
    currency: 'R$',
    period: '/ano',
    discount: '25% OFF'
  }
};
