const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const BrokerCategory = sequelize.define('BrokerCategory', {
  brokerId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Brokers',
      key: 'id'
    }
  },
  categoryId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: 'Categories',
      key: 'id'
    }
  },
 
}, {
  timestamps: true
});

module.exports = BrokerCategory;
