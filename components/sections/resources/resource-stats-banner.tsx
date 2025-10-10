import { BookOpen, FolderOpen, Clock } from 'lucide-react';
import { cn } from 'website/lib/utils';

interface ResourceStatsBannerProps {
  totalResources: number;
  totalCategories: number;
  className?: string;
}

export default function ResourceStatsBanner({
  totalResources,
  totalCategories,
  className,
}: ResourceStatsBannerProps) {
  const stats = [
    {
      icon: BookOpen,
      value: `${totalResources}+`,
      label: 'Expert Resources',
      color: 'text-blue-500',
      bgColor: 'bg-blue-100',
    },
    {
      icon: FolderOpen,
      value: totalCategories.toString(),
      label: 'Categories',
      color: 'text-green-500',
      bgColor: 'bg-green-100',
    },
    {
      icon: Clock,
      value: 'Weekly',
      label: 'Updated',
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <div
      className={cn(
        'bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-lg p-4 sm:p-6',
        className
      )}
      style={{ borderRadius: '20px 24px 18px 22px' }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-12">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex items-center gap-3 sm:gap-4">
              {/* Icon */}
              <div
                className={cn('p-3 rounded-xl', stat.bgColor)}
                style={{ borderRadius: '12px 14px 10px 16px' }}
              >
                <Icon className={cn('w-6 h-6 sm:w-7 sm:h-7', stat.color)} />
              </div>

              {/* Value and label */}
              <div className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-quicksand font-bold text-gray-800">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-nunito text-gray-600">
                  {stat.label}
                </div>
              </div>

              {/* Divider (not on last item) */}
              {index < stats.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-gray-300 ml-4" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
