'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Denuncia_curso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Denuncia_curso.init({
    id_denuncia: { primaryKey: true, type: DataTypes.INTEGER },
    id_curso: { primaryKey: true, type: DataTypes.INTEGER }
  }, {
    sequelize,
    modelName: 'Denuncia_curso',
  });
  return Denuncia_curso;
};