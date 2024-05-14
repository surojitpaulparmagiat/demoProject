const { UserController } = require('../Controllers');
const { JoiValidationRequestWrapper } = require('../Validations/ValidationHelper');
const { UserValidationSchema } = require('../Validations');
const user_router = require('express').Router();

user_router.post(
  '/',
  // joi validation middleware
  JoiValidationRequestWrapper({
    schema: UserValidationSchema.createUserValidation,
    http_error_code: 400,
  }),
  UserController.createUserController
);

user_router.get('/:user_id', UserController.getUserController);

module.exports = {
  user_router,
};
