"use strict";

import moment from 'moment';
import _ from 'lodash';
import $ from 'jquery';

function doSomething() {
  $('body').prepend(_.join(['Timestamp', '=', moment().format('MMMM Do YYYY, h:mm:ss a')], ' '));
}

export default {
  $: $,
  _: _,
  moment: moment,
  doSomething: doSomething,
};
