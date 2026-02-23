import SectionHeading from '../ui/SectionHeading';
import ModelRow from '../ui/ModelRow';
import { models } from '../../data/models';

export default function IconicModels() {
  return (
    <section id="models" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <SectionHeading
            overline="The Icons"
            title="Iconic Models"
            subtitle="Five automobiles that have transcended their era to become timeless symbols of everything luxury can be."
            centered
          />
        </div>

        <div className="space-y-28">
          {models.map((model) => (
            <ModelRow
              key={model.id}
              brand={model.brand}
              model={model.model}
              tagline={model.tagline}
              description={model.description}
              specs={model.specs}
              photoId={model.photoId}
              imageLeft={model.imageLeft}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
