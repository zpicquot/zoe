import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import FeaturedArticle from './components/FeaturedArticle';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ArticleView from './components/ArticleView';
import { ARTICLES } from './constants';
import { Article } from './types';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const heroArticle = ARTICLES.find(a => a.id === '1') || ARTICLES[0];
  const remainingArticles = ARTICLES.filter(a => a.id !== heroArticle.id);

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero article={heroArticle} onRead={handleArticleClick} />

        {/* The Grid Section */}
        <section id="latest" className="py-48 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-32 text-center space-y-4">
            <h2 className="text-6xl md:text-7xl font-serif tracking-tighter text-white uppercase italic">
              The Latest Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            {remainingArticles.map((article, idx) => (
              <ArticleCard key={article.id} article={article} index={idx} onClick={handleArticleClick} />
            ))}
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />

      {/* Article View Overlay */}
      <AnimatePresence>
        {selectedArticle && (
          <ArticleView 
            article={selectedArticle} 
            allArticles={ARTICLES}
            onClose={() => setSelectedArticle(null)} 
            onArticleSelect={handleArticleClick}
          />
        )}
      </AnimatePresence>

      {/* Floating Elements */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:invert transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
        </motion.button>
      </div>
    </div>
  );
}
