"use strict";

var ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = [
//   {
//     test: /\.(js|jsx)$/,
//     exclude: [/node_modules/],
//     use: 'babel-loader'
//   },
//   {
//     test: /\.css$/,
//     loaders: [
//       'style-loader',
//       'css-loader',
//       'resolve-url-loader',
//     ]
//   },
//   {
//     test: /\.(sass|scss)$/,
//     use: ExtractTextPlugin.extract({
//       fallback: 'style-loader',
//       use: 'css-loader!sass-loader',
//     }),
//   },
//   {
//     test: /\.(eot|svg|ttf|woff|woff2)$/,
//     use: 'file?name=public/fonts/[name].[ext]'
//   },
// ];

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
