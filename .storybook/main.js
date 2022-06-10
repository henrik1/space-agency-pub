module.exports = {
  staticDirs: ['../public'],
  "stories": [
    "../_components/**/*.stories.mdx",
    "../_components/**/*.stories.@(js|jsx|ts|tsx)",
    "../_parts/**/*.stories.mdx",
    "../_parts/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
