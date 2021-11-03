const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require("bcrypt");

class Group extends Model {}

Group.init({
    // add properites here, ex:
    id: {
         type: DataTypes.INTEGER,
         unique:true,
         allowNull:false,
         primaryKey:true,
         validate:{
            
         }
    },
    name:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            
        }
    },
    user_id:{
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