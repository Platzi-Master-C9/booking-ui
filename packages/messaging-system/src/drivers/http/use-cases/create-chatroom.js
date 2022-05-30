// Internal dependencies
const { axios, endpoints } = require('../utils/constants');

const createChatroom = (data) => {
  axios.post(endpoints.CHATROOMS, data)
  .then(console.log('Chatroom created successfully '))
  .catch( (error) => console.error(`[createChatrooms] something went wrong creating chatroom ${error}`));
}

module.exports = createChatroom;
