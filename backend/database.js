const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wasit_project_db', 'root', 'root', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false  // Prevent SQL execution logs
});

module.exports = sequelize;
