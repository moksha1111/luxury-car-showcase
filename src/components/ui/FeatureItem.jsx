import { useInView } from '../../hooks/useInView';

export default function FeatureItem({ icon, title, description, delay = 0 }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="animate-on-enter"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
      }}
    >
      <div className="flex items-start gap-4">
        <div className="mt-1 w-8 h-8 flex items-center justify-center border border-gold/40 shrink-0">
          <span className="text-gold text-xs">{icon}</span>
        </div>
        <div>
          <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
          <p className="text-white/55 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
