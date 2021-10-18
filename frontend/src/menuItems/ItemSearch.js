import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SearchForm from "../common/SearchForm";
import ItemSearchCard from "./ItemSearchCard";
import MenusApi from "../api/api";

// Search for a recipe. ItemForm -> ItemSearch

function ItemSearch() {
  console.debug("ItemSearch");
  const {id} = useParams();
  const [items, setItems] = useState("");

  async function search(name) {
      try{
        let items = await MenusApi.getRecipe(name);
        if (items.recipes !== null){
            setItems(items);
        }
      } catch(e){
          return e
      }
  }

  const item_name = items.recipes

  const recipes = []
   
  if (items){
    {item_name.map(i => {
        const ingredients = []
        ingredients.push({ing: i.strIngredient1, amount: i.strMeasure1})
        ingredients.push({ing: i.strIngredient2, amount: i.strMeasure2})
        ingredients.push({ing: i.strIngredient3, amount: i.strMeasure3})
        ingredients.push({ing: i.strIngredient4, amount: i.strMeasure4})
        ingredients.push({ing: i.strIngredient5, amount: i.strMeasure5})
        ingredients.push({ing: i.strIngredient6, amount: i.strMeasure6})
        ingredients.push({ing: i.strIngredient7, amount: i.strMeasure7})
        ingredients.push({ing: i.strIngredient8, amount: i.strMeasure8})
        ingredients.push({ing: i.strIngredient9, amount: i.strMeasure9})
        ingredients.push({ing: i.strIngredient10, amount: i.strMeasure10})
        ingredients.push({ing: i.strIngredient11, amount: i.strMeasure11})
        ingredients.push({ing: i.strIngredient12, amount: i.strMeasure12})
        ingredients.push({ing: i.strIngredient13, amount: i.strMeasure13})
        ingredients.push({ing: i.strIngredient14, amount: i.strMeasure14})
        ingredients.push({ing: i.strIngredient15, amount: i.strMeasure15})
        ingredients.push({ing: i.strIngredient16, amount: i.strMeasure16})
        ingredients.push({ing: i.strIngredient17, amount: i.strMeasure17})
        ingredients.push({ing: i.strIngredient18, amount: i.strMeasure18})
        ingredients.push({ing: i.strIngredient19, amount: i.strMeasure19})
        ingredients.push({ing: i.strIngredient20, amount: i.strMeasure20})

        const recipe = {item_name: i.strMeal, category: i.strCategory, ingredients, directions: i.strInstructions, img: i.strMealThumb}
        recipes.push(recipe)
})}
  }

  return (
    <div className="CompanyList col-md-8 offset-md-2">
      <SearchForm searchFor={search} onSearchChange={search}/>
        {items
            ? (
                <div>
                  {recipes.map(i => {
                     return (
                        <div>
                          <ItemSearchCard key={i.idMeal} id={id} item_name={i.item_name} category={i.category} ingredients={i.ingredients} directions={i.directions} img={i.img} />
                        </div>
                     )
                  })}
                </div>
            ) : null}
    </div>
  );
}

export default ItemSearch;
