import React, { useState, useEffect } from 'react';
import './styles/wizard-complete.scss';
import { usePlaceProvider } from '../../../context/place';
import { BSIconButton } from '../../BSIconButton';

export function Complete() {
  const { placeOptions } = usePlaceProvider();
  const [complete, setComplete] = useState(false);
  const [completeError, setCompleteError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleComplete = async () => {
    try {
      if (complete) return;
      setLoading(true);
      const response = await fetch('http://localhost:3001/places/', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(placeOptions),
      });
      const data = await response.json();
      if (data.response.insertedId) {
        setComplete(true);
        setCompleteError(false);
      } else {
        setCompleteError(true);
      }
    } catch (error) {
      setCompleteError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleMessage = () => {
    if (completeError) {
      return 'No se pudo completar el registro inténtalo de nuevo';
    }
    if (complete) {
      return 'Tu registro se ha completado ahora formas parte de booking system';
    }
    return 'Felicidades al dar clic en finalizar te convertirás en un host de Booking System';
  };

  return (
    <div className="wizard-complete">
      {loading ? (
        <div className="wizard-complete__loading">
          <BSIconButton bg="prymary" loading />
          <span>Creando registro espera un momento</span>
        </div>
      ) : (
        <div className="wizard-complete__status">
          <h2 className="wizard-complete__status-instruction">
            {handleMessage()}
          </h2>
          {complete ? (
            <button
              className="wizard-complete__status-complete-register"
              type="button"
            >
              Regresar
            </button>
          ) : (
            <button
              className="wizard-complete__status-complete-register"
              type="button"
              onClick={handleComplete}
            >
              Finalizar
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Complete;
