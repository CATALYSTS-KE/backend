const mongoose = require('mongoose');

// Define the Article schema
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  collection: 'articles' // Specify the collection name
});

// Create the Article model
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
