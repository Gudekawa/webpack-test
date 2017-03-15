"use strict";

const liveServer = require('live-server');

const config = {
  port: 9000,
  root: 'dist',
  open: true
};

liveServer.start(config);
