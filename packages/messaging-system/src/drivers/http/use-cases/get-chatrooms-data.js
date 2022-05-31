// Internal dependencies
const { axios, endpoints } = require('../utils');

const getChatrooms = () => {
  return axios.get(endpoints.CHATROOMS).then(response => response.data)
    .then(console.log('[messaging-getChatrooms] we get chatrooms data successfully'))
    .catch(error => console.error(`[messaging-getChatrooms] something went wrong retrieving chatrooms data ${error}`));
};

module.exports = getChatrooms;
