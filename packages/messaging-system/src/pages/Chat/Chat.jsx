/* eslint-disable no-underscore-dangle */
// External dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChatList from '../../components/ChatList';
import Chat from '../../components/Chat';

import classes from './Chat.module.scss';

function ChatPage({
  customerId,
}) {
  // Component's state
  const [selectedChat, setSelectedChat] = useState();

  // Handlers
  const onSelectChat = (chat) => {
    setSelectedChat(null);

    // We need to until the component is unmounted
    setTimeout(() => {
      setSelectedChat(chat);
    }, 500);
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={`${classes.sidePanel} ${classes.chatListContainer}`}>
          <ChatList userId={customerId} onSelectChat={onSelectChat} />
        </div>
        {
          Boolean(selectedChat) && (
            <div className={classes.chatContainer}>
              <Chat
                customerId={customerId}
                chatId={selectedChat._id}
              />
            </div>
          )
        }
      </div>
      <Footer />
    </>
  );
}

ChatPage.propTypes = {
  customerId: PropTypes.string.isRequired,
};

export default ChatPage;
