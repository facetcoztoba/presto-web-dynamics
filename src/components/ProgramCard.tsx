
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  text: string;
  index: number;
  icon: LucideIcon;
  delay?: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  title, 
  text, 
  index, 
  icon: Icon, 
  delay = 0 
}) => {
  return (
    <div 
      className="group flex items-start p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl flex items-center justify-center mr-6 shadow-medium group-hover:shadow-large transition-all duration-300 group-hover:scale-110">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-2xl font-semibold text-gray-800 mb-3 font-inter group-hover:text-primary-700 transition-colors duration-300">
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
