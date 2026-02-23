import { unsplashUrl } from '../../utils/images';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={unsplashUrl('1503376780353-7e6692767b70', 1920, 85)}
          alt="Luxury car"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark" />
        {/* Left vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Overline */}
          <p className="text-gold tracking-[0.4em] uppercase text-xs font-medium mb-6 animate-fade-up opacity-0"
             style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            The World's Finest Automobiles
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-8"
               style={{ animation: 'fadeUp 0.7s 0.5s ease forwards', opacity: 0 }}>
            <div className="h-px bg-gold/60 w-12" />
            <div className="w-1.5 h-1.5 bg-gold rotate-45" />
            <div className="h-px bg-gold/60 w-12" />
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] mb-8"
            style={{ animation: 'fadeUp 0.9s 0.6s ease forwards', opacity: 0 }}
          >
            Where Passion
            <span className="block text-gold italic">Meets Precision.</span>
          </h1>

          {/* Sub */}
          <p
            className="text-white/60 text-lg md:text-xl leading-relaxed mb-12 max-w-xl"
            style={{ animation: 'fadeUp 0.7s 0.9s ease forwards', opacity: 0 }}
          >
            An exclusive showcase of the world's most exceptional luxury and performance automobiles — curated for those who accept nothing less than perfection.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.7s 1.1s ease forwards', opacity: 0 }}
          >
            <a href="#models" className="btn-gold">
              Explore Collection
            </a>
            <a href="#what-defines" className="btn-outline-gold">
              Our Philosophy
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
           style={{ animation: 'fadeUp 0.7s 1.5s ease forwards', opacity: 0 }}>
        <p className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</p>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
