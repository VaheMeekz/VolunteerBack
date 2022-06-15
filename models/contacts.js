'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contacts.init({
    location: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    facebook: DataTypes.STRING,
    linkedin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contacts',
  });
  return Contacts;
};