'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init({
    image: DataTypes.STRING,
    titleHy: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    descriptionHy: DataTypes.STRING(1234),
    descriptionEn: DataTypes.STRING(1234),
    subtitleHy: DataTypes.STRING,
    subtitleEn: DataTypes.STRING,
    subTextHy: DataTypes.STRING(1234),
    subTextEn: DataTypes.STRING(1234),
    secondSubTitleHy: DataTypes.STRING,
    secondSubTitleEn: DataTypes.STRING,
    secondSubTextHy: DataTypes.STRING(1234),
    secondSubTextEn: DataTypes.STRING(1234)
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};