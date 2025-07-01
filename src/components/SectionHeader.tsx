
import React from 'react';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  subtitle, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`text-center mb-16 animate-fade-in-up ${className}`}>
      {subtitle && (
        <p className="text-lg text-primary-600 mb-2 font-medium font-inter tracking-wide">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-inter bg-gradient-to-r from-brand-navy to-gray-700 bg-clip-text text-transparent">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-inter mt-8">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
