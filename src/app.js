"use strict";

/**
 * import = gets hoisted, runs at beginning of bundle (cite:[1])
 */
 import actions from './js/doSomething';
 import { someClass } from './js/class';
 import './main.scss';

require('./js/plugins/plugin1.js')(actions.$)

/**
 * require = no hoisting, runs when encountered in bundle (cite:[1])
 */
// const moment = require('moment');

new someClass();

actions.$('body').append(actions.doSomething());
console.log(actions.$.Hello('Jeff'));

/**
 *  Citations:
 *  [1] = https://github.com/webpack/webpack/issues/1973
 */
