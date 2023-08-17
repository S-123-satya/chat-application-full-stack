const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../utils/database");

const UserGroup=sequelize.define('usergroup',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    groupname:{
        type:DataTypes.BIGINT,
        allowNull:false,

    }
})

module.exports=UserGroup;