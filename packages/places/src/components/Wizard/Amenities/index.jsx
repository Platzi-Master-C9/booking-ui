import React, { useEffect } from 'react';
import './styles/wizard-amenities.scss';
import { usePlaceProvider } from '../../../context/place';

export function Amenities({ value, options }) {
  const { placeOptions, setPlaceOptions, setNextDisable } = usePlaceProvider();
  const includeName = (name) => {
    let inputItems = [...placeOptions[value]];
    const include = inputItems.includes(name);
    return include;
  };

  const handleSelect = (e) => {
    let inputItems = [...placeOptions[value]];
    if (e.target.checked) {
      setPlaceOptions({
        ...placeOptions,
        [value]: [...inputItems, e.target.id],
      });
    } else {
      const index = inputItems.findIndex((item) => item === e.target.id);
      inputItems.splice(index, 1);
      setPlaceOptions({ ...placeOptions, [value]: inputItems });
    }
  };

  useEffect(() => {
    if (placeOptions[value].length === 0) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [placeOptions]);

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

export default Amenities;
