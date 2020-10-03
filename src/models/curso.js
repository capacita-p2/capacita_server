'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Curso.init({
    id_instituicao: DataTypes.INTEGER,
    nome_curso: DataTypes.STRING,
    id_deficiencia: DataTypes.INTEGER,
    duracao: DataTypes.STRING,
    carga_horaria: DataTypes.STRING,
    horario: DataTypes.STRING,
    valor: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Curso',
  });
  return Curso;
};