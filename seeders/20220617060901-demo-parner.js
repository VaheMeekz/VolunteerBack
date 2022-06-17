'use strict';
const data = require("../utils/data/secondData").parner
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Partners', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Partners', null, {});
  }
};