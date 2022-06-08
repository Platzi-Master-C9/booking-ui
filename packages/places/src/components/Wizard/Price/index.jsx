import React, { useState, useEffect } from 'react';
import './styles/wizard-prices.scss';
import { usePlaceProvider } from '../../../context/place';

export function Price() {
  const { placeOptions, setPlaceOptions, setNextDisable } = usePlaceProvider();
  const propertiesPrice = [
    { type: 'house', min: 199, max: 999 },
    { type: 'apartment', min: 49, max: 199 },
    { type: 'state', min: 499, max: 1399 },
    { type: 'hotel', min: 99, max: 299 },
  ];
  const propertyPrice = propertiesPrice.find((price) => price.type === placeOptions.propertyType);
  const [price, setPrice] = useState(propertyPrice.min);

  const handleIncrement = () => {
    setPrice(price + 50);
  };

  const handleDecrement = () => {
    if (placeOptions.price === propertyPrice.min) return;
    setPrice(price - 50);
  };

  const handleChange = (e) => {
    if (!e.target.value) {
      setPrice('');
      return;
    }
    const parseInput = parseFloat(e.target.value, 10);
    setPrice(parseInput);
  };

  useEffect(() => {
    if (placeOptions.price <= 0) {
      setNextDisable(true);
    } else {
      setNextDisable(false);
    }
  }, [placeOptions]);

  useEffect(() => {
    if (!price) {
      setPlaceOptions({
        ...placeOptions,
        price: 0,
        address: { ...placeOptions.address, price: 0 },
      });
    } else {
      setPlaceOptions({
        ...placeOptions,
        address: { ...placeOptions.address, price },
      });
    }
  }, [price]);

  return (
    <form className="wizard-prices">
      <h2 className="wizard-prices__instruction">Ingresa el precio en dolares</h2>
      <div className="wizard-prices__handle-price">
        <button
          className="wizard-prices__handle-price--decrement"
          type="button"
          onClick={handleDecrement}
          disabled={price <= propertyPrice.min}
        >
          -
        </button>
        <label className="wizard-prices__handle-price-input" htmlFor="price">
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => handleChange(e)}
            min={0}
            max={10000000000}
            autoComplete="off"
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
      {placeOptions.price <= 0 && (
        <span className="wizard-prices__suggestion">{`Ingresa un precio base entre $${propertyPrice.min} y $${propertyPrice.max}.`}</span>
      )}
    </form>
  );
}

export default Price;
