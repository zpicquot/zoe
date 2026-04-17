import { motion, useScroll, useSpring } from 'motion/react';
import { Article } from '../types';
import { useEffect, useRef } from 'react';

interface ArticleViewProps {
  article: Article;
  allArticles: Article[];
  onClose: () => void;
  onArticleSelect: (article: Article) => void;
}

export default function ArticleView({ article, allArticles, onClose, onArticleSelect }: ArticleViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Find related articles (same category, excluding current)
  const relatedArticles = allArticles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  useEffect(() => {
    // Lock body scroll when article is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black overflow-y-auto scroll-smooth"
    >
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-white z-[110] origin-left"
        style={{ scaleX }}
      />

      {/* Header */}
      <div className="sticky top-0 z-[105] bg-black/90 backdrop-blur-md border-b border-white/5 py-6 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h2 className="text-xl font-serif tracking-[0.2em] text-white">REVIEW</h2>
          <div className="hidden md:block w-[1px] h-4 bg-white/10" />
          <span className="hidden md:block text-[9px] uppercase tracking-[0.3em] font-medium text-white/30 truncate max-w-[200px]">
            {article.title}
          </span>
        </div>
        <div className="flex items-center gap-12">
          <button 
            onClick={onClose}
            className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40 hover:text-white transition-all flex items-center gap-3 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-screen-xl mx-auto px-6 md:px-12 py-32 bg-black">
        <div className="max-w-3xl mx-auto">
          <header className="mb-32 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-[11px] uppercase tracking-[0.6em] font-medium mb-8 block"
            >
              {article.category} — {article.date}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-8xl font-serif leading-[0.9] tracking-tighter text-white uppercase italic mb-12"
            >
              {article.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl font-light text-white/50 leading-relaxed italic"
            >
              {article.subtitle || article.excerpt}
            </motion.p>
          </header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="aspect-[16/9] mb-32 overflow-hidden border border-white/5"
          >
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover grayscale brightness-75"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div 
            className="article-body prose prose-invert prose-xl max-w-none font-serif leading-relaxed text-white/80 text-xl mb-32"
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />

          {article.quote && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="my-32 p-16 border-y border-white/5 text-center"
            >
              <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight text-white/60">
                "{article.quote}"
              </blockquote>
            </motion.div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-48 pt-32 border-t border-white/5">
              <h3 className="text-[10px] uppercase tracking-[0.6em] font-bold mb-24 text-center text-white/20">Related Registry</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {relatedArticles.map((rel) => (
                  <button 
                    key={rel.id}
                    onClick={() => {
                      onArticleSelect(rel);
                      containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group text-left space-y-6"
                  >
                    <div className="aspect-[3/4] overflow-hidden border border-white/5">
                      <img 
                        src={rel.imageUrl} 
                        alt={rel.title}
                        className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-1000"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <span className="text-[9px] uppercase tracking-widest font-bold text-white/30 block">{rel.category}</span>
                      <h4 className="text-lg font-serif leading-tight text-white group-hover:italic transition-all">{rel.title}</h4>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          )}

          <footer className="mt-48 pb-32 flex flex-col items-center gap-16">
            <div className="w-16 h-[1px] bg-white/10" />
            <button 
              onClick={onClose}
              className="px-16 py-5 border border-white/10 rounded-full text-[11px] uppercase tracking-[0.4em] font-bold text-white/40 hover:bg-white hover:text-black hover:border-white transition-all"
            >
              Return to Archives
            </button>
          </footer>
        </div>
      </article>
    </motion.div>
  );
}
