"use strict";

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var rules = [
  {
    test: /\.s[ac]ss$/,
    use: ExtractTextPlugin.extract({ // code-splitting
      use: ['css-loader', 'sass-loader'],
      fallback: 'style-loader'
    })
  },
  {
    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
    loader: 'file-loader',
    options: {
      name: 'images/[name][hash].[ext]',
      limit: 10000
    }
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader'] //runs right->left
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: "babel-loader",
  },
];

module.exports = rules;
