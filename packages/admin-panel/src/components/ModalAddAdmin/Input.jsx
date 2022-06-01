import React from "react";
import "./style/Input.css";

const Input = ({ label, ...rest }) => {
  return (
    <div className="field-ModalAddAdmin">
      <h3 className="titleFormCreateAdmin-ModalAddAdmin">{label}</h3>
      <input {...rest} required />
    </div>
  );
};

export default Input;
