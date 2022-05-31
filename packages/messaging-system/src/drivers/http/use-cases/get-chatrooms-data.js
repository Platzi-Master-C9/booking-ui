// Internal dependencies
const { axios, endpoints } = require('../utils');

const getChatrooms = () => {
  return axios.get(endpoints.CHATROOMS)
};

module.exports = getChatrooms;
