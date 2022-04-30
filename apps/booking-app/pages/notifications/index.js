import { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader, NotificationCard } from '@booking-ui/shared';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setTimeout(() => setNotifications(Array(5).fill({})), 1000);
  }, []);

  const fetchMoreData = () => {
    try {
      setTimeout(() => {
        setNotifications([...notifications, ...Array(5).fill({})], () => {});
        if (notifications.length > 20) {
          setHasMore(false);
        }
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const EndMessage = () => (
    <p style={{ textAlign: 'center' }}>
      <b>There are no more notifications</b>
    </p>
  );

  return (
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
  );
}
