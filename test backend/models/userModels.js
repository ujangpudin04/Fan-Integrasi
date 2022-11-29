import { Sequelize } from "sequelize";

import db from "../config/database.js";

const { DataTypes } = Sequelize;
const Users = db.define(
  "users",
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
    npp: {
      type: DataTypes.STRING,
    },
    npp_supervisor: {
      type: DataTypes.STRING,
      defaultValue: 1111,
    },
    refresh_token: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

export default Users;
