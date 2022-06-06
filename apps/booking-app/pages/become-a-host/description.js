import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function PropertyType() {
  return (
    <Wizard.Layout
      backPage="title"
      nextPage="rules"
      pageTitle="Ahora vamos a describir tu alojamiento"
    >
      <Wizard.TextArea
        instruction="Crea tu descripción"
        maxLength={500}
        field="description"
        textStyle="paragraph"
      />
    </Wizard.Layout>
  );
}

PropertyType.provider = PlaceProvider;
