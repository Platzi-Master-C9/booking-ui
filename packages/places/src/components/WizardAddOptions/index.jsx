import React, { useState, useEffect } from 'react';
import './styles/wizard-add-options.scss';

function WizardAddOptions({
  placeHolderItem,
  housingOptions,
  setHousingOptions,
  setNextDisable,
  houseOption,
  instruction
}) {
  const itemsAmount = 10;

  const addItem = () => {
    if (housingOptions[houseOption].length >= itemsAmount) return;
    setHousingOptions({ ...housingOptions, [houseOption]: [...housingOptions[houseOption], ''] });
  };

  const removeItem = (index) => {
    const inputItems = [...housingOptions[houseOption]];
    inputItems.splice(index, 1);
    setHousingOptions({ ...housingOptions, [houseOption]: inputItems });
  };

  const handleChange = (e, index) => {
    const inputItems = [...housingOptions[houseOption]];
    inputItems[index] = e.target.value;
    setHousingOptions({ ...housingOptions, [houseOption]: inputItems });
  };

  useEffect(() => {
    if (housingOptions[houseOption].length === 0) {
      setNextDisable(true);
      return;
    }
    let itemsCompleted = 0;
    housingOptions[houseOption].forEach((item) => {
      if (item !== '') {
        itemsCompleted += 1;
      }
    });
    if (itemsCompleted === housingOptions[houseOption].length) {
      setNextDisable(false);
    } else {
      setNextDisable(true);
    }
  }, [housingOptions]);

  return (
    <div className="wizard-add-options">
      <h2 className="wizard-add-options__instruction">{instruction}</h2>
      <form className="wizard-add-options-form">
        { housingOptions[houseOption].length > 0
          ? housingOptions[houseOption].map((value, index) => (
            <label className="wizard-add-options-form__item" key={index} htmlFor={index}>
              <input
                className="wizard-add-options-form__item-input"
                type="text"
                id={index}
                name="rule"
                value={value}
                placeholder={placeHolderItem}
                onChange={(e) => handleChange(e, index)}
                required
              />
              <button className="wizard-add-options-form__item-delete" type="button" onClick={() => removeItem(index)}>
                X
              </button>
            </label>
          )) : null}
        { housingOptions[houseOption].length < itemsAmount && (
        <button
          className="wizard-add-options-form__add-button"
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

export default WizardAddOptions;
