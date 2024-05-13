const { SuccessErrorWrapper } = require("../Helpers/SuccessErrorWrapper");
const { UserService } = require("../Services");

class UserController {
  // controller functions are private and static
  static async #createUser(req) {
    const payload = req.body;
    return await UserService.createNewUser({
      user_payload: payload,
    });
  }

  static createUserController = SuccessErrorWrapper(
    this.#createUser,
    "User created successfully",
    201,
  );
}

module.exports = { UserController };
