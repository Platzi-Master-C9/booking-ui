import React, { useState } from "react";

export default function InputContainer({ label, value, sub }) {
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");
  function handleGameClick() {
    setDisabled(!disabled);
    setActive(!isActive);
  }
  console.log(value);
  const [country, setCountry] = useState("");
  const [citie, setCitie] = useState("");
  const [addres, setAddres] = useState("");

  return (
    <div className="inputContainer">
      <label>{label}</label>
      {isActive && <span onClick={handleGameClick}>Editar</span>}
      {!isActive && <span onClick={handleGameClick}>Guardar</span>}

      <div className="data-input">
        {!isActive && (
          <div className="data-input-item">
            <input
          type="text" 
          value={addres ? addres : value.addres}
          onChange={(e) => setAddres(e.target.value)}
        />
        <sub>{sub.addres}</sub>
          </div>
        )}
        {!isActive && (
          <div className="data-input-item">
              <input
          type="text" 
          value={citie ? citie : value.citie}
          onChange={(e) => setCitie(e.target.value)}
        />
            <sub>{sub.citie}</sub>
          </div>
        )}
        {!isActive && (
          <div className="data-input-item">
            <input
          type="text" 
          value={country ? country : value.country}
          onChange={(e) => setCountry(e.target.value)}
        />
            <sub>{sub.country}</sub>
          </div>
        )}
      </div>
      <div className="data-text">
      {isActive && (
        <p>{addres ? addres : value.addres} {citie ? citie : value.citie} {country ? country : value.country}</p>
      )}
      </div>
    </div>
  );
}
