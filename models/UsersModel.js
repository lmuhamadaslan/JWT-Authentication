import { Sequelize } from 'sequelize';
import sequelize from "../config/Database.js"

const { DataTypes } = Sequelize;

const UserModel = sequelize.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
)

sequelize.sync()

export default UserModel;
