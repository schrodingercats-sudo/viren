import React from 'react';
import { Reveal } from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="border-t border-gray-200 pt-16 md:pt-24">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium leading-tight mb-12 md:mb-16 max-w-4xl">
              Every project tells a unique story, thoughtfully designed to blend seamlessly with its surroundings. <br />
              <span className="font-serif italic">Are you ready to craft some magic?</span>
            </h2>
            
            <a 
              href="#contact" 
              className="inline-flex items-center gap-4 group"
            >
              <span className="text-sm font-medium uppercase tracking-wide border-b border-text pb-1">Get In Touch</span>
              <span className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowRight size={18} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};