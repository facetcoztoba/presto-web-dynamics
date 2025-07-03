
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="group border border-border/30 rounded-2xl overflow-hidden shadow-soft bg-surface-primary/80 backdrop-blur-md transition-all duration-500 hover:shadow-brand hover:border-primary-light/50 animate-stagger-fade-in relative"
          style={{
            animationDelay: `${index * 150}ms`,
            willChange: 'transform, box-shadow',
          }}
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-light/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-light to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
          
          <button
            className="relative flex justify-between items-center w-full p-7 text-left bg-transparent hover:bg-gradient-to-r hover:from-secondary/30 hover:to-accent/10 focus:outline-none focus:ring-2 focus:ring-primary-light/30 focus:ring-inset transition-all duration-500 transform hover:scale-[1.01]"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-bold text-foreground font-inter group-hover:text-primary transition-all duration-500 relative z-10">
              {item.title}
            </span>
            <div className="relative">
              <ChevronDown
                className={`w-6 h-6 text-primary-light transform transition-all duration-500 group-hover:text-primary group-hover:scale-110 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
              {/* Icon glow effect */}
              <div className="absolute inset-0 w-6 h-6 bg-primary-light/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </button>
          
          {openIndex === index && (
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-secondary/20" />
              <div className="px-7 pb-7 bg-secondary/20 border-t border-border/30 animate-accordion-down relative z-10">
                <div className="pt-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                  <p className="text-muted-foreground leading-relaxed font-inter text-base">
                    {item.content}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
