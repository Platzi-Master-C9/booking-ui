import React, { useState, useEffect } from 'react';
import './styles.css/text-area.scss';
import {usePlaceProvider} from "../../../context/place"

export function TextArea({
  instruction,
  maxLength,
  field,
  textStyle,
}) {
  const { placeOptions, setPlaceOptions } = usePlaceProvider();
  const [titleLength, setTitleLength] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleChange = (e) => {
    setTitleLength(e.target.value.length);
    setPlaceOptions({ ...placeOptions, [field]: e.target.value });
    setTextAreaValue(e.target.value);
  };

  useEffect(() => {
    setTitleLength(placeOptions[field].length);
    setTextAreaValue(placeOptions[field]);
  }, [field]);

  return (
    <div className="text-area">
      <h2 className="text-area__instruction">{instruction}</h2>
      <div className="text-area__input">
        <textarea
          className={`text-area__input--text-${textStyle}`}
          id="title"
          cols="30"
          rows="10"
          autoComplete="off"
          maxLength={maxLength}
          onChange={handleChange}
          value={textAreaValue}
        />
      </div>
      <span className="text-area__length">{`${titleLength}/${maxLength}`}</span>
    </div>
  );
}

export default TextArea;
