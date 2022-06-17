'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Projects extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Projects.init({
    titleOneHy: DataTypes.STRING,
    titleOneEn: DataTypes.STRING,
    descriptionOneHy: DataTypes.STRING(1234),
    descriptionOneEn: DataTypes.STRING(1234),
    image: DataTypes.STRING,
    titleTwoHy: DataTypes.STRING,
    titleTwoEn: DataTypes.STRING,
    descriptionTwoHy: DataTypes.STRING(1234),
    descriptionTwoEn: DataTypes.STRING(1234)
  }, {
    sequelize,
    modelName: 'Projects',
  });
  return Projects;
};