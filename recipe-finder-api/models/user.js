'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.PetRecipe, {foreignKey: "UserId"});
      this.hasMany(models.Blog, {foreignKey: "UserId"});
      this.hasMany(models.Comment, {foreignKey: "UserId"});

    }
  }
  User.init({
    uid: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Update the primary key column to recipe_id
      autoIncrement: true,
      field: "uid", // Specify the column name in the database
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: { 
      type: DataTypes.STRING,
      allowNull: false,
      },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      },
    username: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      },
    password: { 
      type: DataTypes.STRING,
      allowNull: false,
    }  
    }, {
    sequelize,
    modelName: 'User',
    tableName: "user",
    underscored: true
  });
  return User;
};