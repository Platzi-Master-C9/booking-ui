import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function FloorPlan() {
  return (
    <Wizard.Layout
      backPage="location"
      nextPage="photos"
      pageTitle="¿A cuántos huéspedes te gustaría recibir?"
    >
      <Wizard.FloorPlan />
    </Wizard.Layout>
  );
}

FloorPlan.provider = PlaceProvider;
