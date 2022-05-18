import React, { useState } from "react";

export default function InputContainer({ label, value, sub }) {
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");
  function handleGameClick() {
    setDisabled(!disabled);
    setActive(!isActive);
  }
 // console.log(value);
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondname] = useState("");
  const [firstSurname, setFirstSurname] = useState("");
  const [secondSurname, setSecondSurname] = useState("");


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
          value={firstname ? firstname : value.firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <sub>{sub.firstName}</sub>
          </div>
        )}
        {!isActive && (
          <div className="data-input-item">
              <input
          type="text" 
          value={secondname ? secondname : value.secondName}
          onChange={(e) => setSecondname(e.target.value)}
        />
            <sub>{sub.secondName}</sub>
          </div>
        )}
        {!isActive && (
          <div className="data-input-item">
            <input
          type="text" 
          value={firstSurname ? firstSurname : value.firstSurname}
          onChange={(e) => setFirstSurname(e.target.value)}
        />
            <sub>{sub.firstSurname}</sub>
          </div>
        )}
        {!isActive && (
          <div className="data-input-item">
            <input
          type="text" 
          value={secondSurname ? secondSurname : value.secondSurname}
          onChange={(e) => setSecondSurname(e.target.value)}
        />
            <sub>{sub.secondSurname}</sub>
          </div>
        )}
      </div>
      <div className="data-text">
      {isActive && (
        <p>{firstname ? firstname : value.firstName} {secondname ? secondname : value.secondName} {firstSurname ? firstSurname : value.firstSurname} {secondSurname ? secondSurname : value.secondSurname}</p>
      )}
      </div>
    </div>
  );
}
