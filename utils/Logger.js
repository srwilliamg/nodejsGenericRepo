'use strict';

const Logger = module.exports;

const log4js = require('log4js');

const { LOG_LEVEL } = process.env;

Logger.initLogger = () => {
  log4js.configure({
    appenders: {
      server:
      {
        type: 'file',
        filename:
        'server.log'
      }
    },
    categories: {
      default: { appenders: ['server'], level: LOG_LEVEL }
    }
  });
};

Logger.logger = log4js.getLogger('server');
