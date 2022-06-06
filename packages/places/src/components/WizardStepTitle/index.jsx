import React from 'react';
import './styles/wizard-step-title.scss';

function WizardTitle({ title }) {
  return <h2 className="wizard-section__title">{title}</h2>;
}

export default WizardTitle;
