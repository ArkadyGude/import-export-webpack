const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, './'),
    },
    port: 8080,
    open: true,
    hot: true,
  },
};