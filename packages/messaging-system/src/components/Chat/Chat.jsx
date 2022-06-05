/* eslint-disable no-underscore-dangle */
// External dependencies
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

// Internal dependencies
import classes from './Chat.module.scss';
import ResponseTime from '../ResponseTime';
import TextBox from '../TextBox';
import Message from '../Message';
import DateSeparator from '../DateSeparator';
import Loader from '../Loader';
import { getMessagesFromChatRoom, createMessage } from '../../services/messages';

function Chat({ customerId, chatId }) {
  // Refs
  const scrollViewRef = useRef();

  // Component's state
  const [fetchingMessages, setFetchingMessages] = useState(false);
  const [rawMessages, setRawMessages] = useState([]);
  const [messagesPage, setMessagesPage] = useState(1);

  const [draftMessage, setDraftMessage] = useState();
  const [creatingMessage, setCreatingMessage] = useState(false);

  // Handlers
  const getGroupName = (timestamp) => {
    const date = new Date(timestamp);
    // Get year
    const year = date.getFullYear();

    // get month
    const month = date.getMonth();

    // get day
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  };

  const fetchMessages = async () => {
    setFetchingMessages(true);

    const response = await getMessagesFromChatRoom(chatId, customerId, messagesPage);
    const newMessages = [...rawMessages, ...response.rows];

    setRawMessages(newMessages);
    setFetchingMessages(false);
  };

  const scrollToBottom = () => {
    // scroll to bottom
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTop = scrollViewRef.current?.scrollHeight;
    }
  };

  const submitMessage = async () => {
    const normalizedMessage = draftMessage?.trim();
    if (!normalizedMessage) return;

    setCreatingMessage(true);
    const response = await createMessage(chatId, normalizedMessage, customerId);
    if (response) {
      // add new message to the list
      const newMessages = [response, ...rawMessages];
      setRawMessages(newMessages);
      scrollToBottom();
    }

    setDraftMessage('');
    setCreatingMessage(false);
  };

  const loadMore = async () => {
    setMessagesPage(messagesPage + 1);
  };

  // Hooks
  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (messagesPage > 1) {
      fetchMessages();
    }
  }, [messagesPage]);

  const groupedMessages = useMemo(() => {
    if (rawMessages.length === 0) {
      return [];
    }

    let currentGroupName = getGroupName(rawMessages[0].createdAt);
    // TODO: Implement a better data structure
    const group = [{
      name: currentGroupName,
      messages: [rawMessages[0]],
    }];

    for (let i = 1; i < rawMessages.length; i += 1) {
      const message = rawMessages[i];

      const groupName = getGroupName(message.createdAt);

      if (currentGroupName !== groupName) {
        currentGroupName = groupName;
        // insert at the beginning
        group.unshift({
          name: currentGroupName,
          messages: [message],
        });
      } else {
        group[0].messages.unshift(message);
      }
    }

    return group;
  }, [rawMessages]);

  useEffect(() => {
    if (groupedMessages.length > 0 && messagesPage === 1) {
      scrollToBottom();
    }
  }, [groupedMessages]);

  return (
    <div className={classes.container}>
      <div className={classes.userInfoContainer}>
        <ResponseTime username="john doe" />
      </div>

      <div className={classes.messagesContainer} ref={scrollViewRef}>
        {
          Boolean(rawMessages.length) && (
            <div className={classes.loadMoreContainer}>
              {
                fetchingMessages ? (
                  <Loader color="#0071A4" />
                ) : (
                  <button
                    className={classes.loadMoreBtn}
                    type="button"
                    onClick={loadMore}
                  >
                    Cargar Más
                  </button>
                )
              }
            </div>
          )
        }

        {
          groupedMessages.map((group) => (
            <React.Fragment key={group.name}>
              <DateSeparator timestamp={group.name} />

              {
                group.messages.map((message) => (
                  <Message
                    key={message._id}
                    name={message.name}
                    text={message.text}
                    avatarUrl="https://cdn.pixabay.com/photo/2016/12/13/05/15/cat-1903313_960_720.jpg"
                    createdBy={message.createdBy}
                    id={message._id}
                    align={message.createdBy === customerId ? 'left' : 'right'}
                  />
                ))
              }
            </React.Fragment>
          ))
        }
      </div>

      <div className={classes.textBoxContainer}>
        <TextBox
          disabled={fetchingMessages}
          loading={creatingMessage}
          value={draftMessage}
          onChange={setDraftMessage}
          onSubmit={submitMessage}
        />
      </div>

    </div>
  );
}

Chat.propTypes = {
  customerId: PropTypes.string.isRequired,
  chatId: PropTypes.string.isRequired,
};

export default Chat;
