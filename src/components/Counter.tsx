
import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  endDigit: number;
  title: string;
  text: string;
}

const Counter: React.FC<CounterProps> = ({ endDigit, title, text }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2000;
      const increment = endDigit / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= endDigit) {
          setCount(endDigit);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [isVisible, endDigit]);

  return (
    <div 
      ref={ref} 
      className="group text-center p-8 rounded-2xl shadow-soft bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-large hover:scale-105 hover:bg-white/90 border border-gray-100/50"
    >
      <div className="relative">
        <h3 className="text-5xl md:text-6xl font-extrabold text-brand-navy mb-3 font-inter transition-colors duration-300 group-hover:text-primary-600">
          {count}
          <span className="text-primary-500">+</span>
        </h3>
        <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-brand-blue-300/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <h4 className="text-xl font-semibold text-gray-800 mb-3 font-inter transition-colors duration-300 group-hover:text-gray-900">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed font-inter transition-colors duration-300 group-hover:text-gray-700">
        {text}
      </p>
    </div>
  );
};

export default Counter;
