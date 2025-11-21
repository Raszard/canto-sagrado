import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  onBack?: () => void;
  backUrl?: string;
  rightAction?: React.ReactNode;
}

export function PageHeader({ title, subtitle, onBack, backUrl, rightAction }: PageHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else if (backUrl) {
      router.push(backUrl);
    } else {
      router.back();
    }
  };

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-gray-100 z-10">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Voltar"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-xl text-gray-900">{title}</h1>
            {subtitle && (
              <p className="text-sm text-gray-600">{subtitle}</p>
            )}
          </div>
          {rightAction && (
            <div>{rightAction}</div>
          )}
        </div>
      </div>
    </header>
  );
}
