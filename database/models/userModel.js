const sequelize = require('../db_connection')
const { Sequelize, DataTypes } = require('sequelize');

const userModel = sequelize.define('User', {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
  
  }
});

userModel.sync({ force: false });
module.exports = userModel;