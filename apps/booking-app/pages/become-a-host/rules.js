import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function PropertyType() {
  return (
    <Wizard.Layout
      backPage="description"
      nextPage="health-and-security"
      pageTitle="Ahora, vamos agregar algunas reglas para tu alojamiento"
    >
      <Wizard.AddDetails
        placeHolderItem="Ingresa una regla para tu alojamiento"
        houseOption="houseRules"
        instruction="Agrega por lo menos una regla"
      />
    </Wizard.Layout>
  );
}

PropertyType.provider = PlaceProvider;