import { unsplashUrl } from '../../utils/images';
import { useInView } from '../../hooks/useInView';
import SectionHeading from '../ui/SectionHeading';
import FeatureItem from '../ui/FeatureItem';
import { features } from '../../data/features';

export default function WhatDefines() {
  const { ref: imgRef, inView: imgInView } = useInView();

  return (
    <section id="what-defines" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        {/* Top: heading left + description right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <SectionHeading
            overline="Philosophy"
            title={<>What Defines<br />True Luxury?</>}
          />
          <div className="flex flex-col justify-end">
            <p className="text-white/55 text-base leading-relaxed">
              Luxury is not a feature list — it is a feeling. It is the whisper of a perfectly sealed door, the imperceptible glide of a world-class suspension, and the scent of hand-cut leather. Every automobile in our showcase has been selected because it excels not merely in specification, but in the art of making you feel extraordinary.
            </p>
          </div>
        </div>

        {/* Bottom: feature grid + image */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* 2x2 feature grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <FeatureItem
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={i * 150}
              />
            ))}
          </div>

          {/* Interior image */}
          <div
            ref={imgRef}
            className="lg:col-span-2 relative overflow-hidden"
            style={{
              opacity: imgInView ? 1 : 0,
              transform: imgInView ? 'translateX(0)' : 'translateX(40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <img
              src={unsplashUrl('1494976388531-d1058494cdd8', 700, 80)}
              alt="Luxury car interior"
              className="w-full object-cover aspect-[3/4]"
              loading="lazy"
            />
            {/* Gold accent frame */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent p-6">
              <p className="font-serif italic text-white/70 text-sm">"Crafted for those who demand the extraordinary."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
