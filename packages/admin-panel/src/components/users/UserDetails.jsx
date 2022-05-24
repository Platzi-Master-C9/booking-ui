import styles from "../../assets/styles/UserDetails.module.scss";

export const UserDetails = ({ userData }) => {
  return (
    <>
      <div className={styles.containerData}>
        <div className={styles.containerImg}>
          <img
            src={userData.urlImage}
            className={styles.user__image}
            alt="User profile image"
          />
        </div>
        <div className={styles.details}>
          <h4>{userData.fullName}</h4>
          <p className={styles.date}>
            Registered on: {userData.dateOfRegister}
          </p>
        </div>
        <button className={styles.delete__button}>Delete user</button>
      </div>
    </>
  );
};
