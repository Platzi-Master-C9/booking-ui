const { endpoints } = require('./constants');

const getMessagesEndpoint = (chatId) => {
    return `${endpoints.CHATROOMS}/${chatId}/messages`;
};

module.exports = getMessagesEndpoint
