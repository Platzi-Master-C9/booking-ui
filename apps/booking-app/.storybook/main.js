const path = require('path');
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/authentication/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/admin-panel/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/geolocation/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/messaging-system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/places/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/search-engine/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/shared/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../../../'),
    });

    // Return the altered config
    return config;
  },
};
