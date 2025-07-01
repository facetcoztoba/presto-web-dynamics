
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
    <div ref={ref} className="text-center p-6 rounded-lg shadow-lg bg-white bg-opacity-90 transition-transform transform hover:scale-105">
      <h3 className="text-5xl font-extrabold text-blue-800 mb-2">{count}+</h3>
      <h4 className="text-xl font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
};

export default Counter;
