import { sequelize } from "../utils/sequelize.js";

import { DataTypes } from 'sequelize';


export const Atendimento = sequelize.define('Atendimento',{

  id_usuario: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    unique: true
  },
  id_colaborador:{
    type: DataTypes.INTEGER,
    foreignKey: true,
  },
  alteracaodetitularidade: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  atribuiripfixo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bellunoresolvido: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  gerouvisita: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  huggy: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  laudotecnico: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  outrossetores: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  posbelluno: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  posos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  posicaodeos: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  presencial: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefonicossac: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  visitatecnica: {
    type: DataTypes.STRING,
    allowNull: true,
  }
}, {
  // Other model options go here
});

Atendimento.associate = (models) => {
  Atendimento.belongsTo(models.User,
    { foreignKey: 'id_colaborador', as: 'users' });
};