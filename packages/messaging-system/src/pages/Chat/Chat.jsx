/* eslint-disable no-underscore-dangle */
// External dependencies
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChatList from '../../components/ChatList';
import Chat from '../../components/Chat';
import Place from '../../components/SideCard';

import classes from './Chat.module.scss';

function ChatPage({
  customerId,
}) {
  // Component's state
  const [selectedChat, setSelectedChat] = useState();

  // Handlers
  const onSelectChat = (chat) => {
    setSelectedChat(chat);
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
            <>
              <div className={classes.chatContainer}>
                <Chat
                  key={selectedChat._id}
                  customerId={customerId}
                  chatId={selectedChat._id}
                />
              </div>

              <div className={`${classes.sidePanel} ${classes.placeContainer}`}>
                <Place />
              </div>
            </>
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
