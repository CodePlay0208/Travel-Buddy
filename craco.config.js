module.exports = {
  babel: {
    plugins: [
      ["babel-plugin-styled-components", {
        displayName: true,
        fileName: true
      }]
    ]
  },
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.devtool = 'cheap-module-source-map';
      return webpackConfig;
    }
  }
};
