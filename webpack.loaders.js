"use strict";

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: [/node_modules/],
    use: 'babel-loader'
  },
  {
    test: /\.css$/,
    loaders: [
      'style-loader',
      'css-loader',
      'resolve-url-loader',
    ]
  },
  {
    test: /\.(sass|scss)$/,
    use: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader!sass-loader',
    }),
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    use: 'file?name=public/fonts/[name].[ext]'
  },
];
