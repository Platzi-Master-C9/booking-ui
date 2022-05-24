import React, { useState } from 'react';
import './styles.css/create-title.scss';

function CreateTitle({ housingOptions, setHousingOptions }) {
  const [titleLength, setTitleLength] = useState(housingOptions.title.length);

  const handleChange = (e) => {
    setTitleLength(e.target.value.length);
    setHousingOptions({ ...housingOptions, title: e.target.value });
  };

  return (
    <div className="create-title">
      <h2 className="create-title__title">Crea tu título</h2>
      <div className="create-title__textarea">
        <textarea
          id="title"
          cols="30"
          rows="10"
          autoComplete="off"
          maxLength={50}
          onChange={handleChange}
          defaultValue={housingOptions.title}
        />
      </div>
      <span className="create-title__length">{`${titleLength}/50`}</span>
    </div>
  );
}

export default CreateTitle;
