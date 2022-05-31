// External dependencies
const axios = require('axios');

// Internal dependencies
const { domain } = require('../../../../config/api-gateway');

const instance = axios.create({
  baseURL: domain,
});
module.exports = instance;
