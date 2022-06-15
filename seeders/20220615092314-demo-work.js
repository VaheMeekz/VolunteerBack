'use strict';
const data = require("../utils/data/data").works
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Works', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Works', null, {});
  }
};