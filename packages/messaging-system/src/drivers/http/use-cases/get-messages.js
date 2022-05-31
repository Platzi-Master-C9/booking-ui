// Internal dependencies
const { axios, getMessagesEndpoint } = require('../utils');

const getMessages = (chatId) => {
  const endpoint = getMessagesEndpoint(chatId);
  
  return  axios.get(endpoint).then(response => response.data)
    .then(console.log('Messages retrive completed successfully '))
    .catch(error => console.error(`[messaging-getMessages] Something went worng retriving messages data with message ${error}`));
};
const chatId =  '62959fb33334a0dc7d106719';
getMessages( chatId);

module.exports = getMessages;
