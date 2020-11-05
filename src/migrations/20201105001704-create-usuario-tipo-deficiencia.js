'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuario_tipo_deficiencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario_pcd: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario_pcds',
          key: 'id'
        }
      },
      id_tipo_deficiencia: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tipo_deficiencias',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuario_tipo_deficiencia');
  }
};