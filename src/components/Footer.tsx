import { CATEGORIES } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-48 pb-24 border-t border-white/5">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-48">
          <div className="md:col-span-2">
            <h2 className="text-4xl font-serif tracking-[0.2em] mb-12">REVIEW</h2>
            <p className="text-white/30 text-sm uppercase tracking-[0.2em] leading-loose max-w-md font-medium">
              A radical fashion sanctuary. Curated critiques, architectural perspectives, and the absolute essence of the global runway.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-12 text-white/60">Curation</h4>
            <ul className="space-y-6">
              {CATEGORIES.map(cat => (
                <li key={cat.slug}>
                  <a href={`#${cat.slug}`} className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors font-medium">
                    {cat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold mb-12 text-white/60">Registry</h4>
            <ul className="space-y-6">
              <li><a href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors font-medium">Instagram</a></li>
              <li><a href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors font-medium">Pinterest</a></li>
              <li><a href="#" className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors font-medium">Noir Letter</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-white/5 gap-8">
          <p className="text-[9px] uppercase tracking-[0.4em] text-white/10 font-bold">
            © 2026 REVIEW. NOIR EDITORIAL.
          </p>
          <div className="flex gap-12">
            <span className="text-[9px] uppercase tracking-[0.4em] text-white/10 font-bold">Absolute Black</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
