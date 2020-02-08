const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'index.js'),

  devServer: {
    contentBase: false,
    hot: true,
    compress: true,

    host: '0.0.0.0',
    port: 9999,

    quiet: true,
    clientLogLevel: 'warning',
    overlay: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Previewer Mock',
      meta: {
        'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0"'
      }
    })
  ]
}