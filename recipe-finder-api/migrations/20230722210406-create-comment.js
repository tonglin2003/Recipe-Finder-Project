'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment_content: {
        type: Sequelize.STRING
      },
      popularity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "user",
          key: "uid",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      RecipeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "pet_recipe",
          key: "recipe_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      BlogId: {
        type: Sequelize.INTEGER,
        references: {
          model: "blog",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comment');
  }
};