import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function PropertyType() {
  return (
    <Wizard.Layout
      backPage="health-and-security"
      nextPage="complete"
      pageTitle="Ahora viene la mejor parte: ¡definir tus precios!"
    >
      <Wizard.Price />
    </Wizard.Layout>
  );
}

PropertyType.provider = PlaceProvider;