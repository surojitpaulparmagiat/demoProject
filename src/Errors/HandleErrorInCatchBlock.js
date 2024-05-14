const { SingleError, MultipleError } = require('./index');

/**
 * Handle catch block error
 * @param {Error} error
 */
const propagateCatchBlockError = (error) => {
  // decide which type of error we are handling
  // we can handle various types of errors here
  if (error instanceof SingleError) {
    throw error;
  }
  if (error instanceof MultipleError) {
    throw error;
  }
  throw new SingleError({
    error_message: error.message,
    http_code: 400,
  });
};
module.exports = {
  propagateCatchBlockError,
};
