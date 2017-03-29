"use strict";

var path = require('path');
var glob = require('glob');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var PurifyCSSPlugin = require('purifycss-webpack');
var HtmlPlugin = require('html-webpack-plugin');
var rules = require('./webpack.rules');
var inProduction = (process.env.NODE_ENV === 'production');

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
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
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
    }),
    new HtmlPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}

if (inProduction) {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

/**
 *  Shows the error caused from depreciated parseQuery() method. Should be
 *  replaced with getOptions() on next release of loader-utils
 */
process.traceDeprecation = true;

module.exports = config;
