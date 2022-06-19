'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Static extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Static.init({
    fileName: DataTypes.STRING,
    nameHy: DataTypes.STRING,
    nameEn: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Static',
  });
  return Static;
};