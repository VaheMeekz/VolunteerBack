'use strict';
const data = require("../utils/data/secondData").events
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};