import { useInView } from '../../hooks/useInView';

export default function TestimonialCard({ quote, author, title, initials, delay = 0 }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="bg-dark-card border border-white/10 p-8 md:p-10 hover:border-gold/30 transition-colors duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease, border-color 0.5s ease',
      }}
    >
      {/* Large quote mark */}
      <div className="text-gold/20 font-serif text-8xl leading-none mb-2 select-none">"</div>
      <p className="font-serif italic text-white/80 text-lg leading-relaxed mb-8">
        {quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
          <span className="text-gold font-serif text-sm font-semibold">{initials}</span>
        </div>
        <div>
          <p className="text-white font-medium text-sm">{author}</p>
          <p className="text-white/45 text-xs tracking-wide">{title}</p>
        </div>
      </div>
    </div>
  );
}
