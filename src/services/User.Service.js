const { UserModel } = require('../Models');
const { UserIntegrityService } = require('../Integrity');
const { NotFoundError } = require('../Errors');

class UserService {
  constructor({ firm_id, user_id }) {
    this.firm_id = firm_id;
    this.user_id = user_id;
  }

  static async createNewUser({ user_payload }) {
    // todo: integrity checks
    //  required an integrity check to ensure that the user_payload has correct data
    //  such as email, password, first_name, last_name, phone_no, date_of_birth
    //  email does not already exist in the database

    // this check will throw an error if the email already exists
    await UserIntegrityService.createIntegrityCheck({ payload: user_payload });

    const created_user = await UserModel.create(user_payload);

    return await this.getUserById(created_user.id);
  }

  static async getUserById({ user_id }) {
    const user = await UserModel.findOne({
      where: {
        id: user_id,
      },
    });
    if (!user) {
      throw new NotFoundError(UserServiceErrorMessages.NO_USER_FOUND);
    }
    return user;
  }
}

module.exports = {
  UserService,
};

const UserServiceErrorMessages = {
  NO_USER_FOUND: 'No user found',
};
