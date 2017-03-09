"use strict";

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: [/node_modules/],
    loader: 'babel-loader'
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
    loaders: [
      'style-loader',
      'css-loader',
      'resolve-url-loader',
      'sass-loader?sourceMap'
    ]
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file?name=public/fonts/[name].[ext]'
  },
];
