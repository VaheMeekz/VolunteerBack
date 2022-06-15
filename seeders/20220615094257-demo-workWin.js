'use strict';
const data = require("../utils/data/data").workWin
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('WorkWins', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WorkWins', null, {});
  }
};