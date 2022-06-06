import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export function PlaceProvider({ children }) {
  const [placeOptions, setPlaceOptions] = useState({
    propertyType: 'house',
    amenities: [],
    spaces: 1,
    address: {
      street: '',
      city: '',
      state: '',
      zipcode: '',
      country: '',
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
    price: 49.9,
  });

  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [nextDisable, setNextDisable] = useState(false);
  const views = 11;

  const handleBack = () => {
    if (step === 0) return;
    setStep(step - 1);
    setNextDisable(false);
  };

  const handleNext = () => {
    if (step === views - 1) return;
    setStep(step + 1);
  };

  useEffect(() => {
    const percentage = 100 / views;
    setProgress((step + 1) * percentage);
  }, [step]);

  return (
    <Context.Provider
      value={{
        placeOptions,
        setPlaceOptions,
        progress,
        setProgress,
        step,
        setStep,
        nextDisable,
        setNextDisable,
        handleBack,
        handleNext,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function usePlaceProvider() {
  return useContext(Context);
}
