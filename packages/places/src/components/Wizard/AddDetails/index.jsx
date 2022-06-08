import React, { useState, useEffect } from 'react';
import './styles/add-details.scss';
import { usePlaceProvider } from '../../../context/place';

export function AddDetails({
  placeHolderItem,
  houseOption,
  instruction,
}) {
  const { placeOptions, setPlaceOptions, setNextDisable } = usePlaceProvider();
  const itemsAmount = 10;

  const addItem = () => {
    if (placeOptions[houseOption].length >= itemsAmount) return;
    setPlaceOptions({
      ...placeOptions,
      [houseOption]: [...placeOptions[houseOption], ''],
    });
  };

  const removeItem = (index) => {
    const inputItems = [...placeOptions[houseOption]];
    inputItems.splice(index, 1);
    setPlaceOptions({ ...placeOptions, [houseOption]: inputItems });
  };

  const handleChange = (e, index) => {
    const inputItems = [...placeOptions[houseOption]];
    inputItems[index] = e.target.value;
    setPlaceOptions({ ...placeOptions, [houseOption]: inputItems });
  };

  useEffect(() => {
    if (placeOptions[houseOption].length === 0) {
      setNextDisable(true);
      return;
    }
    let itemsCompleted = 0;
    placeOptions[houseOption].forEach((item) => {
      if (item !== '') {
        itemsCompleted += 1;
      }
    });
    if (itemsCompleted === placeOptions[houseOption].length) {
      setNextDisable(false);
    } else {
      setNextDisable(true);
    }
  }, [placeOptions]);

  return (
    <div className="add-details">
      <h2 className="add-details__instruction">{instruction}</h2>
      <form className="add-details-form">
        {placeOptions[houseOption].length > 0
          ? placeOptions[houseOption].map((value, index) => (
            <label
              className="add-details-form__item"
              key={index}
              htmlFor={index}
            >
              <input
                className="add-details-form__item-input"
                type="text"
                id={index}
                name="rule"
                value={value}
                placeholder={placeHolderItem}
                onChange={(e) => handleChange(e, index)}
                required
              />
              <button
                className="add-details-form__item-delete"
                type="button"
                onClick={() => removeItem(index)}
              >
                X
              </button>
            </label>
          ))
          : null}
        {placeOptions[houseOption].length < itemsAmount && (
          <button
            className="add-details-form__add-button"
            type="button"
            onClick={addItem}
          >
            + Agregar
          </button>
        )}
      </form>
    </div>
  );
}

export default AddDetails;
