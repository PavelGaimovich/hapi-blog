const Article = require('../models/article');

module.exports = {
  index: async (request, h) => {
      const articles = await Article.findAll();

      return h.view('home', { articles });
  }
};
