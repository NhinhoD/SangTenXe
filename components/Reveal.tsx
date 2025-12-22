
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  effect?: 'up' | 'left' | 'right' | 'none';
  delay?: number;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  effect = 'up', 
  delay = 0,
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  const effectClass = 
    effect === 'up' ? 'reveal-up' : 
    effect === 'left' ? 'reveal-left' : 
    effect === 'right' ? 'reveal-right' : '';

  return (
    <div 
      ref={ref} 
      className={`reveal ${effectClass} ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
