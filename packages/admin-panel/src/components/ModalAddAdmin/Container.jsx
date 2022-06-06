import React from "react";
import "./style/Container.css";
const Container = ({ children }) => {
  return (
    <div className="background-ModalAddAdmin">
      <div className="container-ModalAddAdmin">{children}</div>
    </div>
  );
};

export default Container;
