'use strict';
const data = require("../utils/data/secondData").homeWeDo
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('HomeWeDos', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('HomeWeDos', null, {});
  }
};