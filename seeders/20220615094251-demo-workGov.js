'use strict';
const data = require("../utils/data/data").workGov
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WorkGoverments', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WorkGoverments', null, {});
  }
};