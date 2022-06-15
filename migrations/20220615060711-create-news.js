'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('News', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      titleHy: {
        type: Sequelize.STRING
      },
      titleEn: {
        type: Sequelize.STRING
      },
      descriptionHy: {
        type: Sequelize.STRING(1234)
      },
      descriptionEn: {
        type: Sequelize.STRING(1234)
      },
      subtitleHy: {
        type: Sequelize.STRING
      },
      subtitleEn: {
        type: Sequelize.STRING
      },
      subTextHy: {
        type: Sequelize.STRING(1234)
      },
      subTextEn: {
        type: Sequelize.STRING(1234)
      },
      secondSubTitleHy: {
        type: Sequelize.STRING
      },
      secondSubTitleEn: {
        type: Sequelize.STRING
      },
      secondSubTextHy: {
        type: Sequelize.STRING(1234)
      },
      secondSubTextEn: {
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
    await queryInterface.dropTable('News');
  }
};