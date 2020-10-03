'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Denuncia_noticia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Denuncia_noticia.init({
    id_denuncia: DataTypes.INTEGER,
    id_noticia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Denuncia_noticia',
  });
  return Denuncia_noticia;
};