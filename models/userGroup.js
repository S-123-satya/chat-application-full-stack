const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../utils/database");

const UserGroup=sequelize.define('usergroup',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
})

module.exports=UserGroup;