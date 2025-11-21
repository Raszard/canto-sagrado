import { Surah } from './types';

// Dados simplificados das suratas (demo)
export const SURAHS: Surah[] = [
  {
    number: 1,
    name: "الفاتحة",
    transliteration: "Al-Fatiha",
    translation: "A Abertura",
    verses: 7,
    revelation: "Meccan",
    isFree: true,
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\nالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ\nالرَّحْمَٰنِ الرَّحِيمِ\nمَالِكِ يَوْمِ الدِّينِ\nإِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ\nاهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ\nصِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
  },
  {
    number: 2,
    name: "البقرة",
    transliteration: "Al-Baqarah",
    translation: "A Vaca",
    verses: 286,
    revelation: "Medinan",
    isFree: false
  },
  {
    number: 3,
    name: "آل عمران",
    transliteration: "Ali 'Imran",
    translation: "A Família de Imran",
    verses: 200,
    revelation: "Medinan",
    isFree: false
  },
  {
    number: 109,
    name: "الكافرون",
    transliteration: "Al-Kafirun",
    translation: "Os Incrédulos",
    verses: 6,
    revelation: "Meccan",
    isFree: true,
    arabicText: "قُلْ يَا أَيُّهَا الْكَافِرُونَ\nلَا أَعْبُدُ مَا تَعْبُدُونَ\nوَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ\nوَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ\nوَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ\nلَكُمْ دِينُكُمْ وَلِيَ دِينِ"
  },
  {
    number: 110,
    name: "النصر",
    transliteration: "An-Nasr",
    translation: "O Socorro",
    verses: 3,
    revelation: "Medinan",
    isFree: true,
    arabicText: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ\nوَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا\nفَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا"
  },
  {
    number: 111,
    name: "المسد",
    transliteration: "Al-Masad",
    translation: "As Fibras",
    verses: 5,
    revelation: "Meccan",
    isFree: true,
    arabicText: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ\nمَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ\nسَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ\nوَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ\nفِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ"
  },
  {
    number: 112,
    name: "الإخلاص",
    transliteration: "Al-Ikhlas",
    translation: "A Pureza da Fé",
    verses: 4,
    revelation: "Meccan",
    isFree: true,
    arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ\nاللَّهُ الصَّمَدُ\nلَمْ يَلِدْ وَلَمْ يُولَدْ\nوَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"
  },
  {
    number: 113,
    name: "الفلق",
    transliteration: "Al-Falaq",
    translation: "A Aurora",
    verses: 5,
    revelation: "Meccan",
    isFree: true,
    arabicText: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ\nمِن شَرِّ مَا خَلَقَ\nوَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ\nوَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ\nوَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
  },
  {
    number: 114,
    name: "الناس",
    transliteration: "An-Nas",
    translation: "A Humanidade",
    verses: 6,
    revelation: "Meccan",
    isFree: true,
    arabicText: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ\nمَلِكِ النَّاسِ\nإِلَٰهِ النَّاسِ\nمِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ\nالَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ\nمِنَ الْجِنَّةِ وَالنَّاسِ"
  }
];

export const getFreeSurahs = () => SURAHS.filter(s => s.isFree);
export const getAllSurahs = () => SURAHS;
export const getSurahById = (id: number) => SURAHS.find(s => s.number === id);
