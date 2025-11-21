import { Lock } from 'lucide-react';

interface SurahCardProps {
  number: number;
  name: string;
  transliteration: string;
  translation: string;
  verses: number;
  isSelected: boolean;
  isFree: boolean;
  onClick: () => void;
}

export function SurahCard({
  number,
  name,
  transliteration,
  translation,
  verses,
  isSelected,
  isFree,
  onClick
}: SurahCardProps) {
  if (!isFree) {
    return (
      <div className="relative">
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 opacity-60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-500">{transliteration}</div>
              <div className="text-sm text-gray-400">{translation}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`
        w-full p-4 rounded-xl text-left transition-all duration-200
        ${isSelected
          ? 'bg-emerald-50 border-2 border-emerald-600 shadow-md'
          : 'bg-white border border-gray-200 hover:border-emerald-300 hover:shadow-sm'
        }
      `}
    >
      <div className="flex items-center gap-3">
        <div className={`
          w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm
          ${isSelected
            ? 'bg-emerald-600 text-white'
            : 'bg-gray-100 text-gray-600'
          }
        `}>
          {number}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-gray-900 truncate">
            {transliteration}
          </div>
          <div className="text-sm text-gray-600 truncate">
            {translation}
          </div>
          <div className="text-xs text-gray-500 mt-1">
            {verses} versos
          </div>
        </div>
      </div>
    </button>
  );
}
