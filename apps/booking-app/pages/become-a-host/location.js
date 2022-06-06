import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function Location() {
  return (
    <Wizard.Layout
      backPage="amenities"
      nextPage="floor-plan"
      pageTitle="¿Dónde se encuentra tu alojamiento?"
    >
      <Wizard.Location />
    </Wizard.Layout>
  );
}

Location.provider = PlaceProvider;
