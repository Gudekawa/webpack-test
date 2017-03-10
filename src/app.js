"use strict";

/**
 * import = gets hoisted, runs at beginning of bundle (cite:[1])
 */
 import actions from './js/doSomething';
 import { someClass } from './js/class';
 import './main.scss';

/**
 * require = no hoisting, runs when encountered in bundle (cite:[1])
 */
// const moment = require('moment');

new someClass();

document.body.appendChild(actions.doSomething());

/**
 *  Citations:
 *  [1] = https://github.com/webpack/webpack/issues/1973
 */
