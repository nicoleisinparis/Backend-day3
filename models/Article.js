const mongoose = require("mongoose");

const Article = mongoose.model("Article", {
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Article;
