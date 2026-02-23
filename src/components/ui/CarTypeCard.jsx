import { unsplashUrl } from '../../utils/images';
import { useInView } from '../../hooks/useInView';

export default function CarTypeCard({ label, description, photoId, delay = 0 }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
      style={{
        transitionDelay: `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.7s ease, transform 0.7s ease',
      }}
    >
      <img
        src={unsplashUrl(photoId, 800, 75)}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      {/* Gold top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="font-serif text-xl text-white mb-1">{label}</h3>
        <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transition-transform">
          {description}
        </p>
        <div className="mt-3 h-px bg-gold w-8 group-hover:w-16 transition-all duration-400" />
      </div>
    </div>
  );
}
