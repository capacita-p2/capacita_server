'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Tipo_deficiencias', [
      {
        nome: 'Auditivo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Física',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Intelectual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Mudez',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Visual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tipo_deficiencias', null, {}); 
  }
};
