const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost/blog");

// const User = require("./models/User");
// const Article = require("./models/Aticle");

const userRoutes = require("./routes/user");
const articleRoutes = require("./routes/article");
app.use(userRoutes);
app.use(articleRoutes);
// const User = mongoose.model("User", {
//   name: String,
//   email: String,
// });

// const Article = mongoose.model("Article", {
//   title: String,
//   content: String,
//   author: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//   },
// });

// app.post("/user/create", async (req, res) => {
//   try {
//     const newUser = new User({
//       name: req.body.name,
//       email: req.body.email,
//     });
//     //console.log(newUser);
//     await newUser.save();
//     res.json(newUser);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });
// app.post("/article/create", async (req, res) => {
//   try {
//     const newArticle = new Article({
//       title: req.body.title,
//       content: req.body.content,
//       author: req.body.authorId,
//     });
//     await newArticle.save();
//     console.log(newArticle);
//     res.json("created");
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// app.get("/articles", async (req, res) => {
//   try {
//     const articles = await Article.find().populate("author");
//     res.json(articles);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

app.all("*", (req, res) => {
  res.status(400).json("route not found");
});

app.listen(3000, () => {
  console.log("server started");
});
