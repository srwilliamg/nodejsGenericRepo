'use strict';

const express = require('express');

const Authentication = require('./middlewares/AuthenticationMiddleware');
const UsersRouter = require('./entities/users/UsersRouter');
const ProductsRouter = require('./entities/products/ProductRouter');

const Routes = express.Router();

Routes.use('/users', Authentication, UsersRouter);
Routes.use('/products', Authentication, ProductsRouter);

module.exports = Routes;
