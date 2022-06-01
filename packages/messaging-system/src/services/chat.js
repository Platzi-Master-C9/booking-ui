/* eslint-disable no-console */
// Internal dependencies
import http from './http';

const openChatRoom = async (customerId, hostId, placeId) => {
  try {
    const response = await http.post('/chats/', {
      customerId,
      hostId,
      placeId,
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

const getChatRooms = async (userId, page) => {
  try {
    const response = await http.get('/chats/', {
      params: {
        page,
        userId,
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

export {
  openChatRoom,
  getChatRooms,
};
