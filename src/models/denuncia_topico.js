'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Denuncia_topico extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Denuncia_topico.init({
    id_denuncia: DataTypes.INTEGER,
    id_topico: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Denuncia_topico',
  });
  return Denuncia_topico;
};