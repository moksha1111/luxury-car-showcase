import { unsplashUrl } from '../../utils/images';
import { useInView } from '../../hooks/useInView';
import GoldDivider from './GoldDivider';

export default function ModelRow({ brand, model, tagline, description, specs, photoId, imageLeft }) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const image = (
    <div className="relative overflow-hidden aspect-video lg:aspect-[4/3] xl:aspect-[16/10]">
      <img
        src={unsplashUrl(photoId, 900, 80)}
        alt={`${brand} ${model}`}
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
    </div>
  );

  const content = (
    <div className="flex flex-col justify-center py-8 lg:py-0">
      <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-3">{brand}</p>
      <GoldDivider className="mb-5" />
      <h3 className="font-serif text-3xl md:text-4xl text-white mb-3">{model}</h3>
      <p className="font-serif italic text-white/50 text-lg mb-6">{tagline}</p>
      <p className="text-white/60 text-sm leading-relaxed mb-8">{description}</p>
      <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
        {specs.map((spec) => (
          <div key={spec.label}>
            <p className="text-white/40 text-xs tracking-wider uppercase mb-1">{spec.label}</p>
            <p className="text-gold font-medium text-sm">{spec.value}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.8s ease, transform 0.8s ease',
      }}
    >
      {imageLeft ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          <div className="lg:order-2">{image}</div>
          <div className="lg:order-1">{content}</div>
        </>
      )}
    </div>
  );
}
