const db = require('../config/db');
const Article = require('../models/article');
const User = require('../models/user');
const Bcrypt = require('bcrypt');

db.sync();

Article.findOne({ where: { title: 'Important title' } }).then(article => {
  if (!article) {
    Article.create({
      title: 'Important title',
      body: '<p>This is <b>test</b></p>'
    });
  }
});

User.findOne({ where: { email: 'test@example.com' } }).then(user => {
  if (!user) {
    User.create({
      firstName: 'Pavel',
      lastName: 'Gaimovich',
      email: 'test@example.com',
      password: Bcrypt.hashSync('password', 5)
    });
  }
});
