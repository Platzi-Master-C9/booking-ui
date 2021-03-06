import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const ButtonAddAdmin = ({ openModalAddAdmin }) => {
  return (
    <div
      onClick={openModalAddAdmin}
      id="container_buttonAddAdmin"
      className="CardAdmin"
    >
      <div id="buttonAddAdmin" className="profile-picture_CardAdmin">
        <AddCircleOutlineIcon id="iconAddAdmin" />
      </div>
      <b>Agregar administrador</b>
    </div>
  );
};
