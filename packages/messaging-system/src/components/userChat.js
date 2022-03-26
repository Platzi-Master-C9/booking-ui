import React from "react";
import styles from '../assets/scss/Message.module.scss'

export const UserChat = ({ children, status }) => {

  const statusClass = status ? styles.received : styles.sended

  return (
      <div className={styles.chatMessage}>
        <div className={`${styles.message} ${statusClass}`}>
            <div className={styles.avatar}>
                <img src="/avatar.png" alt="Avatar" />
            </div>
            <div className={styles.content}>
                <h3>Adrian Bautista</h3>
                <p>Test...</p>
            </div>
        </div>

        <div className={styles.date}>
            <p><small>2022-03-24</small></p>
        </div>
      </div>
  );
};