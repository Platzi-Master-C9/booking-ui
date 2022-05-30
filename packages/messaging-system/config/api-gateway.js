// External dependencies
const dotenv = require('dotenv');

// Internal dependencies
const path = require('./environment');

dotenv.config({ path });

module.exports = {
  domain: process.env.DOMAIN_API_GATEWAY,
};
