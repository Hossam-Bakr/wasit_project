const User = require('./User');
const UserProfile = require('./UserProfile');
const Broker = require('./Broker');
const Category = require('./Category');
const ContactMessages = require('./ContactMessages');
const BrokerCategory = require('./BrokerCategory');

// User and UserProfile Relationship
User.hasOne(UserProfile, { foreignKey: 'userId' });
UserProfile.belongsTo(User, { foreignKey: 'userId' });

// Broker and Category Relationship (Many-to-Many)
Broker.belongsToMany(Category, { through: BrokerCategory, foreignKey: 'brokerId' });
Category.belongsToMany(Broker, { through: BrokerCategory, foreignKey: 'categoryId' });

// User and Broker Relationship (One-to-Many)
User.hasMany(Broker, { foreignKey: 'userId' });
Broker.belongsTo(User, { foreignKey: 'userId' });

// User and ContactMessages Relationship (One-to-Many)
User.hasMany(ContactMessages, { foreignKey: 'userId' });
ContactMessages.belongsTo(User, { foreignKey: 'userId' });

// Broker and ContactMessages Relationship (One-to-Many)
Broker.hasMany(ContactMessages, { foreignKey: 'brokerId' });
ContactMessages.belongsTo(Broker, { foreignKey: 'brokerId' });

module.exports = {
  User,
  UserProfile,
  Broker,
  Category,
  ContactMessages,
  BrokerCategory
};
