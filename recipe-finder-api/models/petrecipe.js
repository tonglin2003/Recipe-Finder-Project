'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PetRecipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PetRecipes.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    tag: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    popularity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PetRecipes',
    tableName: 'pet_recipes',
    underscored: true
  });
  return PetRecipes;
};