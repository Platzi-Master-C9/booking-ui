import React from "react";
import "./style/TitleCard.css";
import CloseIcon from "@mui/icons-material/Close";

const TitleCard = ({ openModalAddAdmin }) => {
  return (
    <div className="TitleCard-ModalAddAdmin">
      <h1>Crear administrador</h1>
      <div onClick={openModalAddAdmin} className="iconCloseModalCreateAdmin">
        <CloseIcon />
      </div>
    </div>
  );
};

export default TitleCard;
