module.exports = class CustomError extends Error {
  constructor (message, status, code) {
    super(message);

    Error.captureStackTrace(this, this.constructor);

    this.status = status;
    this.code = code;
  }

  getErrorLog ({ message, code }) {
    return `${message} :: code ${code}`;
  }
};
