'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("pet_recipe", "UserId", {
      type: Sequelize.INTEGER,
      references: {
        model: "user",
        key: "uid",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("pet_recipe", "UserId");
  }
};
