const Joi = require('joi');

class UserValidationSchema {
  static createUserValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    first_name_sl: Joi.string().required(),
    last_name_sl: Joi.string().required(),
    phone_no: Joi.string().required(),
    language_preference: Joi.string().valid('en', 'ar').required(),
    profile_picture: Joi.string().allow(null),
    date_of_birth: Joi.date().required(),
    sex: Joi.string().valid('M', 'F', 'O').required(),
    time_zone: Joi.string().required(),
  });
}

module.exports = {
  UserValidationSchema,
};
