module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    '../../../packages/authentication/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/admin-panel/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/geolocation/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/messaging-system/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/places/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/search-engine/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/shared/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
