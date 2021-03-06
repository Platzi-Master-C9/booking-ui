import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { CardAdmin } from "./CardAdmin";
import "../../assets/styles/LayoutAdministrators.scss";
import { SearchBar } from "./SearchBar";
import ModalAddAdmin from "../ModalAddAdmin";

const api_url =
  "https://admin-panel-booking-services.herokuapp.com/admin-panel/admins";

const DashboardAdmin = styled.div`
  width: 100%;
`;

export const LayoutAdministrators = () => {
  const [admins, setAdmins] = useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [profileType, setProfileType] = React.useState(2);
  const [modalAddAdmin, setModalAddAdmin] = React.useState(false);

  const openModalAddAdmin = (props) => {
    setModalAddAdmin((prevState) => !prevState);
  };

  useEffect(async () => {
    const response = await axios(api_url);
    setAdmins(response.data.result);
  }, []);

  admins.sort((a, b) => {
    if (a.fullName < b.fullName) {
      return -1;
    }
    if (a.fullName > b.fullName) {
      return 1;
    }
    return 0;
  });

  var searchAdmin = [];
  if (!searchValue.length >= 1) {
    searchAdmin = admins;
  } else {
    searchAdmin = admins.filter((admins) => {
      const adminsText = admins.fullName.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return adminsText.includes(searchText);
    });
  }

  return (
    <div className="container-DashboardAdmin">
      {!!modalAddAdmin && (
        <ModalAddAdmin openModalAddAdmin={openModalAddAdmin} />
      )}

      <h1 className="title-DashboardAdmin">Administradores</h1>
      <DashboardAdmin>
        <SearchBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          profileType={profileType}
          setProfileType={setProfileType}
        />
        <CardAdmin
          searchAdmin={searchAdmin}
          profileType={profileType}
          setProfileType={setProfileType}
          openModalAddAdmin={openModalAddAdmin}
        ></CardAdmin>
      </DashboardAdmin>
    </div>
  );
};
