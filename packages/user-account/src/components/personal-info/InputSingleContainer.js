import React, { useState } from "react";

export default function InputContainer({ label, value, sub }) {
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
      {isActive && sub && <span onClick={handleGameClick}>Editar</span>}
      {!isActive && sub && <span onClick={handleGameClick}>Guardar</span>}

      <div className="data-input">
        {!isActive && sub && (
          <div className="data-input-item">
            <input
          type="text" 
          value={text ? text : value}
          onChange={(e) => setText(e.target.value)}
        />
            <sub>{sub}</sub>
          </div>
        )}
      </div>
      <div className="data-text">
        {isActive && <p>{text ? text : value}</p>}
      </div>
    </div>
  );
}