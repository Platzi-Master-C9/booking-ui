// Internal dependencies
const { axios, endpoints } = require('../utils');

const createChatroom =  (data) => {
  return axios.post(endpoints.CHATROOMS, data)
}

module.exports = createChatroom;
