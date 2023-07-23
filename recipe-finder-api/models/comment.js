'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {

    static associate(models) {
      this.belongsTo(models.User, {foreignKey: "UserId"});
      this.belongsTo(models.PetRecipe, {foreignKey: "RecipeId"});
      this.belongsTo(models.Blog, {foreignKey: "BlogId"});
    }
  }
  Comment.init({
    commentContent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    popularity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "UserId",
    },
    RecipeId: {
      type: DataTypes.INTEGER,
      field: "RecipeId"
    },
    BlogId: {
      type: DataTypes.INTEGER,
      field: "BlogId"
    }
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: "comment",
    underscored: true,
  });
  return Comment;
};