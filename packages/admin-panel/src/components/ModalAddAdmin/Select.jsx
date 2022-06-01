import React from "react";

const Select = ({ label, ...rest }) => {
  return (
    <>
      <h3 className="titleFormCreateAdmin-ModalAddAdmin">{label}</h3>
      <select {...rest} required>
        <option value=""></option>
        <option value="3"> Admin </option>
        <option value="4"> Super Admin </option>
      </select>
    </>
  );
};

export default Select;
