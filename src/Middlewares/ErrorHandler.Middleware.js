const errorHandlerMiddleware = (error, req, res, next) => {
  const default_http_error_message = "something went wrong";
  const errors = error?.errors ?? [default_http_error_message];
  res.status(error?.http_code).json({
    success: false,
    message: error.message ?? default_http_error_message,
    code: error?.code,
    type: error.constructor.name,
    errors,
  });
};
module.exports = { errorHandlerMiddleware };
