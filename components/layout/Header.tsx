import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../constants';

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Observe the sentinel in the Hero section to toggle header visibility
  useEffect(() => {
    const sentinel = document.getElementById('hero-top-sentinel');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show header when sentinel is in view (at the top), hide when out of view
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0, // Trigger as soon as even 1px of the sentinel is visible/hidden
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 py-6 md:py-8 transition-all duration-500 ease-in-out ${
          // If menu is open, remove transform to fix stacking context for fixed children (though overlay is now outside)
          // keeping opacity logic for visual consistency
          isMobileMenuOpen 
            ? 'opacity-100' 
            : isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ transform: isMobileMenuOpen ? 'none' : undefined }}
        role="banner"
      >
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-serif flex items-center gap-1 z-50 relative text-text tracking-tight hover:opacity-80 transition-opacity">
            <span className="text-lg relative top-[3px] leading-none">*</span>
            <span>Viren</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" role="navigation">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-sm text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4 text-xs font-medium">
            <span className="text-muted">09:31:10 | UTC +7</span>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-4 py-2 bg-transparent hover:bg-surface rounded-full transition-colors group"
            >
              Let's Talk
              <span className="bg-dark text-white p-1 rounded-full group-hover:rotate-45 transition-transform duration-300">
                <ArrowRight size={12} />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 -mr-2 relative text-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - Placed OUTSIDE the header to avoid transform stacking context issues */}
      <div 
        className={`fixed inset-0 bg-bg z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {NAVIGATION_LINKS.map((link) => (
          <a 
            key={link.label} 
            href={link.href} 
            className="text-3xl font-serif italic text-text"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        
        <div className="mt-8 flex flex-col items-center gap-4">
           <span className="text-xs text-muted">09:31:10 | UTC +7</span>
           <a 
            href="#contact" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 px-6 py-3 bg-surface rounded-full text-sm font-medium"
          >
            Let's Talk
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </>
  );
};