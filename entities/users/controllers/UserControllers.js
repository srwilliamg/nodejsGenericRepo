'use strict';

const UserControllers = module.exports;
const UserServices = require('../services/UserServices');

const CONTROLLER = 'UsersControllers';
const getUser = 'getUser';

UserControllers.getUser = async (req, res) => {
  const { logger, uuid } = req;
  const controllerService = `${uuid}: ${CONTROLLER}-${getUser}`;

  logger.trace(controllerService, 'start');

  const user = await UserServices.getUser(req.query, logger);

  logger.trace(controllerService, 'end');

  res.send(user);
};
