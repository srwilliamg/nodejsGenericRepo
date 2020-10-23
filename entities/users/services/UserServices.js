'use strict';

const UserServices = module.exports;

const SERVICE = 'UserServices';
const createProduct = 'getUser';

UserServices.getUser = async (fields, options) => {
  const layer = `${SERVICE} - ${createProduct}`;
  const { logger = console } = options;

  logger.info(layer, 'start');

  logger.info(layer, 'end');

  return 'ok';
};
