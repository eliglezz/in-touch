const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Group extends Model {}

Group.init({
    name:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            
        }
    },
    UserId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
        }
    }
},{
    hooks:{
    },
    sequelize,
});

module.exports = Group;