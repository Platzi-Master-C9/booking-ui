// External dependencies
import React from 'react';

// Internal dependencies
import ChatCard from '../ChatCard/ChatCard';
import classes from './ChatList.module.scss';

const messages = [
  {
    _id: 1,
  },
  {
    _id: 2,
  },
  {
    _id: 3,
  },
];

// eslint-disable-next-line react/prop-types
function ChatList({ items = messages, onSelectChat = () => {}, disabled = false }) {
  return (
    <section className={classes.container}>
      <h1 className={classes.title}>Mensajes</h1>

      <ul className={classes.list}>
        {
          items.map((item) => (
            <li className={classes.listItemContainer} key={item._id}>
              <button
                className={classes.listItem}
                type="button"
                onClick={() => onSelectChat?.(item)}
                disabled={disabled}
              >
                <ChatCard
                  lastMessage="Hola, ¿cómo estás?"
                  profilePicture="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                  username="Juan"
                />
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default ChatList;
