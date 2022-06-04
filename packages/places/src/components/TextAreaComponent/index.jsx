import React, { useState, useEffect } from 'react';
import './styles.css/text-area-component.scss';

function TextAreaComponent({
  housingOptions,
  setHousingOptions,
  instruction,
  maxLength,
  field,
  textStyle,
}) {
  const [titleLength, setTitleLength] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleChange = (e) => {
    setTitleLength(e.target.value.length);
    setHousingOptions({ ...housingOptions, [field]: e.target.value });
    setTextAreaValue(e.target.value);
  };

  useEffect(() => {
    setTitleLength(housingOptions[field].length);
    setTextAreaValue(housingOptions[field]);
  }, [field]);

  return (
    <div className="text-area-component">
      <h2 className="text-area-component__instruction">{instruction}</h2>
      <div className="text-area-component__input">
        <textarea
          className={`text-area-component__input--text-${textStyle}`}
          id="title"
          cols="30"
          rows="10"
          autoComplete="off"
          maxLength={maxLength}
          onChange={handleChange}
          value={textAreaValue}
        />
      </div>
      <span className="text-area-component__length">{`${titleLength}/${maxLength}`}</span>
    </div>
  );
}

export default TextAreaComponent;
