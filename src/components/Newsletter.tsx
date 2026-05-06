import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section id="newsletter" className="py-48 bg-black border-y border-white/5 overflow-hidden relative">
      {/* Decorative vertical lines */}
      <div className="absolute inset-0 flex justify-around opacity-[0.03] pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-white" />
        ))}
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/60 text-[10px] md:text-[11px] uppercase tracking-[0.6em] font-medium block"
            >
              If you have an article idea, please let me know.
            </motion.p>
          </div>

          {!subscribed ? (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row items-stretch gap-0 max-w-2xl mx-auto border border-white/10"
            >
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="YOUR IDEA" 
                required
                className="flex-grow bg-transparent text-white px-8 py-5 text-[10px] tracking-[0.3em] font-medium focus:outline-none placeholder:text-white/50"
              />
              <button 
                type="submit"
                className="bg-white text-black px-12 py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white/90 transition-all cursor-crosshair"
              >
                Reach Out
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 border border-white/10"
            >
              <p className="text-white/60 text-sm uppercase tracking-[0.4em] font-medium italic">
                Thank you for the inspiration. It has been noted in the registry.
              </p>
            </motion.div>
          )}

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/20 text-[9px] uppercase tracking-[0.4em] leading-loose max-w-lg mx-auto"
          >
            By subscribing, you agree to our privacy policy and the curation terms of the Noir Editorial.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
