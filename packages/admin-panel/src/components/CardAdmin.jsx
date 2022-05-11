import React from "react";
import "../assets/styles/LayoutAdministrators.scss";

export const CardAdmin = ({ searchAdmin, profileType, setProfileType }) => {
  return (
    <>
      <div className="container_CardsAdmin">
        {searchAdmin.map((admin, key) => {
          if (admin.profile == 3) {
            return null;
          } else if (admin.profile != profileType) {
            return (
              <div key={key} className="CardAdmin">
                <img
                  src={admin.urlImage}
                  alt="profile picture"
                  className="profile-picture_CardAdmin"
                />
                <p className="full-name_CardAdmin">
                  <b>{admin.fullName}</b>
                </p>
                <p className="profile_CardAdmin">
                  {admin.profile == 1 ? "Super Admin" : "Admin"}
                </p>
                <div className="container-button_CardAdmin">
                  <button className="button_CardAdmin">Manage</button>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};
