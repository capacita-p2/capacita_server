'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_deficiencia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tipo_deficiencia.belongsToMany(models.Usuario_pcds, { through: models.Usuario_tipo_deficiencia })
      Tipo_deficiencia.belongsToMany(models.Curso, { through: models.Curso_tipo_deficiencia })
    }
  };
  Tipo_deficiencia.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tipo_deficiencia',
  });
  return Tipo_deficiencia;
};