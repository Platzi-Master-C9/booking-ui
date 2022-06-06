import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function PropertyType() {
  return (
    <Wizard.Layout
      backPage="photos"
      nextPage="description"
      pageTitle="Ponle un nombre a tu alojamiento"
    >
      <Wizard.TextArea
        instruction="Crea tu título"
        maxLength={50}
        field="title"
        textStyle="title"
      />
    </Wizard.Layout>
  );
}

PropertyType.provider = PlaceProvider;
