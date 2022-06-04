import React, { useEffect } from 'react';
import './styles/wizard-property-type.scss';

function WizardPropertyType({
  housingOptions,
  setHousingOptions,
  setNextDisable,
  value,
  options,
}) {
  const handleSelect = (e) => {
    setHousingOptions({ ...housingOptions, [value]: e.target.id });
  };

  useEffect(() => {
    if (!housingOptions[value]) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [housingOptions]);

  return (
    <form className="wizard-property-type">
      {options.map(({ label, img, name }) => (
        <label
          className="wizard-property-type__item"
          htmlFor={name}
          key={name}
          style={{
            backgroundColor: housingOptions[value] === name ? '#f7f7f7' : '',
            border: housingOptions[value] === name ? '2px solid black' : '',
          }}
        >
          <div className="wizard-property-type__item-details">
            <img
              className="wizard-property-type__item-details-img"
              src={img}
              alt="property type"
            />
            <span className="wizard-property-type__item-details-label">
              {label}
            </span>
          </div>
          <input
            className="wizard-property-type__item-input"
            type="radio"
            id={name}
            name="property-type"
            checked={housingOptions[value] === name}
            onChange={handleSelect}
          />
        </label>
      ))}
    </form>
  );
}

export default WizardPropertyType;
