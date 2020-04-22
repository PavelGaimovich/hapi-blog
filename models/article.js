const db = require('../config/db');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Article extends Model {}
Article.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'article'
}).sync();

module.exports = Article;
