import React, { useState, useEffect } from 'react';
import './styles/wizard-add-options.scss';

function WizardAddOptions({
  placeHolderItem,
  housingOptions,
  setHousingOptions,
  setNextDisable,
}) {
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    e.preventDefault();
    if (items.length >= 7) {
      if (e.target.value === '') return;
      setHousingOptions({ ...housingOptions, houseRules: [...items, { id: `${items.length + 1}p`, value: '' }] });
      setNextDisable(false);
      return;
    }
    setItems([...items, { id: `${items.length + 1}`, value: '' }]);
    setHousingOptions({ ...housingOptions, houseRules: [...items, { id: `${items.length + 1}p`, value: '' }] });
  };

  const removeItem = (id) => {
    const inputItems = items.filter((input) => input.id !== id);
    setItems(inputItems);
    setHousingOptions(inputItems);
  };

  const handleChange = (e) => {
    const input = items.findIndex((item) => item.id === e.target.id);
    const inputItems = items;
    inputItems[input] = { ...inputItems[input], value: e.target.value };
    setItems(inputItems);
    setHousingOptions({ ...housingOptions, houseRules: inputItems });
    if (inputItems[6]?.value === '') setNextDisable(true);
  };

  useEffect(() => {
    setItems(housingOptions.houseRules);
    if (housingOptions.houseRules.length < 7) setNextDisable(true);
  }, [housingOptions]);

  return (
    <div className="wizard-add-options">
      <form className="wizard-add-options-items" onSubmit={addItem}>
        {items.length > 0
          && items.map(({ id }) => (
            <label className="wizard-add-options-items__item" key={id} htmlFor={id}>
              <input
                className="wizard-add-options-items__item-input"
                type="text"
                name=""
                id={id}
                value={items[id - 1]?.value}
                placeholder={placeHolderItem}
                required
                onChange={handleChange}
              />
              <button className="wizard-add-options-items__item-delete" type="button" onClick={() => removeItem(id)}>
                X
              </button>
            </label>
          ))}
        {items.length < 7 ? (
          <button
            type="submit"
            className="wizard-add-options-items__add-button"
          >
            + Agregar
          </button>
        ) : (
          <button
            className="wizard-add-options__complete-button"
            type="submit"
          >
            Está bien
          </button>
        ) }
      </form>
    </div>
  );
}

export default WizardAddOptions;
