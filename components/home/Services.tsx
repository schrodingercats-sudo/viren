import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SERVICES } from '../../constants';

export const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-dark text-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Title & Intro */}
          <div className="lg:col-span-5">
             <Reveal>
              <span className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-6 md:mb-8">Our Services</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-sans font-light mb-8 md:mb-12">
                Take complete charge of your compensation strategy.
              </h2>
              {activeIndex !== null && (
                <div className="hidden lg:block mt-12 animate-fade-in">
                   <img 
                      src={SERVICES[activeIndex].image} 
                      alt="Service Preview" 
                      className="w-full max-w-sm aspect-video object-cover grayscale opacity-80"
                   />
                </div>
              )}
             </Reveal>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-7">
            <div className="border-t border-white/20">
              {SERVICES.map((service, index) => (
                <div key={service.id} className="border-b border-white/20">
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`service-content-${service.id}`}
                    className="w-full py-6 md:py-8 flex items-start justify-between group text-left focus:outline-none"
                  >
                    <div className="flex items-baseline gap-3 md:gap-8 pr-4">
                      <span className="text-xl sm:text-2xl md:text-3xl font-light text-white/40 group-hover:text-white transition-colors font-serif italic">
                        {service.title}
                      </span>
                      <span className="text-xs text-white/40 align-top shrink-0">{service.count}</span>
                    </div>
                    <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : ''} opacity-50 group-hover:opacity-100 mt-1`}>
                      <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                    </span>
                  </button>
                  
                  <div
                    id={`service-content-${service.id}`}
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-gray-400 max-w-md pl-0 md:pl-1 text-sm md:text-base">
                      {service.description}
                    </p>
                    <div className="lg:hidden mt-4">
                       <img src={service.image} alt="" className="w-full h-48 object-cover opacity-50 grayscale" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};