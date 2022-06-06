import React from 'react';
import './styles/wizard-complete.scss';

export function Complete() {
  return (
    <div className="wizard-complete">
      <h2 className="wizard-complete__instruction">Felicidades al dar clic en finalizar te convertiras en un host de Booking System</h2>
      <button className="wizard-complete__complete-register" type="button">Finalizar</button>
    </div>
  );
}

export default Complete;
