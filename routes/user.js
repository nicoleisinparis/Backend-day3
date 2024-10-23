const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/user/create", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
    });
    //console.log(newUser);
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
