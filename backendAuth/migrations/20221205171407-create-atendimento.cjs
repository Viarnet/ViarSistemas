'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atendimento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Atendimentos');
  }
};