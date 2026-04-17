import { motion } from 'motion/react';
import { Article } from '../types';

interface ArticleCardProps {
  article: Article;
  index: number;
  onClick?: (article: Article) => void;
  key?: string | number;
}

export default function ArticleCard({ article, index, onClick }: ArticleCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group cursor-pointer space-y-6"
      onClick={() => onClick?.(article)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-white/5 p-4 border border-white/5 group-hover:border-white/20 transition-all">
        <motion.img 
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src={article.imageUrl} 
          alt={article.title}
          className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="space-y-3">
        <span className="text-[9px] uppercase tracking-[0.5em] font-medium text-white/40">
          {article.category}
        </span>
        
        <h3 className="text-xl font-serif leading-tight text-white group-hover:italic transition-all">
          {article.title}
        </h3>
        
        <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
          {article.author}
        </p>
      </div>
    </motion.div>
  );
}
