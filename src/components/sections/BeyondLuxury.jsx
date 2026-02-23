import { useInView } from '../../hooks/useInView';
import GoldDivider from '../ui/GoldDivider';
import StatItem from '../ui/StatItem';

const stats = [
  { number: '127+', label: 'Exclusive Models Curated' },
  { number: '38', label: 'Countries Represented' },
  { number: '25yrs', label: 'Of Automotive Excellence' },
];

export default function BeyondLuxury() {
  const { ref: headRef, inView: headInView } = useInView();

  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/3 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/3 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading block */}
        <div
          ref={headRef}
          className="text-center max-w-3xl mx-auto mb-20"
          style={{
            opacity: headInView ? 1 : 0,
            transform: headInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-5">Our Promise</p>
          <GoldDivider className="justify-center mb-6" />
          <h2 className="font-serif italic text-4xl md:text-6xl text-white leading-tight mb-6">
            Beyond Luxury —<br />
            <span className="text-gold">Into Legacy.</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed">
            Aurum does not simply present automobiles. We present the culmination of a century of engineering ambition, artistic vision, and an unwavering pursuit of the absolute. Every car we showcase has earned its place in history.
          </p>
        </div>

        {/* Horizontal divider */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex-1 h-px bg-gold/20" />
          <div className="w-2 h-2 bg-gold rotate-45" />
          <div className="flex-1 h-px bg-gold/20" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          {stats.map((stat, i) => (
            <StatItem
              key={stat.label}
              number={stat.number}
              label={stat.label}
              delay={i * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
