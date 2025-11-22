import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-16 md:pt-24 pb-8 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        
        <div className="grid md:grid-cols-12 gap-12 mb-16 md:mb-32">
          {/* Contact Info */}
          <div className="md:col-span-4">
            <p className="text-xs text-gray-500 mb-2">(312) 555-2468</p>
            <a href="mailto:hello@Viren.com" className="text-xl hover:text-gray-300 transition-colors mb-8 block">hello@Viren.com</a>
            
            <div className="text-xs text-gray-500 space-y-1">
              <p>© 2025 Viren Portfolio</p>
              <p>ABN: 68 674 830 981.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Social Links - Centered visually on desktop roughly */}
          <div className="md:col-span-4 flex flex-col md:items-center">
             <div className="space-y-2">
               {['Twitter', 'Instagram', 'Dribbble'].map(social => (
                 <a key={social} href="#" className="flex items-center gap-1 text-2xl md:text-3xl font-light hover:pl-2 transition-all">
                   {social} <span className="text-xs align-top">↗</span>
                 </a>
               ))}
             </div>
          </div>

          {/* Nav Columns */}
          <div className="md:col-span-4 flex justify-between md:justify-end gap-16">
             <div>
               <h4 className="text-xs text-gray-500 mb-4 uppercase">Navigation</h4>
               <ul className="space-y-2 text-sm text-gray-300">
                 <li><a href="#" className="hover:text-white">Home</a></li>
                 <li><a href="#" className="hover:text-white">About</a></li>
                 <li><a href="#" className="hover:text-white">Projects</a></li>
                 <li><a href="#" className="hover:text-white">Contact</a></li>
               </ul>
             </div>
             <div>
               <h4 className="text-xs text-gray-500 mb-4 uppercase">Resources</h4>
               <ul className="space-y-2 text-sm text-gray-300">
                 <li><a href="#" className="hover:text-white">Styleguide</a></li>
                 <li><a href="#" className="hover:text-white">Licenses</a></li>
                 <li><a href="#" className="hover:text-white">Instructions</a></li>
                 <li><a href="#" className="hover:text-white">Changelog</a></li>
               </ul>
             </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 relative z-20">
           <div className="text-xs text-gray-500 mb-4 md:mb-0 order-2 md:order-1 self-start md:self-auto pl-12 md:pl-0">
             Design by Viren
           </div>
           
           <div className="relative w-full md:w-auto text-center md:text-right order-1 md:order-2 mb-8 md:mb-0">
              <span className="text-xs text-gray-500 absolute top-0 right-0 -mt-8 md:static md:mt-0 hidden md:block">• 2024 — Viren™</span>
              <h1 className="text-[15vw] md:text-[12rem] leading-none font-serif italic select-none">Viren</h1>
           </div>
        </div>
        
        {/* Mobile Asterisk - Moved to left for consistency */}
        <div className="absolute bottom-4 left-4 text-gray-600 text-6xl md:hidden opacity-40 pointer-events-none select-none font-serif leading-none z-10">
           *
        </div>

        {/* Desktop Decorative Asterisk - Changed from fixed to absolute */}
        <div className="hidden md:block absolute bottom-[-1rem] left-8 pointer-events-none text-gray-700 text-9xl leading-none select-none z-10 font-serif opacity-50">
          *
        </div>
      </div>
    </footer>
  );
};