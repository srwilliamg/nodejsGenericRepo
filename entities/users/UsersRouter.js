'use strict';

const express = require('express');

const BaseRequestHandler = require('../../utils/BaseRequestHandler');
const UserControllers = require('./controllers/UserControllers');

const TendersRouter = express.Router();

TendersRouter.get('/', BaseRequestHandler(UserControllers.getUser));

module.exports = TendersRouter;
