import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
  reciterName?: string;
  progress?: number;
}

export function AudioPlayer({ 
  isPlaying, 
  onToggle, 
  reciterName = 'Sheikh Mishary Rashid Alafasy',
  progress = 0 
}: AudioPlayerProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggle}
          className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-colors shadow-lg flex-shrink-0"
          aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" fill="white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          )}
        </button>
        
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-gray-900 mb-2 truncate">
            Recitação de {reciterName}
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-emerald-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
