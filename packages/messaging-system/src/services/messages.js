/* eslint-disable no-console */
// Internal dependencies
import http from './http';

const getMessagesFromChatRoom = async (chatId, page) => {
  try {
    const response = await http.get(`/chats/${chatId}/messages`, {
      params: {
        page,
      },
    });

    const { data } = response;

    if (Array.isArray(data?.rows)) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return {
    page,
    pages: 0,
    rows: [],
  };
};

const createMessage = async (chatId, message, userId) => {
  try {
    const response = await http.post(`/chats/${chatId}/messages`, {
      message,
      createdBy: userId,
    });

    const { data } = response;

    if (data) {
      return data;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};

export {
  getMessagesFromChatRoom,
  createMessage,
};
