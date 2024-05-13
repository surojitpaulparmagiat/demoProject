const errorHandlerMiddleware = (error, req, res,next) => {
  let httpErrorCode = 404;
  let httpErrorMessage = "something went wrong";
  const errors = error?.errors ?? [];
  res.status(httpErrorCode).json({
    success: false,
    message: error.message ?? httpErrorMessage,
    code: error?.code,
    type: error.constructor.name,
    errors,
  });
};
module.exports = { errorHandlerMiddleware };
