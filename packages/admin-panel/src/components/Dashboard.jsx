import React, { useState, useEffect } from "react";
import axios from "axios";

import { GridItem } from "./GridItem";
import styles from "../assets/styles/Dashboard.module.scss";

export const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const baseURL = "http://demo3812532.mockable.io/users";

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

  return (
    <section className={styles.dashboard}>
      <h2>Users develop</h2>
      <ul className={styles.list}>
        {users.map((user) => (
          <GridItem user={user} />
        ))}
      </ul>
    </section>
  );
};
