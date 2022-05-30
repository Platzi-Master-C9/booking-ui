// Internal dependencies
const { axios, endpoints } = require('../utils/constants');

const getChatrooms = () => {
  return axios.get(endpoints.CHATROOMS).then(response => response.data);
};

module.exports = getChatrooms;
