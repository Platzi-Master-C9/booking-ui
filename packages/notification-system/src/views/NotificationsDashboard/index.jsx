import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader } from '../../components/Loader';
import { NotificationCard } from '../../components/NotificationCard';
import styles from './NotificationsDashboard.module.scss';

export const NotificationsDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setTimeout(() => setNotifications(Array(5).fill({})), 1000);
  }, []);

  const fetchMoreData = () => {
    try {
      setTimeout(() => {
        setNotifications([...notifications, ...Array(5).fill({})], () => { });
        if (notifications.length > 20) {
          setHasMore(false);
        }
      }, randomNumber());
    } catch (error) {
      console.log(error);
    }
  };

  // Function to get a random number and simulate a delay
  const randomNumber = () => {
    const number = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    return number;
  }

  const EndMessage = () => (
    <p className={styles.endMessage}>
      <b>There are no more notifications</b>
    </p>
  );

  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Notificaciones</h1>
      <div className={styles.notificationsList}>
        <InfiniteScroll
          dataLength={notifications.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<Loader />}
          endMessage={<EndMessage />}
          scrollThreshold="1px"
        >
          {notifications.map((_, index) => (
            <NotificationCard key={index} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};
