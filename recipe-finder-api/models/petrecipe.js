'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetRecipe extends Model {
    
    static associate(models) {
      this.belongsTo(models.User, {foreignKey: "UserId"});
      this.hasMany(models.Comment, {foreignKey: "RecipeId"});

    }
  }
  PetRecipe.init({
    recipe_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Update the primary key column to recipe_id
      autoIncrement: true,
      field: "recipe_id", // Specify the column name in the database
    },
    title: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    tag: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    rate: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    popularity: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "UserId"
    }
  }, {
    sequelize,
    modelName: 'PetRecipe',
    tableName: 'pet_recipe',
    underscored: true
  });
  return PetRecipe;
};