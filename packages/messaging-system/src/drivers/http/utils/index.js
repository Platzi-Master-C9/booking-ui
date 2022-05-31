// Internal dependencies
const  axios = require('./axios');
const { endpoints } = require('./constants');
const getMessagesEndpoint = require('./get-messages-endpoint');

module.exports = {
  axios,
  endpoints,
  getMessagesEndpoint,
};
