import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  textAlign?: React.CSSProperties['textAlign'];
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 0,
  duration = 0.8,
  ease = 'power3.out',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  tag = 'span',
  textAlign = 'left'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('.split-char');
    
    gsap.fromTo(
      chars,
      from,
      {
        ...to,
        duration,
        ease,
        stagger: 0.03,
        delay: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, { scope: containerRef, dependencies: [text, delay, duration, JSON.stringify(from), JSON.stringify(to)] });

  const Tag = tag as any;

  // Manual text splitting logic to avoid needing the paid Plugin
  const renderContent = () => {
    return text.split('').map((char, i) => (
      <span key={i} className="split-char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <Tag ref={containerRef} className={`${className}`} style={{ textAlign }}>
      {renderContent()}
    </Tag>
  );
};

export default SplitText;