import React, { useState } from "react";

export default function InputContainer({ label, value }) {
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");
  function handleGameClick() {
    setDisabled(!disabled);
    setActive(!isActive);
  }
  const [text, setText] = useState("");
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
          value={text ? text : value.email}
          onChange={(e) => setText(e.target.value)}
        />
            <sub>Escriba su email</sub>
          </div>
        )}
      </div>
      <div className="data-text">
        {isActive && <p>{text ? text : value.email}</p>}
      </div>
    </div>
  );
}