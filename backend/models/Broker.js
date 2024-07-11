const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Broker = sequelize.define('Broker', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  timestamps: true
});

module.exports = Broker;
