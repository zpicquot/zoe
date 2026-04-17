import { motion } from 'motion/react';

export default function Newsletter() {
  return (
    <section className="py-48 bg-black">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-16"
        >
          <div className="space-y-6">
            <span className="text-white/40 text-[12px] uppercase tracking-[0.8em] font-medium">
              Correspondence
            </span>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter text-white uppercase italic">
              Noir Letter
            </h2>
          </div>
          
          <p className="text-white/40 text-xl font-light max-w-xl mx-auto leading-relaxed">
            A weekly transmission of radical critiques and architectural fashion archives.
          </p>
          
          <form className="flex flex-col md:flex-row gap-6 pt-12 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER EMAIL ADDRESS" 
              className="flex-1 bg-transparent border-b border-white/10 px-0 py-6 text-[11px] tracking-widest focus:outline-none focus:border-white transition-all text-white placeholder:text-white/20"
              required
            />
            <button 
              type="submit"
              className="px-16 py-6 bg-white text-black text-[11px] uppercase tracking-[0.4em] font-bold hover:invert transition-all rounded-full"
            >
              Join the Dark
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
