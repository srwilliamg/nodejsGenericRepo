const jwt = require('jsonwebtoken');
const serverConfig = require('../config/serverConfig.json');
const CustomError = require('../classes/CustomError');
const User = require('../models/index').user;

const Authentication = async (req, res, next) => {
  const authorizationHeader = req.header('Authorization');

  if (authorizationHeader) {
    const token = authorizationHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, serverConfig.secretKey);

    const user = await User.findOne({ where: { idUser: decoded.idUser, token: token } });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } else {
    next(new CustomError('No authorization', 403, 403));
  }
};

module.exports = Authentication;
