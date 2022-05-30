// Internal dependencies
const axios = require('../utils/axios');

const getChatrooms = async () => {
  const endpoint = `chats/`
  const messagesData =  await axios.get(endpoint).then(response => response.data);

  return messagesData
};

module.exports = getChatrooms;
