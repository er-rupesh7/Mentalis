import { MentalabLoader } from '../../../../src/components/mind/MentalabLoader';

export default function Loading() {
  return (
    <MentalabLoader
      title="Mentalab Curriculum Track"
      subtitle="Loading Track Modules & Case Studies..."
      fullScreen={true}
    />
  );
}
