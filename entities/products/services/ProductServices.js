'use strict';

const ProductServices = module.exports;

const SERVICE = 'ProductServices';
const createProduct = 'createProduct';

ProductServices.createProduct = async (fields, options) => {
  const layer = `${SERVICE} - ${createProduct}`;
  const { logger = console } = options;
  logger.info(layer, 'start');

  logger.info(layer, 'end');
  return 'ok';
};
