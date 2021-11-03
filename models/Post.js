const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
  id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true,
  },
  picture:{
      type: DataTypes.STRING
  },
  caption:{
      type: DataTypes.STRING,
  },
  cloudinary_id:{
      type: DataTypes.INTEGER,
      unique:true,
  },
  UserId:{
      type: DataTypes.INTEGER,
      allowNull:false
  }
},{
    sequelize, 
});

module.exports=Post