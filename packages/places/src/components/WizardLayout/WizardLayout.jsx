import React, { useState, useEffect } from 'react';
import './styles/wizard.scss';
import { BSIconButton } from '../BSIconButton';

// views
import EnterAddress from '../EnterAddress';
import FloorPlan from '../FloorPlan';
import TextAreaComponent from '../TextAreaComponent';
import LoadImages from '../LoadImages';

export function WizardLayout() {
  const [housingOptions, setHousingOptions] = useState({
    type: 'house',
    spaces: 1,
    services: ['wifi'],
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
  });
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [nextDisable, setNextDisable] = useState(false);
  const forms = [
    {
      title: '¿Dónde se encuentra tu alojamiento?',
      form: (
        <EnterAddress
          housingOptions={housingOptions}
          setHousingOptions={setHousingOptions}
          setNextDisable={setNextDisable}
        />
      ),
    },
    {
      title: '¿A cuántos huéspedes te gustaría recibir?',
      form: (
        <FloorPlan
          housingOptions={housingOptions}
          setHousingOptions={setHousingOptions}
        />
      ),
    },
    {
      title: 'Ponle un nombre a tu alojamiento',
      form: (
        <TextAreaComponent
          housingOptions={housingOptions}
          setHousingOptions={setHousingOptions}
          componentTitle="Crea tu título"
          maxLength={50}
          field="title"
          textStyle="title"
        />
      ),
    },
    {
      title: 'Ahora vamos a describir tu alojamiento',
      form: (
        <TextAreaComponent
          housingOptions={housingOptions}
          setHousingOptions={setHousingOptions}
          componentTitle="Crea tu descripción"
          maxLength={500}
          field="description"
          textStyle="paragraph"
        />
      ),
    },
    {
      title: 'Ahora, vamos a subir algunas fotos de tu alojamiento',
      form: (
        <LoadImages
          housingOptions={housingOptions}
          setHousingOptions={setHousingOptions}
          setNextDisable={setNextDisable}
        />
      ),
    },
  ];

  const handleBack = () => {
    if (step === 0) return;
    setStep(step - 1);
    setNextDisable(false);
  };

  const handleNext = () => {
    if (step === forms.length - 1) return;
    setStep(step + 1);
  };

  useEffect(() => {
    const percentage = 100 / forms.length;
    setProgress((step + 1) * percentage);
  }, [step]);

  return (
    <main className="wizard">
      <div className="wizard-section">
        <BSIconButton bg="secondary" />
        <h2 className="wizard-section__title">{forms[step].title}</h2>
      </div>
      <div className="wizard-housing">
        <div className="wizard-housing-options">{forms[step].form}</div>
        <div className="wizard-housing-handle-sections">
          <progress
            className="wizard-housing-handle-sections__progress-bar"
            max="100"
            value={progress}
          >
            {`Tu progreso: ${progress}%`}
          </progress>
          <div className="wizard-housing-handle-sections-buttons">
            <button
              className="wizard-housing-handle-sections-buttons__back"
              type="button"
              onClick={handleBack}
            >
              Atrás
            </button>
            <button
              className="wizard-housing-handle-sections-buttons__next"
              type="button"
              onClick={handleNext}
              disabled={nextDisable}
              style={{
                opacity: nextDisable ? 0.5 : 1,
                cursor: nextDisable ? 'not-allowed' : 'pointer',
              }}
            >
              Siguente
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default WizardLayout;
