import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function PropertyType() {
  return (
    <Wizard.Layout
      backPage="floor-plan"
      nextPage="title"
      pageTitle="Ahora, vamos a subir algunas fotos de tu alojamiento"
    >
      <Wizard.Photos />
    </Wizard.Layout>
  );
}

PropertyType.provider = PlaceProvider;
