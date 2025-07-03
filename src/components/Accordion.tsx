import React, { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Pierwszy element domyślnie otwarty

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`group relative border border-border/30 rounded-2xl overflow-hidden bg-surface-primary/80 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-500 ${
            openIndex === index ? 'border-primary-light/40 shadow-lg' : 'hover:border-border/50'
          }`}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r from-primary-light/3 via-transparent to-primary/3 opacity-0 transition-opacity duration-500 ${
            openIndex === index ? 'opacity-100' : 'group-hover:opacity-50'
          }`}></div>
          
          <button
            className="relative z-10 flex justify-between items-center w-full p-6 lg:p-7 text-left hover:bg-muted/30 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center space-x-4">
              {/* Icon */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-primary-light/20 text-primary-light' 
                  : 'bg-muted/30 text-muted-foreground group-hover:bg-primary-light/10 group-hover:text-primary-light'
              }`}>
                {item.icon || <CheckCircle className="w-4 h-4" />}
              </div>
              
              {/* Title */}
              <span className={`text-lg lg:text-xl font-semibold font-inter transition-colors duration-300 ${
                openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'
              }`}>
                {item.title}
              </span>
            </div>
            
            {/* Chevron */}
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-all duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-180 text-primary-light' : 'group-hover:text-primary-light'
              }`}
            />
          </button>
          
          {/* Content */}
          <div className={`relative z-10 overflow-hidden transition-all duration-500 ease-out ${
            openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="px-6 lg:px-7 pb-6 lg:pb-7 border-t border-border/20">
              <div className="pt-4 lg:pt-5">
                <p className="text-muted-foreground leading-relaxed font-inter text-base lg:text-lg">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;