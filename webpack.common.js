const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const Stylish = require('webpack-stylish')
const CopyPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
      {
        test: /\.svg$/,
        use: ['svg-inline-loader'],
        // use: ['file-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
      {
        test: /\.txt$/i,
        use: 'raw-loader',
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      recoil: path.resolve(__dirname, 'node_modules/recoil'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      immer: path.resolve(__dirname, 'node_modules/immer'),
      immerx: path.resolve(__dirname, 'node_modules/immerx'),
      'immerx-react': path.resolve(__dirname, 'node_modules/immerx-react'),
      'immerx-middleware': path.resolve(
        __dirname,
        'node_modules/immerx-middleware',
      ),
      'immerx-devtools': path.resolve(
        __dirname,
        'node_modules/immerx-devtools',
      ),
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: './public/**/*',
          globOptions: {
            ignore: ['**/index.html'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== 'production',
      pngquant: {
        quality: '95-100',
      },
    }),
    new Stylish(),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),
  },
}
