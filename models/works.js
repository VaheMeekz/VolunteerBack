'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Works extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Works.init({
    titleHy: DataTypes.STRING,
    titleEn: DataTypes.STRING,
    descriptionHy: DataTypes.STRING(1234),
    descriptionEn: DataTypes.STRING(1234),
    month:DataTypes.STRING,
    day:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Works',
  });

  let WorkGov = sequelize.define("WorkGoverment")
  let WorkWin = sequelize.define("WorkWin")
  let WorkPlus = sequelize.define("WorkPlus")

  Works.hasMany(WorkGov,{
    foreignKey:"workId"
  })
  Works.hasMany(WorkWin,{
    foreignKey:"workId"
  })
  Works.hasMany(WorkPlus,{
    foreignKey:"workId"
  })
  return Works;
};