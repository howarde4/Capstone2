"use strict";

const Recipe = require("./recipe");

describe("get", function () {

  test("works", async function () {
    const item = "Peanut Butter Cookies";
    let searchItem = await Recipe.get({item});

    expect(searchItem).toEqual([{
        idMeal: '52958',
        strMeal: 'Peanut Butter Cookies',
        strDrinkAlternate: null,
        strCategory: 'Dessert',
        strArea: 'American',
        strInstructions: 'Preheat oven to 350ºF (180ºC).\r\n' +
          'In a large bowl, mix together the peanut butter, sugar, and egg.\r\n' +
          'Scoop out a spoonful of dough and roll it into a ball. Place the cookie balls onto a nonstick baking sheet.\r\n' +
          'For extra decoration and to make them cook more evenly, flatten the cookie balls by pressing a fork down on top of them, then press it down again at a 90º angle to make a criss-cross pattern.\r\n' +
          'Bake for 8-10 minutes or until the bottom of the cookies are golden brown.\r\n' +
          'Remove from baking sheet and cool.\r\n' +
          'Enjoy!',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/1544384070.jpg',
        strTags: 'Breakfast,UnHealthy,BBQ',
        strYoutube: '',
        strIngredient1: 'Peanut Butter',
        strIngredient2: 'Sugar',
        strIngredient3: 'Egg',
        strIngredient4: '',
        strIngredient5: '',
        strIngredient6: '',
        strIngredient7: '',
        strIngredient8: '',
        strIngredient9: '',
        strIngredient10: '',
        strIngredient11: '',
        strIngredient12: '',
        strIngredient13: '',
        strIngredient14: '',
        strIngredient15: '',
        strIngredient16: '',
        strIngredient17: '',
        strIngredient18: '',
        strIngredient19: '',
        strIngredient20: '',
        strMeasure1: '1 cup ',
        strMeasure2: '1/2 cup ',
        strMeasure3: '1',
        strMeasure4: '',
        strMeasure5: '',
        strMeasure6: '',
        strMeasure7: '',
        strMeasure8: '',
        strMeasure9: '',
        strMeasure10: '',
        strMeasure11: '',
        strMeasure12: '',
        strMeasure13: '',
        strMeasure14: '',
        strMeasure15: '',
        strMeasure16: '',
        strMeasure17: '',
        strMeasure18: '',
        strMeasure19: '',
        strMeasure20: '',
        strSource: 'https://tasty.co/recipe/3-ingredient-peanut-butter-cookies',
        strImageSource: null,
        strCreativeCommonsConfirmed: null,
        dateModified: null,
    }]);
  });
});

