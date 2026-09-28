import { MentalabLoader } from '../../../src/components/mind/MentalabLoader';

export default function Loading() {
  return (
    <MentalabLoader
      title="Mentalab Mind"
      subtitle="Loading Psychology & Mental Model Tracks..."
      fullScreen={true}
    />
  );
}
