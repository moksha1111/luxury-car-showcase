import { useInView } from '../../hooks/useInView';

export default function StatItem({ number, label, delay = 0 }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="text-center"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <p className="font-serif text-5xl md:text-6xl text-gold mb-3">{number}</p>
      <div className="w-12 h-px bg-gold/40 mx-auto mb-4" />
      <p className="text-white/55 tracking-widest uppercase text-xs">{label}</p>
    </div>
  );
}
