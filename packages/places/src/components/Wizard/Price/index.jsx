import React, { useState } from 'react';
import './styles/wizard-prices.scss';
import { usePlaceProvider } from '../../../context/place';

export function Price() {
  const { placeOptions, setPlaceOptions } = usePlaceProvider();
  const propertiesPrice = [
    { type: 'house', min: 199.9, max: 999.9 },
    { type: 'apartment', min: 49.9, max: 199.9 },
    { type: 'state', min: 499.9, max: 1399.9 },
    { type: 'hotel', min: 99.9, max: 299.9 },
  ];

  const handleIncrement = () => {
    setPlaceOptions({
      ...placeOptions,
      price: (placeOptions.price += 50.0),
    });
  };

  const handleDecrement = () => {
    if (placeOptions.price <= 49.9) return;
    setPlaceOptions({
      ...placeOptions,
      price: (placeOptions.price -= 50.0),
    });
  };

  const handleChange = (e) => {
    const price = parseFloat(e.target.value, 10).toFixed(2);
    if (price === 0) {
      setPlaceOptions({
        ...placeOptions,
        price: 1.0,
      });
      return;
    }
    if (price < 49.9) {
      setPlaceOptions({
        ...placeOptions,
        price,
      });
      return;
    }
    setPlaceOptions({
      ...placeOptions,
      price,
    });
  };

  return (
    <form className="wizard-prices">
      <div className="wizard-prices__handle-price">
        <button
          className="wizard-prices__handle-price--decrement"
          type="button"
          onClick={handleDecrement}
        >
          -
        </button>
        <label htmlFor="price">
          <input
            type="number"
            id="price"
            value={placeOptions.price}
            onChange={(e) => handleChange(e)}
            min={49}
            max={1000000}
          />
        </label>
        <button
          className="wizard-prices__handle-price--increment"
          type="button"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      {!placeOptions.price && (
        <span>{`Ingresa un precio base entre $${propertiesPrice[0].min} y $${propertiesPrice[0].min}.`}</span>
      )}
    </form>
  );
}

export default Price;
