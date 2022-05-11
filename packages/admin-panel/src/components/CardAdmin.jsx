import React from "react";
import "../assets/styles/LayoutAdministrators.scss";

export const CardAdmin = ({ admins }) => {
  const [profileType, setProfileType] = React.useState(3);

  return (
    <>
      <div className="conteiner-filters_DashboardAdmins">
        <p>
          <b>Filtros:</b>
        </p>
        <button
          id={profileType == 1 ? "active" : ""}
          className="btn-filter_DashboardAdmins"
          onClick={
            profileType != 1 ? () => setProfileType(1) : () => setProfileType(3)
          }
        >
          Admin
        </button>
        <button
          className="btn-filter_DashboardAdmins"
          id={profileType == 2 ? "active" : ""}
          onClick={
            profileType != 2 ? () => setProfileType(2) : () => setProfileType(3)
          }
        >
          Super Admin
        </button>
      </div>
      <div className="container_CardsAdmin">
        {admins.map((admin, key) => {
          if (admin.profile != profileType) {
            return (
              <div className="CardAdmin">
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
