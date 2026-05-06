import { motion } from 'motion/react';
import { Article } from '../types';

interface FeaturedArticleProps {
  article: Article;
  onRead?: (article: Article) => void;
}

export default function FeaturedArticle({ article, onRead }: FeaturedArticleProps) {
  return (
    <section className="py-48 bg-black border-y border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-12"
          >
            <div className="relative aspect-[21/9] overflow-hidden group">
              <img 
                src={article.imageUrl} 
                alt={article.title}
                className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center space-y-8 bg-black/40 group-hover:bg-black/20 transition-all">
                <span className="text-white/60 text-[12px] uppercase tracking-[0.8em] font-medium">
                  The Cover Story
                </span>
                
                <h2 className="text-6xl md:text-7xl font-serif leading-[0.9] tracking-tighter text-white uppercase italic">
                  {article.title}
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
