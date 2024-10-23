const express = require("express");
const router = express.Router();
const Article = require("../models/Article");

router.post("/article/create", async (req, res) => {
  try {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
      author: req.body.authorId,
    });
    await newArticle.save();
    console.log(newArticle);
    res.json("created");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find().populate("author");
    res.json(articles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
