import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export function PlaceProvider({ children }) {
  const [placeOptions, setPlaceOptions] = useState({
    propertyType: 'house',
    amenities: [],
    address: {
      street: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
      price: '',
    },
    floorPlans: [
      {
        field: 'Huéspedes',
        amount: 2,
      },
      {
        field: 'Camas',
        amount: 1,
      },
      {
        field: 'Recámaras',
        amount: 1,
      },
      {
        field: 'Baños',
        amount: 1,
      },
    ],
    title: 'Hogar para todos',
    description:
      'Relájate con toda la familia en este alojamiento donde la tranquilidad se respira.',
    images: [],
    houseRules: [],
    healthAndSecurity: [],
    price: 49.0,
  });

  const [nextDisable, setNextDisable] = useState(false);

  return (
    <Context.Provider
      value={{
        placeOptions,
        setPlaceOptions,
        nextDisable,
        setNextDisable,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function usePlaceProvider() {
  return useContext(Context);
}
