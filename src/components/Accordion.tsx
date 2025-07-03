
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
          className="border border-border rounded-lg overflow-hidden bg-surface-primary shadow-soft hover:shadow-medium transition-all duration-300"
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors duration-200"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold text-foreground font-inter">
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-6 border-t border-border animate-accordion-down">
              <div className="pt-4">
                <p className="text-muted-foreground leading-relaxed font-inter">
                  {item.content}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
