const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../utils/database");

const Group=sequelize.define('group',{
    groupName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
})

module.exports=Group;