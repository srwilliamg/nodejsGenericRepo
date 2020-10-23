'use strict';

const ProductControllers = module.exports;

const ProductsServices = require('../services/ProductServices');
const CONTROLLER = 'ProductControllers';
const getProduct = 'getProduct';

ProductControllers.getProduct = async (req, res) => {
  const { logger, uuid } = req;
  const controllerService = `${uuid}: ${CONTROLLER}-${getProduct}`;

  logger.trace(controllerService, 'start');

  // Validate fields
  // TODO

  const fields = req.body;

  const product = await ProductsServices.createProduct(fields, logger);

  logger.trace(controllerService, 'end');

  res.send(product);
};
