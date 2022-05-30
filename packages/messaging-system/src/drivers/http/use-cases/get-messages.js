// Internal dependencies
const axios = require('../utils/axios');

const getMessages = async (chatId) => {
  const endpoint = `chats/${chatId}/messages`
  const messagesData =  await axios.get(endpoint).then(response => response.data);

  return messagesData
};

module.exports = getMessages;
