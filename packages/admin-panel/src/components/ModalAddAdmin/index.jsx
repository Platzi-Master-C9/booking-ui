import React, { useState } from "react";
import "./style/Input.css";
import Card from "./Card";
import Container from "./Container";
import UserForm from "./UserForm";
import TitleCard from "./TitleCard";

const ModalAddAdmin = ({ children, openModalAddAdmin }) => {
  const [newAdmins, setAdmins] = useState([]);

  const submit = (newAdmin) => {
    setAdmins([...newAdmins, newAdmin]);
  };
  console.log(newAdmins);
  return (
    <>
      <Container>
        <Card>
          <TitleCard openModalAddAdmin={openModalAddAdmin} />
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} openModalAddAdmin={openModalAddAdmin} />
          </div>
        </Card>
      </Container>
      <div>{children}</div>
    </>
  );
};

export default ModalAddAdmin;
