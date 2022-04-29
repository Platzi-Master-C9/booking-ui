import React from 'react';
import NotificationCard from '../../components/NotificationCard/index.component';
import styles from './NotificationsDashboard.module.scss';

const NotificationsDashboard = () => {
  return (
    <>
      <div className={styles.dashboard}>
        <h1 className={styles.title}>Notificaciones</h1>
        <div className={styles.notificationsList}>
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         <NotificationCard />
         </div>
      </div>
    </>
  );
};

export default NotificationsDashboard;
