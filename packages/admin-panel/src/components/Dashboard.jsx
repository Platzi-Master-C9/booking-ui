import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CardContainer } from "./Filters/CardContainer";
import { GridItem } from "./GridItem";
import styles from "../assets/styles/Dashboard.module.scss";
import { ContextFilters } from "./Filters/FiltersContext/ContextFilters";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const baseURL = "http://demo5412895.mockable.io/users";

  const { checked, setChecked, show, openFilters, setOpenFilters, handleSetShow, handleSetChecked, handleSetDelete, usersC } = useContext(ContextFilters)

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get(baseURL);
      setUsers(response.data);
    } catch (error) {
      setError(error);
    }
  };

 const filterUsers = users.filter((u) => checked.checkedOne && u.type === "Anfitrión" || checked.checkedTwo && u.type === "Huésped" || checked.checkedThree && u.status === "Activo" || checked.checkedFour && u.status === "Inactivo" || checked.checkedFive && u.validate === "Sí" || checked.checkedSixx && u.validate === "No")

 return (
    <section className={styles.dashboard}>
      <h2>Users</h2>
      <div className={styles.filtersItem}>
        <div style={{ gridColumn: "1/2"}}>
        <span className={styles.spanName}>Nombre</span>
        </div>
        <div style={{ gridColumn: "2/3"}}>
          <CardContainer styles type={"Tipo"} titleOne="Anfitrión" titleTwo="Huésped" descriptionOne="Descripcion para anfitrion" descriptionTwo="Descripcion para huesped" show={show.showOne} checkedOne={checked.checkedOne} checkedTwo={checked.checkedTwo} handleSetShow={() => handleSetShow("showOne", !show.showOne)} handleChexboxOne={(e) => handleSetChecked("checkedOne", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedTwo", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedOne", "checkedTwo", false, false)} />
        </div>
        <div style={{ gridColumn: "3/4"}}>
          <CardContainer type={"Estado"} titleOne="Activo" titleTwo="Inactivo" descriptionOne="Descripcion para activo" descriptionTwo="Descripcion para inactivo" show={show.showTwo} checkedOne={checked.checkedThree} checkedTwo={checked.checkedFour} handleSetShow={() => handleSetShow("showTwo", !show.showTwo)} handleChexboxOne={(e) => handleSetChecked("checkedThree", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedFour", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedThree", "checkedFour", false, false)} />
        </div>
        <div style={{ gridColumn: "4/5"}}>
          <CardContainer type={"Validación"} titleOne="Sí" titleTwo="No" descriptionOne="Descripcion para sí" descriptionTwo="Descripcion para no" show={show.showThree} checkedOne={checked.checkedFive} checkedTwo={checked.checkedSixx} handleSetShow={() => handleSetShow("showThree", !show.showThree)} handleChexboxOne={(e) => handleSetChecked("checkedFive", e.target.checked)} handleChexboxTwo={(e) => handleSetChecked("checkedSixx", e.target.checked)} handleChexboxOneDelete={(e) => handleSetDelete("checkedFive", "checkedSixx", false, false)} />
        </div>
      </div>
      <ul className={styles.list}>
        {
          filterUsers.length === 0 ? (
            users.map((user) => (
          <GridItem user={user} />
        ))
          ) : filterUsers.map((userFiltered) => (
            <GridItem user={userFiltered} />
          ))
        }
      </ul>
    </section>
  );
};