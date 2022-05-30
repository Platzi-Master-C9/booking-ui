// Internal dependencies
const { axios, endpoints } = require('../utils/constants');

const createChatrooms = (data) => {
  axios.post(endpoints.CHATROOMS, data)
  .then(console.log('Chatroom created successfully '))
  .catch( (error) => console.error(`[createChatrooms] something went wrong creatin chat room ${error}`));
}

module.exports = createChatrooms;