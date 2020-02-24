const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'index.js'),

  devtool: 'inline-source-map',

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

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Previewer Mock',
      meta: {
        'viewport': 'width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0,user-scalable=0'
      }
    })
  ]
}