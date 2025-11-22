import React, { useEffect, useRef } from 'react';
import { Reveal } from '../ui/Reveal';
import SplitText from '../ui/SplitText';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && window.innerWidth > 768) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden">
      {/* Sentinel for Header visibility - matches ~128px scroll threshold */}
      <div id="hero-top-sentinel" className="absolute top-0 left-0 w-full h-32 pointer-events-none opacity-0 z-0" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative">
        
        {/* Circular Badge - Top Left */}
        <div className="absolute top-0 left-4 md:left-8 md:-top-10 hidden md:flex items-center justify-center z-20">
          {/* Root Badge Container: White Disc with depth shadows */}
          <div className="relative w-32 h-32 rounded-full bg-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] ring-1 ring-gray-50/50 flex items-center justify-center isolate">
            
            {/* Deep Inner Shadow creating the 'semi-circle' depth look */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_12px_24px_-6px_rgba(0,0,0,0.12)] pointer-events-none z-10" />
            {/* Softer ambient inner shadow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_4px_8px_rgba(0,0,0,0.05)] pointer-events-none z-10" />

            {/* Rotating Text Ring */}
            <div className="absolute inset-0 animate-spin-slow motion-reduce:animate-none z-0">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePath"
                  d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                  fill="transparent"
                />
                <text className="text-[9.5px] font-sans font-medium tracking-[0.18em] uppercase fill-text">
                  <textPath href="#circlePath" startOffset="0%" textLength="236">
                    Open For Projects * Open For Projects *
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Static Inner Circle & Arrow - Small pupil size */}
            <div className="relative z-20 w-[34%] h-[34%] bg-dark rounded-full flex items-center justify-center text-white shadow-md">
              <ArrowUpRight strokeWidth={1.5} size={16} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center" ref={parallaxRef}>
          <Reveal>
            <div className="mb-8 relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto bg-gray-200">
                <img 
                  src="https://picsum.photos/200/200?grayscale" 
                  alt="Viren Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 text-text font-normal flex flex-col items-center gap-2 md:gap-4">
            <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-5">
              <SplitText 
                text="I'm" 
                className="inline-block" 
                delay={100} 
              />
              <SplitText 
                text="Viren," 
                className="inline-block font-serif italic font-medium" 
                delay={200} 
              />
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-5">
               <SplitText 
                text="a" 
                className="inline-block" 
                delay={300} 
              />
              <SplitText 
                text="Product" 
                className="inline-block font-serif italic font-medium" 
                delay={350} 
              />
               <SplitText 
                text="Designer" 
                className="inline-block font-serif italic font-medium" 
                delay={450} 
              />
            </div>
            <div className="flex flex-wrap justify-center gap-x-3 md:gap-x-5">
               <SplitText 
                text="based" 
                className="inline-block" 
                delay={550} 
              />
               <SplitText 
                text="in" 
                className="inline-block" 
                delay={600} 
              />
              <SplitText 
                text="Venice" 
                className="inline-block font-serif italic font-medium" 
                delay={650} 
              />
            </div>
          </div>

          <Reveal delay={800}>
            <p className="max-w-lg mx-auto text-muted text-sm md:text-base leading-relaxed px-4">
              I have 11 years of experience working on useful and mindful products together with startups and known Brands.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};