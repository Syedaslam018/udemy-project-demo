const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
    
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

module.exports = User;