"use strict";

const express = require("express");
const Recipe = require("../models/recipe");
const router = express.Router({ mergeParams: true });

// gets recipe card from api
router.get("/", async function (req, res, next) {
  const item = req.query;
  try {
    const recipes = await Recipe.get(item);
    return res.json({ recipes });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
