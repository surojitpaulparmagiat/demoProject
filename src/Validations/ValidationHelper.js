// need a function that takes a schema object, an error code.
// then it returns an express middleware that validates the request body against the schema.
// somehow, we need to handle multiple errors that could be returned from the schema validation
// we need to concat them into one error message by joining with a new line "\n"
const { ValidationError } = require('../Errors');
const JoiValidationRequestWrapper = ({ schema, http_error_code }) => {
  return (req, res, next) => {
    const body = req.body;
    const { error } = schema.validate(body, {
      abortEarly: false,
      errors: {
        escapeHtml: false,
        wrap: {
          label: '',
        },
      },
    });
    if (error) {
      const error_messages = error.details.map((detail) => detail.message);
      return next(new ValidationError(error_messages, http_error_code));
    } else {
      return next();
    }
  };
};

module.exports = { JoiValidationRequestWrapper };
