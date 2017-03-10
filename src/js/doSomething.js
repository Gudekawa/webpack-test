"use strict";

import moment from 'moment';
import _ from 'lodash';
import $ from 'jquery';

function doSomething() {
  var div = document.createElement('div');
  div.innerHTML = _.join(['Timestamp', '=', moment().format('MMMM Do YYYY, h:mm:ss a')], ' ');
  return div;
}

function logSomething(message) {
  console.info(message);
}

export default {
  doSomething: doSomething,
  logSomething: logSomething
};
