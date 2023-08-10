const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('chat-application', 'root', 'Satya0*123', {
  host: 'localhost',
  dialect:  'mysql' /* one of| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});

module.exports=sequelize;