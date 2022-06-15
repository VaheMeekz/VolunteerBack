'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkWin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkWin.init({
    workId:DataTypes.INTEGER,
    descriptionHy: DataTypes.STRING(1234),
    descriptionEn: DataTypes.STRING(1234)
  }, {
    sequelize,
    modelName: 'WorkWin',
  });

  const Work = sequelize.define("Works")

  WorkWin.belongsTo(Work,{
    foreignKey:"id"
  })
  return WorkWin;
};