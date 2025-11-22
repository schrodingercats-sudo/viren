import React from 'react';
import { Reveal } from '../ui/Reveal';
import { PROJECTS } from '../../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-bg">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <Reveal>
          <span className="block text-xs font-medium text-muted uppercase tracking-wider mb-4">Latest Works</span>
          <h2 className="text-4xl md:text-6xl leading-tight mb-16 max-w-3xl">
            Drive your project toward excellence with clarity.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={index * 100} className="group cursor-pointer">
              <div className="overflow-hidden bg-gray-100 mb-6 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-end border-b border-gray-200 pb-4">
                <div>
                   <h3 className="text-lg font-medium mb-1">{project.title}</h3>
                   <span className="text-xs text-muted">{project.category}</span>
                </div>
                <span className="text-xs text-muted">{project.date}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};