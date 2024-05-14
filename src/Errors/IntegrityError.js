const { SingleError } = require('./SingleError');

class IntegrityError extends SingleError {
  constructor(message) {
    super(message, 400);
  }
}

module.exports = {
  IntegrityError,
};
