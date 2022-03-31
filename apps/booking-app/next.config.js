const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@booking-ui/shared',
  '@booking-ui/places',
  '@booking-ui/search-engine',
  '@booking-ui/messaging-system',
  '@booking-ui/geolocation',
  '@booking-ui/admin-panel',
  '@booking-ui/notification-system',
  '@booking-ui/authentication',

]);
module.exports = withPlugins([withTM()], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  images: {},
});
