"use strict";

const axios = require("axios");


class Recipe {

  // gets recipes from api
  static async get({item}) {
    const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`)

    const recipe = res.data["meals"];

    return recipe;
  }

}

module.exports = Recipe;
