import { Sequelize } from "sequelize";

import db from "../config/database.js";
import Users from "./userModels.js";

const { DataTypes } = Sequelize;
const Epresence = db.define(
  "epresences",
  {
    id_user: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    is_approve: {
      type: DataTypes.BOOLEAN,
    },
    waktu: {
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
  }
);

Epresence.hasOne(Users, { foreignKey: "id" });
Epresence.belongsTo(Users, { foreignKey: "id" });

export default Epresence;
