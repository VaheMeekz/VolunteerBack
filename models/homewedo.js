'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeWeDo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeWeDo.init({
    titleHy: DataTypes.STRING,
    titleRu: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    textHy: DataTypes.STRING,
    textRu: DataTypes.STRING,
    textEn: DataTypes.STRING,
    image: DataTypes.STRING,
    titleOne: DataTypes.STRING,
    descriptionOne: DataTypes.STRING,
    titleTwo: DataTypes.STRING,
    descriptionTwo: DataTypes.STRING,
    titleThree: DataTypes.STRING,
    descriptionThree: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomeWeDo',
  });
  return HomeWeDo;
};