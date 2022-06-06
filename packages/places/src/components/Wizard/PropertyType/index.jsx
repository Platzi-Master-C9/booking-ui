import React, { useEffect, useContext } from 'react';
import './styles/wizard-property-type.scss';
import { usePlaceProvider } from '../../../context/place';

export function PropertyType({ value, options }) {
  const { placeOptions, setPlaceOptions, setNextDisable } = usePlaceProvider();

  const handleSelect = (e) => {
    setPlaceOptions({ ...placeOptions, [value]: e.target.id });
  };

  useEffect(() => {
    if (!placeOptions[value]) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [placeOptions]);

  return (
    <form className="wizard-property-type">
      {options.map(({ label, img, name }) => (
        <label
          className="wizard-property-type__item"
          htmlFor={name}
          key={name}
          style={{
            backgroundColor: placeOptions[value] === name ? '#f7f7f7' : '',
            border: placeOptions[value] === name ? '2px solid black' : '',
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
            checked={placeOptions[value] === name}
            onChange={handleSelect}
          />
        </label>
      ))}
    </form>
  );
}

export default PropertyType;
