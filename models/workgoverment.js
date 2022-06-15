'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkGoverment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkGoverment.init({
    workId:DataTypes.INTEGER,
    descriptionHy: DataTypes.STRING(1234),
    descriptionEn: DataTypes.STRING(1234)
  }, {
    sequelize,
    modelName: 'WorkGoverment',
  });

  const Work = sequelize.define("Works")

  WorkGoverment.belongsTo(Work,{
    foreignKey:"id"
  })
  return WorkGoverment;
};