// External dependencies
const axios = require('axios');

// Internal dependencies
const { domain, port } = require('../../../../config/api-gateway');

const instance = axios.create({
  baseURL: domain,
  proxy: {
    port: port,
  },
});
module.exports = instance;
