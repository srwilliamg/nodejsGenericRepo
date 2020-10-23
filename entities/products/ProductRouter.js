'use strict';

const express = require('express');

const BaseRequestHandler = require('../../utils/BaseRequestHandler');
const ProductControllers = require('./controllers/ProductControllers');

const TendersRouter = express.Router();

TendersRouter.get('/', BaseRequestHandler(ProductControllers.getProduct));

module.exports = TendersRouter;
