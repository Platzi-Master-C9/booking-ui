import React, { useState, useEffect } from 'react';
import './styles/wizard.scss';
import { BSIconButton } from '../BSIconButton';

// views
import EnterAddress from '../EnterAddress';
import FloorPlan from '../FloorPlan';
import TextAreaComponent from '../TextAreaComponent';
import LoadImages from '../LoadImages';
import WizardAddOptions from '../WizardAddOptions';

// Components
import WizardStepTitle from '../WizardStepTitle';
import WizardSteps from '../WizardSteps';

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
    houseRules: [],
    healthAndSecurity: [],
  });
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [nextDisable, setNextDisable] = useState(false);
  const views = 7;

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
    <main className="wizard">
      <div className="wizard-section">
        <BSIconButton bg="secondary" />
        <WizardStepTitle
          titles={[
            '¿Dónde se encuentra tu alojamiento?',
            '¿A cuántos huéspedes te gustaría recibir?',
            'Ponle un nombre a tu alojamiento',
            'Ahora vamos a describir tu alojamiento',
            'Ahora, vamos a subir algunas fotos de tu alojamiento',
            'Ahora, vamos agregar algunas reglas para tu alojamiento',
            'Ahora vamos a agregar algunas opciones de salud y seguridad',
          ]}
          page={step}
        />
      </div>
      <div className="wizard-housing">
        <WizardSteps step={step}>
          <EnterAddress
            housingOptions={housingOptions}
            setHousingOptions={setHousingOptions}
            setNextDisable={setNextDisable}
          />
          <FloorPlan
            housingOptions={housingOptions}
            setHousingOptions={setHousingOptions}
          />
          <TextAreaComponent
            housingOptions={housingOptions}
            setHousingOptions={setHousingOptions}
            instruction="Crea tu título"
            maxLength={50}
            field="title"
            textStyle="title"
          />
          <TextAreaComponent
            housingOptions={housingOptions}
            setHousingOptions={setHousingOptions}
            instruction="Crea tu descripción"
            maxLength={500}
            field="description"
            textStyle="paragraph"
          />
          <LoadImages
            housingOptions={housingOptions}
            setHousingOptions={setHousingOptions}
            setNextDisable={setNextDisable}
          />
          <WizardAddOptions
            housingOptions={housingOptions}
            setHousingOptions={setHousingOptions}
            setNextDisable={setNextDisable}
            placeHolderItem="Ingresa una regla para tu alojamiento"
            houseOption="houseRules"
            instruction="Agrega por lo menos una regla"
          />
          <WizardAddOptions
            housingOptions={housingOptions}
            setHousingOptions={setHousingOptions}
            setNextDisable={setNextDisable}
            placeHolderItem="Ingresa una regla para tu alojamiento"
            houseOption="healthAndSecurity"
            instruction="Agrega por lo menos una opción de salud y seguridad"
          />
        </WizardSteps>
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
