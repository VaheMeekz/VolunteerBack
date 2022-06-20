'use strict';
const data = require("../utils/data/secondData").files
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Statics', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Statics', null, {});
  }
};