// External dependencies
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import ChatCard from '../ChatCard/ChatCard';
import Loader from '../Loader';
import classes from './ChatList.module.scss';
import { getChatRooms } from '../../services/chat';

function ChatList({
  userId,
  onSelectChat,
  disabled,
}) {
  // Component's state
  const [loading, setLoading] = useState(false);
  const [chatsPage, setChatsPage] = useState(1);
  const [chats, setChats] = useState([]);

  // Handlers
  const fetchChatList = async () => {
    setLoading(true);

    const response = await getChatRooms(userId, chatsPage);

    const newChats = [...chats, ...response.rows];

    setChats(newChats);
    setLoading(false);
  };

  const loadMore = () => {
    setChatsPage(chatsPage + 1);
  };

  // Hooks
  useEffect(() => {
    fetchChatList();
  }, [userId]);

  useEffect(() => {
    if (chatsPage > 1) {
      fetchChatList();
    }
  }, [chatsPage]);

  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Mensajes</h1>

      <ul className={classes.list}>
        {
          chats.map((item) => (
            <li className={classes.listItemContainer} key={item._id}>
              <button
                className={classes.listItem}
                type="button"
                onClick={() => onSelectChat?.(item)}
                disabled={disabled || loading}
              >
                <ChatCard
                  lastMessage="Ut reprehenderit irure eiusmod laborum aliqua ut eiusmod enim anim culpa laborum eu pariatur."
                  profilePicture="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  username={`John Doe #${item._id}`}
                />
              </button>
            </li>
          ))
        }
        {
          chats.length > 0 && (
            <li className={classes.listItemContainer}>
              <div className={classes.loadMoreContainer}>
                {
                  loading ? (
                    <Loader color="#0071A4" />
                  ) : (
                    <button
                      className={classes.loadMoreBtn}
                      type="button"
                      disabled={disabled || loading}
                      onClick={loadMore}
                    >
                      Cargar Más
                    </button>
                  )
                }
              </div>
            </li>
          )
        }

      </ul>

    </section>
  );
}

ChatList.propTypes = {
  userId: PropTypes.string.isRequired,
  onSelectChat: PropTypes.func,
  disabled: PropTypes.bool,
};

ChatList.defaultProps = {
  onSelectChat: () => {},
  disabled: false,
};

export default ChatList;
