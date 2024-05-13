// todo: need a function that take a schema object, an error code.
// then it return an express middleware that validate the request body against the schema
// somehow we need to handle multiple errors that could be returned from the schema validation
// we need to concat them into one error message by joining with a new line "\n"

class ValidationError extends Error {
  constructor(message, http_error_code, errors) {
    super(message);
    this.http_error_code = http_error_code;
    this.errors = errors;
  }
}

const JoiValidationRequestWrapper = ({ schema, http_error_code }) => {
  return (req, res, next) => {
    const body = req.body;
    const { error } = schema.validate(body, {
      abortEarly: false,
      errors: {
        escapeHtml: false,
        wrap: {
          label: "",
        },
      },
    });
    if (error) {
      const error_message = error.details
        .map((detail) => detail.message)
        .join("\n");

      const error_messages = error.details.map((detail) => detail.message);
      return next(
        new ValidationError(error_message, http_error_code, error_messages),
      );
    } else {
      return next();
    }
  };
};

module.exports = { JoiValidationRequestWrapper };
