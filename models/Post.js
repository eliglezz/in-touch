const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
  id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
  },
  picture:{
      type: DataTypes.STRING
  },
  caption:{
      type: DataTypes.STRING,
      validate:{
        isAlphanumeric:true
     }
  },
  cloudinary_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
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