import { Check } from 'lucide-react';
import { ReactNode } from 'react';

interface QuizOptionProps {
  label: string;
  description?: string;
  emoji?: string;
  icon?: ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

export function QuizOption({ 
  label, 
  description, 
  emoji, 
  icon,
  isSelected, 
  onClick 
}: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-5 rounded-xl border-2 text-left transition-all duration-200
        ${isSelected 
          ? 'border-emerald-600 bg-emerald-50 shadow-md' 
          : 'border-gray-200 bg-white hover:border-emerald-300 hover:shadow-sm'
        }
      `}
    >
      <div className="flex items-center gap-4">
        {/* Emoji ou ícone */}
        {emoji && (
          <span className="text-2xl">{emoji}</span>
        )}
        {icon && (
          <div className="text-emerald-600">{icon}</div>
        )}
        
        {/* Conteúdo */}
        <div className="flex-1">
          <div className="font-semibold text-gray-900">
            {label}
          </div>
          {description && (
            <div className="text-sm text-gray-600 mt-1">
              {description}
            </div>
          )}
        </div>

        {/* Check icon */}
        {isSelected && (
          <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
    </button>
  );
}
