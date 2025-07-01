
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  text: string;
  index: number;
  icon: LucideIcon;
  delay?: number;
  variant?: 'default' | 'green' | 'purple' | 'orange' | 'pink' | 'teal';
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  text, 
  index, 
  icon: Icon, 
  delay = 0,
  variant = 'default'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'green':
        return {
          cardBg: 'bg-gradient-to-br from-green-50 to-emerald-100/50',
          iconBg: 'bg-gradient-to-br from-green-500 to-emerald-600',
          iconShadow: 'shadow-green-200',
          titleHover: 'group-hover:text-green-700',
          hoverEffect: 'hover:shadow-green-100/50'
        };
      case 'purple':
        return {
          cardBg: 'bg-gradient-to-br from-purple-50 to-violet-100/50',
          iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600',
          iconShadow: 'shadow-purple-200',
          titleHover: 'group-hover:text-purple-700',
          hoverEffect: 'hover:shadow-purple-100/50'
        };
      case 'orange':
        return {
          cardBg: 'bg-gradient-to-br from-orange-50 to-amber-100/50',
          iconBg: 'bg-gradient-to-br from-orange-500 to-amber-600',
          iconShadow: 'shadow-orange-200',
          titleHover: 'group-hover:text-orange-700',
          hoverEffect: 'hover:shadow-orange-100/50 hover:rotate-1'
        };
      case 'pink':
        return {
          cardBg: 'bg-gradient-to-br from-pink-50 to-rose-100/50',
          iconBg: 'bg-gradient-to-br from-pink-500 to-rose-600',
          iconShadow: 'shadow-pink-200',
          titleHover: 'group-hover:text-pink-700',
          hoverEffect: 'hover:shadow-pink-100/50'
        };
      case 'teal':
        return {
          cardBg: 'bg-gradient-to-br from-teal-50 to-cyan-100/50',
          iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-600',
          iconShadow: 'shadow-teal-200',
          titleHover: 'group-hover:text-teal-700',
          hoverEffect: 'hover:shadow-teal-100/50 hover:-translate-y-2'
        };
      default:
        return {
          cardBg: 'bg-white/70',
          iconBg: 'bg-gradient-to-br from-primary-600 to-primary-700',
          iconShadow: 'shadow-medium',
          titleHover: 'group-hover:text-primary-700',
          hoverEffect: 'hover:shadow-medium'
        };
    }
  };

  const styles = getVariantStyles();
  const isReversed = variant === 'green' || variant === 'orange';
  const iconSize = variant === 'purple' ? 'w-14 h-14' : 'w-12 h-12';
  const iconScale = variant === 'purple' ? 'w-7 h-7' : 'w-6 h-6';

  return (
    <div 
      className={`group flex ${isReversed ? 'flex-row-reverse' : 'items-start'} p-6 rounded-2xl ${styles.cardBg} backdrop-blur-sm shadow-soft ${styles.hoverEffect} transition-all duration-300 hover:scale-105 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`flex-shrink-0 ${iconSize} ${styles.iconBg} text-white rounded-xl flex items-center justify-center ${isReversed ? 'ml-6' : 'mr-6'} ${styles.iconShadow} group-hover:shadow-large transition-all duration-300 group-hover:scale-110`}>
        <Icon className={iconScale} />
      </div>
      <div className={isReversed ? 'text-right' : ''}>
        <h4 className={`text-2xl font-semibold text-gray-800 mb-3 font-inter ${styles.titleHover} transition-colors duration-300`}>
          {title}
        </h4>
        <p className="text-gray-600 leading-relaxed font-inter group-hover:text-gray-700 transition-colors duration-300">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ProgramCard;
