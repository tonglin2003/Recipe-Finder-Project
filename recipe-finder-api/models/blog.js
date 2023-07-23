'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {

    static associate(models) {
      this.belongsTo(models.User, {foreignKey: "UserId"});
      this.hasMany(models.Comment, {foreignKey: "BlogId"});
        }
  }
  Blog.init({
    imgUrl: {
      type: DataTypes.STRING,
    },
    blogTitle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    blogContent: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    popularity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "UserId"
    }
  }, {
    sequelize,
    modelName: 'Blog',
    tableName: "blog",
    underscored: true
  });
  return Blog;
};