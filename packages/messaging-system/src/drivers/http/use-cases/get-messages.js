// Internal dependencies
const { axios, getMessagesEndpoint } = require('../utils');

const getMessages = (chatId) => {
  const endpoint = getMessagesEndpoint(chatId);
  
  return  axios.get(endpoint).then(response => response.data);
};

module.exports = getMessages;
