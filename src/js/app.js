'use strict';

import _ from 'lodash';

function doSomething() {
  var div = document.createElement('div');
  div.innerHTML = _.join(['Did', 'something', 'cool!'], ' ');
  return div;
}

document.body.appendChild(doSomething());
