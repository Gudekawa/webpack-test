"use strict";

/**
 * import = gets hoisted, runs at beginning of bundle (cite:[1])
 */
import Vue from 'vue'
import actions from './js/doSomething'
import { someClass } from './js/class'
import './main.scss'

/**
 * require = no hoisting, runs when encountered in bundle (cite:[1])
 */
// const moment = require('moment');

new someClass()

document.body.appendChild(actions.doSomething())

Vue.component('test-component', {
  template: '<h1>Test Vue</h1>'
})

new Vue({
  el: '#test1'
})
/**
 *  Citations:
 *  [1] = https://github.com/webpack/webpack/issues/1973
 */
