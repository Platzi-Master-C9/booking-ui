import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function PropertyType() {
  return (
    <Wizard.Layout
      backPage="price"
      nextPage="complete"
      pageTitle="Vamos a completar tu registro"
    >
      <Wizard.Complete />
    </Wizard.Layout>
  );
}

PropertyType.provider = PlaceProvider;