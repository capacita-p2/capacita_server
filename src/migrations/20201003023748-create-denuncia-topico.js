'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Denuncia_topicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_denuncia: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Denuncias',
          key: 'id'
        }
      },
      id_topico: {
        type: Sequelize.INTEGER,
        references: {
          model: 'forum_topicos',
          key: "id"
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
    await queryInterface.dropTable('Denuncia_topicos');
  }
};