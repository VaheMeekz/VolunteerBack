'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AboutUs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AboutUs.init({
    titleHy: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    descriptionHy: DataTypes.STRING(1234),
    descriptionEn: DataTypes.STRING(1234),
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AboutUs',
  });
  return AboutUs;
};