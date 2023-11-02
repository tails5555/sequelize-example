'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("TestData",
      {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        description: {
            type: Sequelize.STRING(200)
        },
        numeric: {
            type: Sequelize.DECIMAL(9, 2)
        },
        dtime: {
            type: Sequelize.DATE,
            allowNull: false
        }
      }
    );
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("TestData");
  }
};
