'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Curso_tipo_deficiencia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_curso: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cursos',
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
    await queryInterface.dropTable('Curso_tipo_deficiencia');
  }
};