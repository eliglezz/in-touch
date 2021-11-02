const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
  id:{
      type:DataTypes.INTEGER
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