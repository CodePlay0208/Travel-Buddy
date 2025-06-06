const path = require('path')

const isDev = process.env.NODE_ENV==='development';

module.exports = {
  mode: process.env.NODE_ENV || 'production',
  entry: './src/index.js', // Adjust if your entry point is different
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'static/js/[contenthash:8].js',
    chunkFilename: 'static/js/[contenthash:8].chunk.js',
    publicPath: '/',
    clean: true, // Cleans the output directory before emit
  },
  devtool: isDev ? 'cheap-module-source-map' : false, // Enable source maps in development only
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[contenthash:8][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`,
    },
  },
}
