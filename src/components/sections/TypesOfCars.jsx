import SectionHeading from '../ui/SectionHeading';
import CarTypeCard from '../ui/CarTypeCard';
import { carTypes } from '../../data/carTypes';

export default function TypesOfCars() {
  return (
    <section id="types" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center">
          <SectionHeading
            overline="The Collection"
            title="Types of Luxury Cars"
            subtitle="From grand tourers to electric masterpieces, each category represents a distinct vision of automotive excellence."
            centered
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {carTypes.map((car, i) => (
            <CarTypeCard
              key={car.id}
              label={car.label}
              description={car.description}
              photoId={car.photoId}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
