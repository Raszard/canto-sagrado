interface ProgressBarProps {
  current: number;
  total: number;
  showPercentage?: boolean;
  className?: string;
}

export function ProgressBar({ current, total, showPercentage = true, className = '' }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className={className}>
      {showPercentage && (
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Passo {current} de {total}</span>
          <span className="font-medium">{percentage}%</span>
        </div>
      )}
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
