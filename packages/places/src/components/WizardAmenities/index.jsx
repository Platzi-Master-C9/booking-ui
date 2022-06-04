import React, { useEffect } from 'react';
import './styles/WizardAmenities.scss';

function WizardAmenities({
  housingOptions,
  setHousingOptions,
  setNextDisable,
  value,
  options,
}) {
  const includeName = (name) => {
    let inputItems = [...housingOptions[value]];
    const include = inputItems.includes(name);
    return include;
  };

  const handleSelect = (e) => {
    let inputItems = [...housingOptions[value]];
    if (e.target.checked) {
      setHousingOptions({
        ...housingOptions,
        [value]: [...inputItems, e.target.id],
      });
    } else {
      const index = inputItems.findIndex((item) => item === e.target.id);
      inputItems.splice(index, 1);
      setHousingOptions({ ...housingOptions, [value]: inputItems });
    }
  };

  useEffect(() => {
    if (housingOptions[value].length === 0) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [housingOptions]);

  return (
    <div className="wizard-amenities">
      {options.map(({ label, img, name }, index) => (
        <label
          className="wizard-amenities__item"
          htmlFor={name}
          key={name}
          style={{
            backgroundColor: includeName(name) ? '#f7f7f7' : '',
            border: includeName(name) ? '2px solid black' : '',
          }}
        >
          <div className="wizard-amenities__item-details">
            <img
              className="wizard-amenities__item-details-img"
              src={img}
              alt="property type"
            />
            <span className="wizard-amenities__item-details-label">
              {label}
            </span>
          </div>
          <input
            className="wizard-amenities__item-input"
            type="checkbox"
            id={name}
            name="property-type"
            onChange={(e) => handleSelect(e, index)}
          />
        </label>
      ))}
    </div>
  );
}

export default WizardAmenities;
