import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function Amanities() {
  return (
    <Wizard.Layout
      backPage="property-type"
      nextPage="location"
      pageTitle="¿Qué servicios ofrece este lugar?"
    >
      <Wizard.Amenities
        value="amenities"
        options={[
          {
            label: 'Wifi',
            img: '/places/wifi.png',
            name: 'wifi',
          },
          {
            label: 'freeParking',
            img: '/places/parkingLot.png',
            name: 'Estacionamiento gratuito',
          },
          {
            label: 'Televisor con cable estándar',
            img: '/places/tv.png',
            name: 'televison',
          },
          {
            label: 'Agua caliente',
            img: '/places/bathtub.png',
            name: 'hotWater',
          },
          {
            label: 'Lavadora',
            img: '/places/washer.png',
            name: 'washingMachine',
          },
          {
            label: 'Cocina',
            img: '/places/kitchen.png',
            name: 'kitchen',
          },
          {
            label: 'Televisión',
            img: '/places/tv.png',
            name: 'television',
          },
          {
            label: 'Calefacción',
            img: '/places/heating.png',
            name: 'Heating',
          },
        ]}
      />
    </Wizard.Layout>
  );
}

Amanities.provider = PlaceProvider;
