import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function PropertyType() {
  return (
    <Wizard.Layout
      backPage="rules"
      nextPage="price"
      pageTitle="Ahora vamos a agregar algunas opciones de salud y seguridad"
    >
      <Wizard.AddDetails
        placeHolderItem="Ingresa una regla para tu alojamiento"
        houseOption="healthAndSecurity"
        instruction="Agrega por lo menos una opción de salud y seguridad"
      />
    </Wizard.Layout>
  );
}

PropertyType.provider = PlaceProvider;