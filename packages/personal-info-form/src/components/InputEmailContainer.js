import React, { useState } from "react";
import { Text, TextInput } from "react-native";
export default function InputContainer({ label, value }) {
  const [disabled, setDisabled] = useState(true);
  const [isActive, setActive] = useState("false");
  function handleGameClick() { setDisabled(!disabled); setActive(!isActive); }
  const [text, setText] = useState("");
  return (
    <div className="inputContainer">
      <label>{label}</label>
      {isActive && <span onClick={handleGameClick}>Editar</span>}
      {!isActive && <span onClick={handleGameClick}>Guardar</span>}
      <div className="data-input"> {!isActive && ( <div className="data-input-item"> <TextInput onChangeText={(newText) => setText(newText)} defaultValue={value.email} /> <sub>Escriba su email</sub> </div> )} </div>
      <div className="data-text"> {isActive && <Text>{text ? text : value.email}</Text>} </div>
    </div>
  );
}