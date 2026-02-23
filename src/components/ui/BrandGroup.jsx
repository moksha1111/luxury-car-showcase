import { useInView } from '../../hooks/useInView';

const flagEmoji = { DE: '🇩🇪', UK: '🇬🇧', IT: '🇮🇹', JP: '🇯🇵', US: '🇺🇸' };

export default function BrandGroup({ country, flag, brands, delay = 0 }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="border border-white/10 p-8 hover:border-gold/40 transition-colors duration-500"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease, border-color 0.5s ease',
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{flagEmoji[flag]}</span>
        <div>
          <p className="text-gold tracking-widest uppercase text-xs font-medium">{flag}</p>
          <h3 className="font-serif text-lg text-white">{country}</h3>
        </div>
      </div>
      <ul className="space-y-2">
        {brands.map((brand) => (
          <li key={brand} className="flex items-center gap-3 text-white/65 text-sm hover:text-gold transition-colors duration-200 cursor-default">
            <span className="w-1 h-1 bg-gold/50 rounded-full shrink-0" />
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
}
