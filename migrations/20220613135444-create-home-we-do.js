'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HomeWeDos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titleHy: {
        type: Sequelize.STRING
      },
      titleRu: {
        type: Sequelize.STRING
      },
      titleEn: {
        type: Sequelize.STRING
      },
      textHy: {
        type: Sequelize.STRING
      },
      textRu: {
        type: Sequelize.STRING
      },
      textEn: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      titleOne: {
        type: Sequelize.STRING
      },
      descriptionOne: {
        type: Sequelize.STRING
      },
      titleTwo: {
        type: Sequelize.STRING
      },
      descriptionTwo: {
        type: Sequelize.STRING
      },
      titleThree: {
        type: Sequelize.STRING
      },
      descriptionThree: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('HomeWeDos');
  }
};