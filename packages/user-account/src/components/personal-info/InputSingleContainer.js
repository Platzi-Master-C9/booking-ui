import React, { useState } from "react";

export default function InputContainer({ label, value, sub, type, containerId }) {
  const [inputvalue, setInputValue] = useState("") 
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");
  function handleGameClick() {
    setDisabled(!disabled);
    setActive(!isActive);
  }
  function save(){
      let input = document.getElementById(containerId).value;
        allLetter(input)
  }
  
  function allLetter(inputtxt)
      { 
        if (type == "alphabet"){
          var letters = /^[A-Za-z]+$/;
          if(inputtxt.match(letters)){
            setText(inputtxt)
            handleGameClick()
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
            handleGameClick()
          } else {
            alert("Please input numbers only")
            return (false)
          }
        }
      }
  const [text, setText] = useState("");
  return (
    <div className="inputContainer" >
      <label>{label}</label>
      {isActive && sub && <span onClick={handleGameClick}>Editar</span>}
      {!isActive && sub && <span onClick={save}>Guardar</span>}

      <div className="data-input">
        {!isActive && sub && (
          <div className="data-input-item">
            <input
          id ={containerId ? containerId : "id_test"}
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