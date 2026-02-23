import SectionHeading from '../ui/SectionHeading';
import BrandGroup from '../ui/BrandGroup';
import { brandGroups } from '../../data/brands';

export default function GlobalBrands() {
  return (
    <section id="brands" className="section-padding bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <SectionHeading
            overline="Global Marques"
            title={<>The World's Most<br />Revered Brands</>}
            subtitle="From Bavarian precision to Italian passion, these marques have shaped the very definition of automotive luxury across generations."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {brandGroups.map((group, i) => (
            <BrandGroup
              key={group.country}
              country={group.country}
              flag={group.flag}
              brands={group.brands}
              delay={i * 100}
            />
          ))}
        </div>

        {/* Bottom flourish */}
        <div className="mt-20 flex items-center gap-6">
          <div className="flex-1 h-px bg-gold/15" />
          <p className="text-white/30 text-xs tracking-[0.3em] uppercase shrink-0">25+ Exclusive Marques</p>
          <div className="flex-1 h-px bg-gold/15" />
        </div>
      </div>
    </section>
  );
}
