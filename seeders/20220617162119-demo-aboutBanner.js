'use strict';
const data = require("../utils/data/secondData").aboutBanner
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('AboutUsBanners', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AboutUsBanners', null, {});
  }
};