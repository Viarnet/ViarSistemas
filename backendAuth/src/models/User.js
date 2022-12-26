import { sequelize } from "../utils/sequelize.js";

import { DataTypes } from 'sequelize';


export const User = sequelize.define('User',{

    name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  id_colaborador: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  // Other model options go here
});