'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const devFiles = {
  js: './src/js/app.js'
};

const simpleConfig = {
  entry: devFiles.js,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

const testConfig = {
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader'
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
  ]
};

module.exports = simpleConfig;
