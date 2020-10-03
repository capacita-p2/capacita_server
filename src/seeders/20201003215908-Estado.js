'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Estados', [
       {
        estado: 'AC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'AL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'AP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'AM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'BA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'CE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'DF',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'ES',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'GO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'MA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'MT',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'MS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'MG',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'PA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'PB',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'PR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'PE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'PI',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'RJ',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'RN',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'RS',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'RO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'RR',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'SC',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'SP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'SE',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        estado: 'TO',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Estados', null, {});
     
  }
};
