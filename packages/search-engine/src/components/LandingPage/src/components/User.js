import React from "react";

import userImage from "../assets/iconUser.png";
import "../style/User.css";

const User = () => {
  return (
    <div className="user--experience-container">
      <p>Hazte anfitrion</p>
      <div className="user--img-container">
        <img src={userImage} />
      </div>
    </div>
  );
};

export { User };
