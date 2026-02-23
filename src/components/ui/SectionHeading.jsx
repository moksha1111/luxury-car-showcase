import GoldDivider from './GoldDivider';

export default function SectionHeading({ overline, title, subtitle, centered = false, light = false }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {overline && (
        <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
          {overline}
        </p>
      )}
      <GoldDivider className={centered ? 'justify-center mb-5' : 'mb-5'} />
      <h2 className={`font-serif text-4xl md:text-5xl leading-tight mb-4 ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
