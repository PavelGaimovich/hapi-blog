const articlesHandler = require('../handlers/articles');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: articlesHandler.index
  }
];
