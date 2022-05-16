import styles from "../../assets/styles/UserDetails.module.scss";

export const UserDetails = ({ userData }) => (
  <ul className={styles.detailsList}>
    <li className={styles.detailsList__item}>
      <div className={styles.listHeadline}>
        <p>Legal name</p>
        <button>Edit</button>
      </div>
      <div>
        <p>{userData.fullName}</p>
      </div>
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
        <p>User state</p>
        <button>Edit</button>
      </div>
      <div>
        <p>{userData.status}</p>
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

    <li className={styles.detailsList__item}>
      <div className={styles.listHeadline}>
        <p>Date of register</p>
        <button>Edit</button>
      </div>
      <div>
        <p>{userData.dateOfRegister}</p>
      </div>
    </li>
  </ul>
);
