import React, { useState } from "react";

import { ChangeStatus } from "./ChangeStatus";
import styles from "../../assets/styles/UserDetailsList.module.scss";

export const UserDetailsList = ({ userData }) => {
  const [userStatusActive, setUserStatusActive] = useState(false);

  const handleStatusActive = () => {
    setUserStatusActive(!userStatusActive);
  };

  return (
    <>
      <ul className={styles.detailsList}>
        <li className={styles.detailsList__item}>
          <div className={styles.listHeadline}>
            <p>User status</p>
            <button onClick={handleStatusActive}>Edit</button>
          </div>
          <div>
            <p>{userData.status}</p>
          </div>
          <ChangeStatus
            userData={userData}
            isChangeStatusActive={userStatusActive}
          />
        </li>

        <li className={styles.detailsList__item}>
          <div className={styles.listHeadline}>
            <p>User type</p>
            <button>Edit</button>
          </div>
          <div>
            <p>{userData.userType === 1 ? "GUEST" : "HOST"}</p>
          </div>
        </li>

        <li className={styles.detailsList__item}>
          <div className={styles.listHeadline}>
            <p>Validation</p>
            <button>Edit</button>
          </div>
          <div>
            <p>{userData.validated === true ? "VALIDATED" : "REQUIRED"}</p>
          </div>
        </li>
      </ul>
    </>
  );
};
