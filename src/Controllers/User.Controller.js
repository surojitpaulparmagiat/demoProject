const { SuccessErrorWrapper } = require("../Helpers/SuccessErrorWrapper");
const { UserService } = require("../Services");

class UserController {
  // controller functions are private and static

  /**
   * Create a new user
   * @path {POST} /users
   */
  static async #createUser(req) {
    const payload = req.body;
    return await UserService.createNewUser({
      user_payload: payload,
    });
  }

  /**
   * Get user by id
   * @path {GET} /users/:user_id
   */
  static async #getUser(req) {
    const { user_id } = req.params;
    return await UserService.getUserById({ user_id });
  }

  static createUserController = SuccessErrorWrapper(
    this.#createUser,
    "User created successfully",
    201,
  );

  static getUserController = SuccessErrorWrapper(
    this.#getUser,
    "User fetched successfully",
    200,
  );
}

module.exports = { UserController };
