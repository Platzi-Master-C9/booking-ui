// External dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ChatList from '../../components/ChatList';

import classes from './Chat.module.scss';

function ChatPage({
  customerId,
}) {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={`${classes.sidePanel} ${classes.chatListContainer}`}>
          <ChatList userId={customerId} />
        </div>
      </div>
      <Footer />
    </>
  );
}

ChatPage.propTypes = {
  customerId: PropTypes.string.isRequired,
};

export default ChatPage;
