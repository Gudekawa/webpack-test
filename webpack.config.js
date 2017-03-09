'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const bundleFiles = {
  js: [
    './node_modules/jquery/src/jquery.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/moment/moment.js',
    './node_modules/moment/min/locales.js',
    './node_modules/braintree/lib/braintree.js',
    './src/js/app.js'
  ],
  css: [
    './node_modules/bootstrap/dist/css/bootstrap-theme.css',
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/animate.css/animate.css'
  ]
};

const loaders = [
  {
    test: /\.js?$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }
];

const config = {
  entry: bundleFiles.js,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      _: "lodash/"
    }
  },
  module: {loaders},
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash",
      jQuery: "jquery",
    }),
    new webpack.optimize.OccurrenceOrderPlugin
  ],
  devServer: {
    contentBase: [
      "./",
      "dist"
    ]
  }
}

module.exports = config;
