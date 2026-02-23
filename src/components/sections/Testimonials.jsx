import SectionHeading from '../ui/SectionHeading';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-dark-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <SectionHeading
            overline="Client Voices"
            title="Words of Those Who Know"
            subtitle="The pursuit of the extraordinary is best understood by those who have experienced it firsthand."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              author={t.author}
              title={t.title}
              initials={t.initials}
              delay={i * 200}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-white/40 text-sm mb-6 tracking-wide">
            Ready to begin your journey?
          </p>
          <a href="#" className="btn-gold">
            Schedule a Private Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
