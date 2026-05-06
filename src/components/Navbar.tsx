import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { CATEGORIES } from '../constants';

export default function Navbar() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10"
    >
      <div className="max-w-screen-2xl mx-auto px-6 py-4 flex flex-col items-center gap-4">
        <a href="/" className="flex-shrink-0">
          <h1 className="font-noir text-white text-5xl md:text-7xl tracking-normal">
            REVIEW
          </h1>
        </a>

        <div className="flex justify-center gap-8 md:gap-16">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.slug}
              className="relative group py-2"
              onMouseEnter={() => setHoveredCategory(cat.slug)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <a 
                href={`#${cat.slug}`} 
                className="text-[9px] uppercase tracking-[0.4em] font-medium text-white/50 hover:text-white transition-colors block"
              >
                {cat.name}
              </a>

              <AnimatePresence>
                {cat.subcategories && hoveredCategory === cat.slug && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64 z-50"
                  >
                    <div className="bg-black border border-white/10 backdrop-blur-xl py-6 shadow-2xl">
                      <div className="flex flex-col gap-4">
                        {cat.subcategories.map((sub) => (
                          <a
                            key={sub.slug}
                            href={`#${sub.slug}`}
                            className="px-8 text-[8px] uppercase tracking-[0.3em] font-medium text-white/40 hover:text-white transition-colors"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
