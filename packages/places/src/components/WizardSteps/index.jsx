import React from 'react';
import "./styles/wizard-steps.scss"

function WizardStepTitle({children, step}) {
  return (
    <div className="wizard-housing-options">{children[step]}</div>
  );
}

export default WizardStepTitle;
