import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserDetails } from "./UserDetails";
import axios from "axios";

import styles from "../../assets/styles/UserContainer.module.scss";

export const UserContainer = ({ userId }) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const baseURL = `https://admin-panel-booking-services.herokuapp.com/admin-panel/users/${userId}`;

  useEffect(() => {
    getUserDetails();
  }, [userId]);

  const getUserDetails = async () => {
    try {
      const response = await axios.get(baseURL);
      setUserData(response.data.result);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <article className={styles.user__container}>
      <div className={styles.breadcrumbs}>
        <Link href="/admin/users/">
          <span>{`< Users`}</span>
        </Link>
      </div>
      <h2>User information</h2>
      <UserDetails userData={userData} />
    </article>
  );
};
