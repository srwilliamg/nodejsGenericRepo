'use strict';

const requestHandler = 'RequestHandler';

module.exports = (handler) => async (req, res, next) => {
  const { logger = console } = req;

  const requestContent = `
  params: ${JSON.stringify(req.params)}
  query data: ${JSON.stringify(req.query)}
  body data: ${JSON.stringify(req.body)}
  `;

  logger.trace(requestHandler, `${req.uuid} Request:${requestContent}`);

  try {
    await handler(req, res, next);
  } catch (e) {
    logger.error(requestHandler, `${e.code}: ${e.message}`);
    next(e);
  }
};
