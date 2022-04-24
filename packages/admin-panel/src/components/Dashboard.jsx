import React, { useState, useEffect } from "react";
import axios from "axios";

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
  console.log(users);

  return (
    <section className={styles.dashboard}>
      <h2>Users</h2>
      <ul className={styles.list}>
        {users.map((user) => {
          return (
            <li id={user.id} className={styles.list__item}>
              <div className={styles.item__tag}>{user.full_name}</div>
              <div className={styles.item__tag}>Host</div>
              <div className={styles.item__tag}>{user.status}</div>
              <div className={styles.item__tag}>Yes</div>
              <div className={styles.item__tag}>{user.date_of_register}</div>
              <div className={styles.manage}>Manage</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
