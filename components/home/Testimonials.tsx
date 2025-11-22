import React from 'react';
import { Reveal } from '../ui/Reveal';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-bg border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <Reveal>
           <span className="block text-xs font-medium text-muted uppercase tracking-wider mb-8">Testimonials</span>
        </Reveal>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-sans tracking-tight mb-6 md:mb-8">
              Trusted by <br />
              <span className="border-b-2 border-text pb-2">many.</span>
            </h2>
            <p className="text-muted max-w-xs text-sm leading-relaxed">
              Here's what people have to say about working together. Real moments, real experiences, real feedback.
            </p>
          </Reveal>

          <Reveal delay={200} className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl md:text-4xl font-serif leading-tight mb-6">
                Really loved the Braindaze logo design. Great work!
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-8 md:mb-12">
                Smith J's expertise and dedication are truly unmatched. Their insights and professionalism have made a remarkable impact on our success. Highly recommended!
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <img src="https://picsum.photos/50/50?random=user" alt="User" className="w-12 h-12 rounded-md object-cover" />
                 <div>
                   <div className="flex text-text text-[10px] mb-1">
                      {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                   </div>
                   <span className="text-sm font-medium block">Smooth K</span>
                 </div>
              </div>
              
              <div className="text-gray-200">
                <Quote size={48} className="md:w-16 md:h-16 transform rotate-180" />
              </div>
            </div>

            {/* Simple Navigation Controls */}
            <div className="flex items-center gap-4 mt-8 md:mt-12">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-muted hover:bg-gray-50 transition-colors" aria-label="Previous testimonial">
                 <ArrowLeft size={16} />
              </button>
              <button className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-black transition-colors" aria-label="Next testimonial">
                 <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};