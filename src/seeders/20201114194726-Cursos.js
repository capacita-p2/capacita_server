'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Cursos', [{
      id_instituicao: 1,
      nome_curso: 'Braile',
      id_deficiencia: '5',
      duracao: '1 Mês',
      carga_horaria: '20 h',
      horario: '9h às 10h',
      valor: 'R$ 0,00',
      ativo: true,
      resumo: 'Curso de Braile com foco de aprendizagem contínua.',
      descricao: '',
      url_img: 'curso_2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Administração',
      id_deficiencia: '1',
      duracao: '1 ano',
      carga_horaria: '300 h',
      horario: '9h às 12h',
      valor: 'R$ 300,00/Mês',
      ativo: true,
      resumo: 'Curso de Administração voltado para área empreserial com diploma reconhecido pelo mec',
      descricao: '',
      url_img: 'curso_3.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Informática',
      id_deficiencia: '2',
      duracao: '3 meses',
      carga_horaria: '40 h',
      horario: '13h30 às 17h',
      valor: 'R$ 0,00',
      ativo: true,
      resumo: 'Curso de informática básica com módulos office word, excel, access e internet.',
      descricao: '',
      url_img: 'curso_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Braile',
      id_deficiencia: '5',
      duracao: '1 Mês',
      carga_horaria: '20 h',
      horario: '9h às 10h',
      valor: 'R$ 0,00',
      ativo: true,
      resumo: 'Curso de Braile com foco de aprendizagem contínua.',
      descricao: '',
      url_img: 'curso_2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Administração',
      id_deficiencia: '1',
      duracao: '1 ano',
      carga_horaria: '300 h',
      horario: '9h às 12h',
      valor: 'R$ 300,00/Mês',
      ativo: true,
      resumo: 'Curso de Administração voltado para área empreserial com diploma reconhecido pelo mec',
      descricao: '',
      url_img: 'curso_3.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id_instituicao: 1,
      nome_curso: 'Informática',
      id_deficiencia: '2',
      duracao: '3 meses',
      carga_horaria: '40 h',
      horario: '13h30 às 17h',
      valor: 'R$ 0,00',
      ativo: true,
      resumo: 'Curso de informática básica com módulos office word, excel, access e internet.',
      descricao: '',
      url_img: 'curso_1.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cursos', null, {});
  }
};
