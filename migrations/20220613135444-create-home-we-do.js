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
      titleHy: Sequelize.STRING,
      titleEn: Sequelize.STRING,
      textHy: Sequelize.STRING(1234),
      textEn: Sequelize.STRING(1234),
      image: Sequelize.STRING,
      titleOneHy: Sequelize.STRING,
      titleOneEn: Sequelize.STRING,
      descriptionOneHy: Sequelize.STRING(1234),
      descriptionOneEn: Sequelize.STRING(1234),
      titleTwoHy: Sequelize.STRING,
      titleTwoEn: Sequelize.STRING,
      descriptionTwoHy: Sequelize.STRING(1234),
      descriptionTwoEn: Sequelize.STRING(1234),
      titleThreeHy: Sequelize.STRING,
      titleThreeEn: Sequelize.STRING,
      descriptionThreeHy: Sequelize.STRING(1234),
      descriptionThreeEn: Sequelize.STRING(1234),
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