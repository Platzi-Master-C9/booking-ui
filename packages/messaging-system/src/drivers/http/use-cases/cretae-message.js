// Internal dependencies
const { axios, getMessagesEndpoint } = require('../utils');
const createMessage = async (chatId, data) => {
  const endpoint = getMessagesEndpoint(chatId);

  return  axios.post(endpoint, data);
};

module.exports = createMessage;
