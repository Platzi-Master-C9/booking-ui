import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { CardContainer } from "./Filters/CardContainer";
import { GridItem } from "./GridItem";
import styles from "../assets/styles/Dashboard.module.scss";
import { ContextFilters } from "./Filters/FiltersContext/ContextFilters";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const { checked, setChecked, show, openFilters, setOpenFilters, handleSetShow, handleSetChecked, handleSetDelete, clicked, setClicked, setShow, applyFilter, filterUsers } = useContext(ContextFilters)
  const baseURL = `https://admin-panel-booking-services.herokuapp.com/admin-panel/users?${applyFilter.optionOne}&${applyFilter.optionTwo}&${applyFilter.optionThree}&${applyFilter.optionFour}&${applyFilter.optionFive}&${applyFilter.optionSixx}`;

  useEffect(() => {
    getUsers();
  }, [baseURL, checked, applyFilter]);

  const getUsers = async () => {
    try {
      const urlWithFilters = baseURL
      const response = await axios.get(urlWithFilters);
      setUsers(response.data.result);
    } catch (error) {
      setError(error);
    }
  };


  return (
    <section className={styles.dashboard}>
      <h2>Users</h2>
      <div className={styles.filtersItem}>
        <div style={{ gridColumn: "1/2"}}>
        <span className={styles.spanName}>Nombre</span>
        </div>
        <div style={{ gridColumn: "2/3"}}>
          <CardContainer type={"Type"} titleOne="Host" titleTwo="Guest" descriptionOne="Descripcion para anfitrion" descriptionTwo="Descripcion para huesped" show={show.showOne} checkedOne={checked.checkedOne} checkedTwo={checked.checkedTwo} handleSetShow={() => handleSetShow("showOne", !show.showOne)} handleChexboxOne={(e) => handleSetChecked("checkedOne", e.target.checked, "optionOne")} handleChexboxTwo={(e) => handleSetChecked("checkedTwo", e.target.checked, "optionTwo")} handleChexboxOneDelete={(e) => handleSetDelete("checkedOne", "checkedTwo", "optionOne", "optionTwo", "", false, false)} />
        </div>
        <div style={{ gridColumn: "3/4"}}>
          <CardContainer type={"State"} titleOne="Active" titleTwo="Banned" descriptionOne="Descripcion para activo" descriptionTwo="Descripcion para inactivo" show={show.showTwo} checkedOne={checked.checkedThree} checkedTwo={checked.checkedFour} handleSetShow={() => handleSetShow("showTwo", !show.showTwo)} handleChexboxOne={(e) => handleSetChecked("checkedThree", e.target.checked, "optionThree")} handleChexboxTwo={(e) => handleSetChecked("checkedFour", e.target.checked, "optionFour")} handleChexboxOneDelete={(e) => handleSetDelete("checkedThree", "checkedFour", "optionThree", "optionFour", "", false, false)} />
        </div>
        <div style={{ gridColumn: "4/5"}}>
          <CardContainer type={"Validation"} titleOne="Yes" titleTwo="No" descriptionOne="Descripcion para sí" descriptionTwo="Descripcion para no" show={show.showThree} checkedOne={checked.checkedFive} checkedTwo={checked.checkedSixx} handleSetShow={() => handleSetShow("showThree", !show.showThree)} handleChexboxOne={(e) => handleSetChecked("checkedFive", e.target.checked, "optionFive")} handleChexboxTwo={(e) => handleSetChecked("checkedSixx", e.target.checked, "optionSixx",)} handleChexboxOneDelete={(e) => handleSetDelete("checkedFive", "checkedSixx", "optionFive", "optionSixx", "", false, false)} />
        </div>
      </div>
      <ul className={styles.list}>
        { 
            users.map((user) => (
          <GridItem user={user} />
        ))
        }
      </ul>
    </section>
  );
};