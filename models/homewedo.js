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
    titleEn: DataTypes.STRING,
    textHy: DataTypes.STRING(1234),
    textEn: DataTypes.STRING(1234),
    image: DataTypes.STRING,
    titleOneHy: DataTypes.STRING,
    titleOneEn: DataTypes.STRING,
    descriptionOneHy: DataTypes.STRING(1234),
    descriptionOneEn: DataTypes.STRING(1234),
    titleTwoHy: DataTypes.STRING,
    titleTwoEn: DataTypes.STRING,
    descriptionTwoHy: DataTypes.STRING(1234),
    descriptionTwoEn: DataTypes.STRING(1234),
    titleThreeHy: DataTypes.STRING,
    titleThreeEn: DataTypes.STRING,
    descriptionThreeHy: DataTypes.STRING(1234),
    descriptionThreeEn: DataTypes.STRING(1234)
  }, {
    sequelize,
    modelName: 'HomeWeDo',
  });
  return HomeWeDo;
};