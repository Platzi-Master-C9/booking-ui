import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import { CardAdmin } from "./CardAdmin";
import "../assets/styles/LayoutAdministrators.scss";

const api_url =
  "https://admin-panel-booking-services.herokuapp.com/admin-panel/admins";

const DashboardAdmin = styled.div`
  width: 100%;
`;

export const LayoutAdministrators = () => {
  const [admins, setAdmins] = useState([]);

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

  return (
    <div className="conteiner-DashboardAdmin">
      <h1 className="title-DashboardAdmin">Administradores</h1>
      <DashboardAdmin>
        <CardAdmin admins={admins}></CardAdmin>
      </DashboardAdmin>
    </div>
  );
};
