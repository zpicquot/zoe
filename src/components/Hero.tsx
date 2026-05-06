import { motion } from 'motion/react';
import { Article } from '../types';

interface HeroProps {
  article: Article;
  onRead?: (article: Article) => void;
}

export default function Hero({ article, onRead }: HeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center pt-32 md:pt-48">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-24 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="lg:col-span-12 space-y-12 z-10 text-center"
        >
          <div className="space-y-6">
            <h2 className="text-6xl md:text-7xl font-serif leading-[1] tracking-tighter text-white uppercase italic">
              {article.title}
            </h2>
            <span className="text-white/50 text-[11px] uppercase tracking-[0.6em] font-medium block">
              {article.date}
            </span>
          </div>
          
          <div className="flex justify-center">
            <p className="text-white/60 text-xl font-light max-w-2xl leading-relaxed">
              {article.subtitle}
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
      </div>

      <div className="absolute bottom-12 right-6 md:right-24 hidden md:flex flex-col items-center gap-4">
      </div>
    </section>
  );
}
