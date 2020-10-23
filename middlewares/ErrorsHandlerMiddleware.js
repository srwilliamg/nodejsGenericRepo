'use strict';

module.exports = (error, req, res, next) => {
  console.log(error);
  const { status = 500, message = 'Error', code = 500 } = error;

  return res.status(status).send({ error: { message, code } });
};
