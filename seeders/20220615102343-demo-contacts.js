'use strict';
const data = require("../utils/data/secondData").contacts
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Contacts', data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};