
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
      className="group bg-surface-primary rounded-xl border border-border p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-14 h-14 bg-secondary text-muted-foreground rounded-lg flex items-center justify-center group-hover:bg-secondary-hover transition-colors duration-300">
          <Icon className="w-7 h-7" />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-sm font-semibold text-muted-foreground tracking-wider">
              {String(index).padStart(2, '0')}
            </span>
            <div className="h-px bg-border flex-1"></div>
          </div>
          <h4 className="text-xl font-bold text-foreground mb-3 font-inter group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          <p className="text-muted-foreground leading-relaxed font-inter text-sm group-hover:text-foreground transition-colors duration-300">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
