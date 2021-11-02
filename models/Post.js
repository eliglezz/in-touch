const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
  id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
  },
  picture:{
      type:DataTypes.STRING
  },
  description:{
      type:DataTypes.STRING
  },
  owner:{
      type:DataTypes.STRING
  }
},{
    sequelize, 
});

module.exports=Post