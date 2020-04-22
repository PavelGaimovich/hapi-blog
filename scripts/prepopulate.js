const Article = require('../models/article');

Article.create({
  title: 'Important title',
  body: '<p>This is <b>test</b></p>'
})
