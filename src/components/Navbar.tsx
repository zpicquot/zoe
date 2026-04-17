import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'
      }`}
    >
      <div className={`max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col items-center transition-all duration-500 ${
        isScrolled ? 'gap-0' : 'gap-8'
      }`}>
        <div className={`flex justify-center gap-12 md:gap-16 transition-all duration-500 ${
          isScrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'
        }`}>
          {CATEGORIES.map((cat) => (
            <a 
              key={cat.slug} 
              href={`#${cat.slug}`} 
              className="text-[9px] uppercase tracking-[0.5em] font-medium text-white/50 hover:text-white transition-colors"
            >
              {cat.name}
            </a>
          ))}
        </div>

        <a href="/" className="flex-shrink-0">
          <h1 className={`font-serif transition-all duration-500 text-center ${
            isScrolled 
              ? 'text-white text-xl md:text-2xl tracking-[0.3em]' 
              : 'masthead text-white'
          }`}>
            REVIEW
          </h1>
        </a>
      </div>
    </nav>
  );
}
