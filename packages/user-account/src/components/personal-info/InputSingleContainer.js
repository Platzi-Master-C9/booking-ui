import React, { useState } from "react";

export default function InputContainer({ label, value, sub, type }) {
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");
  function handleGameClick() {
    setDisabled(!disabled);
    setActive(!isActive);
  }
  function allLetter(inputtxt)
      { 
        if (type == "alphabet"){
          var letters = /^[A-Za-z]+$/;
          if(inputtxt.match(letters)){
            setText(inputtxt)
          } else
          {
            alert('Please input alphabet characters only');
            return false;
          }
        }
        if (type == "number"){
          var numbers = /^[0-9]+$/;
          if(inputtxt.match(numbers)){
            setText(inputtxt)
          } else {
            alert("Please input numbers only")
            return (false)
          }
        }
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
          onChange={(e) => allLetter(e.target.value)}
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