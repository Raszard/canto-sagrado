import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'gradient';
}

export function FeatureCard({ icon: Icon, title, description, variant = 'default' }: FeatureCardProps) {
  if (variant === 'gradient') {
    return (
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-lg">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-1">{title}</h3>
            <p className="text-sm text-emerald-50">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 p-5 rounded-xl hover:border-emerald-200 hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-emerald-50 rounded-lg">
          <Icon className="w-6 h-6 text-emerald-600" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
