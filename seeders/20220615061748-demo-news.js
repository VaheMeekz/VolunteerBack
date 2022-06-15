'use strict';
const data = require("../utils/data/data").news
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('News', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('News', null, {});
  }
};