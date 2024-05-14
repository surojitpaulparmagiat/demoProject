const { UserModel } = require('./User.Model');

syncModels = async () => {
  UserModel.sync({ alter: true }).catch();
};
// syncModels();

module.exports = {
  UserModel,
};
