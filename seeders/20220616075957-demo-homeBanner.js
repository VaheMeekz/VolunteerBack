'use strict';
const data = require("../utils/data/secondData").homeBanner
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HomeBanners', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HomeBanners', null, {});
  }
};