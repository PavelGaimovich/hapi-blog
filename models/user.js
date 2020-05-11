const db = require('../config/db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your first name'
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your second name'
      }
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your email'
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your password'
      }
    }
  }
}, {
  sequelize: db,
  modelName: 'user'
});

module.exports = User;
