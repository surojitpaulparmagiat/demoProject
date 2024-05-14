// these 2 are base errors
const { SingleError } = require('./SingleError');
const { MultipleError } = require('./MultipleError');

// basic joi validation will throw this error
const { ValidationError } = require('./ValidationError');

// any kind of integrity check can throw this error,
// e.g., unique constraint, foreign key constraint
const { IntegrityError } = require('./IntegrityError');

// when a record is not found
const { NotFoundError } = require('./NotFoundError');

module.exports = {
  SingleError,
  MultipleError,
  ValidationError,
  IntegrityError,
  NotFoundError,
};
