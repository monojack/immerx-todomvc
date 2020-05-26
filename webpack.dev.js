const merge = require('webpack-merge')
const path = require('path')

const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    host: 'localhost',
    historyApiFallback: true,
    port: 3000,
    open: process.argv.slice(2).includes('--open'),
    // clientLogLevel: 'silent',
    noInfo: true,
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        exclude: /\.module\.s?[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.module\.s?[ac]ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
})
