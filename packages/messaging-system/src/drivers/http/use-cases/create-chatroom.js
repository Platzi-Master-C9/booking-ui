// Internal dependencies
const { axios, endpoints } = require('../utils');

const createChatroom = async (data) => {
  try {
    const newChat = await axios.post(endpoints.CHATROOMS, data)
    console.log('Chatroom created successfully ');
    return newChat;
  } catch (error) {
    console.error(`[createChatrooms] something went wrong creating chatroom ${error}`);
  }
}

module.exports = createChatroom;
