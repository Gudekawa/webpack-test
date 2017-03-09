"use strict";

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const loaders = require('./webpack.loaders');

const bundleFiles = {
  js: [
    './node_modules/jquery/src/jquery.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './node_modules/moment/moment.js',
    './node_modules/moment/min/locales.js',
    './src/js/app.js',
  ],
  styles: [
    './node_modules/bootstrap/dist/css/bootstrap-theme.css',
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/animate.css/animate.css',
    './src/scss/style.scss',
  ]
};

const config = {
  entry: bundleFiles.js,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // filename: '[chunkhash].js',
    // chunkFilename: '[chunkhash].js',
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery",
      _: "lodash/",
    }
  },
  module: {loaders},
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash",
      jQuery: "jquery",
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true,
    }),
    new webpack.optimize.OccurrenceOrderPlugin,
    new webpack.optimize.UglifyJsPlugin,
  ],
};

/**
 *  Shows the error caused from depreciated parseQuery() method. Should be
 *  replaced with getOptions() on next release of loader-utils
 */
process.traceDeprecation = true;

module.exports = config;
