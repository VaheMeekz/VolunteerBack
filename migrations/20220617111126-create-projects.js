'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titleOneHy: {
        type: Sequelize.STRING
      },
      titleOneEn: {
        type: Sequelize.STRING
      },
      descriptionOneHy: {
        type: Sequelize.STRING(1234)
      },
      descriptionOneEn: {
        type: Sequelize.STRING(1234)
      },
      image: {
        type: Sequelize.STRING
      },
      titleTwoHy: {
        type: Sequelize.STRING
      },
      titleTwoEn: {
        type: Sequelize.STRING
      },
      descriptionTwoHy: {
        type: Sequelize.STRING(1234)
      },
      descriptionTwoEn: {
        type: Sequelize.STRING(1234)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Projects');
  }
};