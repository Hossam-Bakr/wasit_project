const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = User;
