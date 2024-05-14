const { UserModel } = require('../Models');
const { IntegrityError } = require('../Errors');

class UserIntegrityService {
  constructor({ firm_id }) {
    this.firm_id = firm_id;
  }

  static async createIntegrityCheck({ payload }) {
    const email = payload.email;
    // we must check if the email already exists in the database
    const email_exists = await UserModel.findOne({
      where: {
        email: email,
      },
    });
    if (email_exists) {
      throw new IntegrityError(UserIntegrityServiceErrors.USER_EMAIL_ALREADY_EXISTS);
    }
    return true;
  }
}

module.exports = {
  UserIntegrityService,
};

const UserIntegrityServiceErrors = {
  USER_EMAIL_ALREADY_EXISTS: 'User with this email already exists',
};
