'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instituicao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Instituicao.hasOne(models.Usuario)
      // Instituicao.hasMany(models.Noticia)
      // Instituicao.belongsTo(models.Estado)
      Instituicao.hasMany(models.Curso, {
        foreignKey: 'id_instituicao'
      })
    }
  };
  Instituicao.init({
    id_usuario: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    endereco: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    id_estado: DataTypes.INTEGER,
    cep: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Instituicao',
  });
  return Instituicao;
};