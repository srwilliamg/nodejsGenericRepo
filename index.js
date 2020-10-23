'use strict';

require('dotenv').config();

const express = require('express');
const log4js = require('log4js');

const LoggerMiddleware = require('./middlewares/LoggerMiddleware');
const ErrorsHandlerMiddleware = require('./middlewares/ErrorsHandlerMiddleware');
const { logger, initLogger } = require('./utils/Logger');
const { healthCheck } = require('./entities/healthCheck/controllers/HealthCheckControllers');

const app = express();
const routes = require('./routes');

const { HTTP_PORT, APP_NAME } = process.env;

initLogger();

app.use(log4js.connectLogger(logger));
app.use(express.json());
app.use(LoggerMiddleware);

app.use(`/${APP_NAME}/health-check`, healthCheck);
app.use(`/${APP_NAME}`, routes);
app.use(ErrorsHandlerMiddleware);

const server = app.listen(HTTP_PORT, () => {
  const initMessage = `${APP_NAME} listening on ${HTTP_PORT}`;
  logger.info(initMessage);
  console.log(initMessage);
});

module.exports = server;
