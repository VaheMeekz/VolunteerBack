'use strict';
const data = require("../utils/data/secondData").homeAbout
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HomeAbouts', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HomeAbouts', null, {});
  }
};