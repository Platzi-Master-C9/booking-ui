import { Wizard, PlaceProvider } from '@booking-ui/shared';

export default function PropertyType() {
  return (
    <Wizard.Layout
      backPage="property-type"
      nextPage="amenities"
      pageTitle="¿Qué tipo de alojamiento vas a compartir?"
    >
      <Wizard.PropertyType
        value="propertyType"
        options={[
          { label: 'Casa', img: '/places/house.png', name: 'house' },
          {
            label: 'Apartamento',
            img: '/places/apartment.png',
            name: 'apartment',
          },
          { label: 'Finca', img: '/places/state.png', name: 'state' },
          { label: 'Hotel', img: '/places/hotel.png', name: 'hotel' },
        ]}
      />
    </Wizard.Layout>
  );
}

PropertyType.provider = PlaceProvider;
