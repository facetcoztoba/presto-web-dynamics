
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
          className="group border border-gray-200/50 rounded-xl overflow-hidden shadow-soft bg-white/70 backdrop-blur-sm transition-all duration-300 hover:shadow-medium hover:border-primary-200"
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left bg-transparent hover:bg-gradient-to-r hover:from-primary-50/50 hover:to-transparent focus:outline-none transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-lg font-semibold text-gray-800 font-inter group-hover:text-primary-700 transition-colors duration-300">
              {item.title}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-primary-600 transform transition-all duration-300 group-hover:text-primary-700 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 bg-gradient-to-r from-gray-50/50 to-transparent border-t border-gray-100 animate-fade-in-up">
              <p className="text-gray-700 leading-relaxed font-inter pt-4">
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
