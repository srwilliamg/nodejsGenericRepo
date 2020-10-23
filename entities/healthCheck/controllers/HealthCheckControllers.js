'use strict';

const HealthCheckControllers = module.exports;

const CONTROLLER = 'HealthCheckControllers';

HealthCheckControllers.healthCheck = (req, res) => {
  const { logger } = req;
  const LOG = `${CONTROLLER}.healthCheck`;

  logger.info(LOG, 'starts');

  res.send({ message: 'ok' });
};
