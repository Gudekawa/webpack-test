"use strict";

var HelloPlugin = function($) {
  $.Hello = function(name) {
    return 'Hello ' + name;
  }
};

module.exports = HelloPlugin;
