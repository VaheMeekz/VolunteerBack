'use strict';
const data = require("../utils/data/data").workPlus
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WorkPlus', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WorkPlus', null, {});
  }
};