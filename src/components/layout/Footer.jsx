import GoldDivider from '../ui/GoldDivider';

const footerLinks = {
  Collection: ['Entry-Level Luxury', 'Executive Sedans', 'Ultra-Luxury', 'Electric SUVs', 'Hypercars'],
  Brands: ['Mercedes-Maybach', 'Rolls-Royce', 'Bentley', 'Bugatti', 'Range Rover'],
  Company: ['About Aurum', 'Private Consultations', 'Concierge Services', 'Press & Media', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="font-serif text-2xl text-gold tracking-wider mb-2">AURUM</div>
            <GoldDivider className="mb-5" />
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Curating the world's most exceptional automobiles for discerning collectors and enthusiasts since 1998.
            </p>
            <div className="flex gap-4 mt-6">
              {['IG', 'TW', 'YT', 'IN'].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 border border-white/20 hover:border-gold/60 flex items-center justify-center text-white/40 hover:text-gold text-xs transition-colors duration-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-5">{group}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/45 hover:text-gold text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-wider">
            © {new Date().getFullYear()} Aurum Luxury Car Showcase. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-gold/70 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
