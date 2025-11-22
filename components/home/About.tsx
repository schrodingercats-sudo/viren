import React, { useEffect, useRef } from 'react';
import { Reveal } from '../ui/Reveal';
import { ArrowRight } from 'lucide-react';
import { STATS } from '../../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <Reveal>
          <span className="block text-xs font-medium text-muted uppercase tracking-wider mb-8 md:mb-12">Introduction</span>
          <h2 className="text-4xl md:text-6xl font-serif mb-12 md:mb-20">About Me</h2>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-12">
          {/* Left Column: Text */}
          <div className="md:col-span-4">
            <Reveal delay={100}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-muted text-sm">Meet</span>
                <div className="h-[1px] w-12 bg-gray-300"></div>
                <span className="font-serif italic">Viren</span>
              </div>
              <p className="text-muted leading-relaxed mb-8 text-sm md:text-base">
                I'm all about turning tricky problems into smooth, easy-to-use designs—taking ideas from research to polished prototypes. I love making things intuitive, accessible, and visually awesome, and I thrive on collaborating with teams.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity group">
                <span className="border-b border-text pb-0.5">Contact Me</span>
                <span className="bg-dark text-white rounded-full p-1 group-hover:bg-text transition-colors">
                   <ArrowRight size={12} />
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right Column: Stats Grid */}
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16">
              {STATS.map((stat, index) => (
                <Reveal key={index} delay={200 + (index * 100)}>
                  <div>
                    <div className="text-4xl md:text-6xl font-light mb-4 font-sans">
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted max-w-[200px] leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};