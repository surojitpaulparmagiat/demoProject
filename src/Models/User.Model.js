const { Model, DataTypes } = require("sequelize");
const sequelize = require("../Configs/Db.Config");

class UserModel extends Model {}
UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING(55),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    first_name: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },

    first_name_sl: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
    last_name_sl: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },

    phone_no: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },

    language_preference: {
      type: DataTypes.ENUM("en", "ar"),
      defaultValue: "ar",
      allowNull: false,
    },
    profile_picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM("M", "F", "O"),
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("active", "deleted", "suspended"),
      defaultValue: "active",
      index: true,
    },
    verified_email: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    verified_phone: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    time_zone: {
      type: DataTypes.STRING(55),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
      tableName:"users"
  },
);
module.exports = {
  UserModel,
};
