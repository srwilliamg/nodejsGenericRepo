'use strict';

const Ajv = require('ajv');

const { FormattedError } = require('./ErrorUtils');

const SchemaUtils = module.exports;

SchemaUtils.validateSchema = (schema, data, options = {}) => {
  const { logger = console } = options;
  const section = 'SchemaUtils.validateSchema';
  const ajv = new Ajv();
  const compiler = ajv.compile(schema);

  const isValid = compiler(data);

  if (!isValid) {
    const validationError = compiler.errors[0];
    const { message, dataPath = '' } = validationError;
    const errorMessage = `${dataPath.replace('.', '')} ${message.replace('.', '')}`;
    logger.error(section, errorMessage);

    throw new FormattedError(errorMessage, 400, 400);
  }

  return isValid;
};
