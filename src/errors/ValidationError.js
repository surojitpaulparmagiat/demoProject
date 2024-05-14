const { MultipleError } = require('./MultipleError');

class ValidationError extends MultipleError {
  constructor(error_messages, http_code = 400) {
    super(error_messages, http_code);
  }
}

module.exports = { ValidationError };
