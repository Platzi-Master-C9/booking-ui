import React from 'react';
import './styles/wizard-step-title.scss';

function WizardTitle({ titles, page }) {
  return (
    <h2 className="wizard-section__title">{titles[page]}</h2>
  );
}

export default WizardTitle;
