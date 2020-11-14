'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Instituicaos', [{
     id_usuario: 5,
     nome: 'Ultra Cursos',
     telefone: '(81) 98888-8888',
     endereco: 'Rua dos Cursos',
     numero: 1,
     bairro: 'Santo Antônio',
     cidade: 'Recife',
     id_estado: 17,
     cep: '54.000-000',
     cnpj: '00.000.000/0001-01',
     ativo: 'true',
     createdAt: new Date(),
     updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    Example:
    await queryInterface.bulkDelete('Instituicaos', null, {});
  }
};
