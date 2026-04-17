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
  const latestCritiques = ARTICLES.filter(a => a.category === 'Conceptual' || a.category === 'Tendances').slice(0, 3);
  const featuredCritique = ARTICLES.find(a => a.id === '4') || ARTICLES[3];
  const opinionArticles = ARTICLES.filter(a => a.category === 'Opinions' || a.category === 'Archives').slice(0, 2);

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

        {/* Latest Critiques Section */}
        <section id="conceptual" className="py-48 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="mb-32 text-center space-y-4">
            <span className="text-white/40 text-[12px] uppercase tracking-[0.8em] font-medium block">
              The Registry
            </span>
            <h2 className="text-6xl md:text-9xl font-serif tracking-tighter text-white uppercase italic">
              Absolute Archives
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-32">
            {latestCritiques.slice(0, 3).map((article, idx) => (
              <ArticleCard key={article.id} article={article} index={idx} onClick={handleArticleClick} />
            ))}
          </div>
        </section>

        {/* Featured Critique Section */}
        <FeaturedArticle article={featuredCritique} onRead={handleArticleClick} />

        {/* Trends & Opinions Section */}
        <section id="opinions" className="py-48 max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-6">
                <span className="text-white/40 text-[12px] uppercase tracking-[0.8em] font-medium block">
                  Manifestos
                </span>
                <h2 className="text-7xl font-serif tracking-tighter text-white uppercase">Deep Dives</h2>
              </div>
              <p className="text-white/50 text-xl font-light leading-relaxed">
                Interrogating the architectural foundations of modern silhouette and the radical shift towards absolute black.
              </p>
              <div className="py-12 border-y border-white/5">
                <p className="font-serif italic text-4xl leading-tight text-white/60">
                  "Black is the soul of all architecture."
                </p>
                <span className="block mt-8 text-[11px] uppercase tracking-[0.6em] font-bold text-white/20">— Anonyme</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-32">
                {opinionArticles.slice(0, 2).map((article, idx) => (
                  <ArticleCard key={article.id} article={article} index={idx} onClick={handleArticleClick} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
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
