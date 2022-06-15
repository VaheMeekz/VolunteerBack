'use strict';
const data = require("../utils/data/data").admin
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Admins', data, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Admins', null, {});
    }
};