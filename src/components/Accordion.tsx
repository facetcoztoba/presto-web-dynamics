
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
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="group border border-border/50 rounded-xl overflow-hidden shadow-soft bg-surface-primary/70 backdrop-blur-sm transition-all duration-300 hover:shadow-medium hover:border-primary-light/30"
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left bg-transparent hover:bg-secondary/50 focus:outline-none transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold text-foreground font-inter group-hover:text-primary transition-colors duration-300">
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-primary-light transform transition-all duration-300 group-hover:text-primary ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 bg-secondary/30 border-t border-border animate-fade-in-up">
              <p className="text-muted-foreground leading-relaxed font-inter pt-4">
                {item.content}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
