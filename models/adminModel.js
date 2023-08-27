const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../utils/database");

const Admin=sequelize.define('admin',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
},{
    timestamps:false
})

module.exports=Admin;