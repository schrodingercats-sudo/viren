import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { Projects } from './components/home/Projects';
import { Services } from './components/home/Services';
import { Testimonials } from './components/home/Testimonials';
import { CTA } from './components/home/CTA';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-bg">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Testimonials />
        <CTA />
      </main>

      <Footer />

      {/* Skip Link for Accessibility */}
      <a 
        href="#hero" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-dark text-white px-4 py-2 rounded z-50"
      >
        Skip to content
      </a>
    </div>
  );
}

export default App;