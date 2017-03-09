"use strict";

/**
 * import = gets hoisted, runs at beginning of bundle (cite:[1])
 */
import moment from 'moment';
import '../scss/style.scss';
import '../css/main.css';

/**
 * require = no hoisting, runs when encountered in bundle (cite:[1])
 */
// const moment = require('moment');

function doSomething() {
  var div = document.createElement('div');
  div.innerHTML = _.join(['Timestamp', '=', moment().format('MMMM Do YYYY, h:mm:ss a')], ' ');
  return div;
}

document.body.appendChild(doSomething());

/**
 *  Citations:
 *  [1] = https://github.com/webpack/webpack/issues/1973
 */
