const path = require('path')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports =  {
  mode: 'production',

  entry: './index.js',
  
  output: {
    filename: 'easy-image-previewer.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'imagePreview',
    libraryTarget: 'umd'
  },

  module: {
    rules: [
      { 
        test: /\.js$/ ,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        cache: true,
        terserOptions: {
          ie8: false,
          keep_fnames: false,
          output: {
            beautify: false,
            comments: false
          }
        }
      }),

      new OptimizeCSSAssetsPlugin()
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'easy-image-previewer.min.css'
    })
  ]
}
