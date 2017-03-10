"use strict";

var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PurifyCSSPlugin = require('purifycss-webpack');
var rules = require('./webpack.rules');
var inProduction = (process.env.NODE_ENV === 'production');

var bundleFiles = {
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

var config = {
  entry: {
    app: [
      './src/app.js',
      './src/main.scss'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {rules},
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new PurifyCSSPlugin({
      paths: glob.sync(path.join(__dirname, './index.html')),
      minimize: inProduction
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: inProduction
    })
  ]
}

if (inProduction) {
  simpleConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

/**
 *  Shows the error caused from depreciated parseQuery() method. Should be
 *  replaced with getOptions() on next release of loader-utils
 */
process.traceDeprecation = true;

module.exports = config;
