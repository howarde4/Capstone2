import React from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import MenusApi from "../api/api";
import './ItemSearchCard.css';

// Shows info about a recipe. ItemSearch -> ItemSearchCard

function ItemSearchCard({ id, item_name, category, ingredients, directions, img }) {
  console.debug("ItemCard");
  const {username} = useParams();
  const history = useHistory();

  async function handleClick(){
    let result = await addItem(recipes)
    if (result.success) {
      history.push(`/menus/${username}/${id}`);
    } else {
      console.error('unsuccessful');
    }
  }

  async function addItem(itemData){
    try {
      await MenusApi.createItem(username, id, itemData);
      return {success: true}
    } catch(errors) {
      console.error("failed", errors);
      return {success: false, errors};
    }
  }
  
  const recipes = {
    menu_id: id, 
    item_name: item_name, 
    category: category,
    ing1: ingredients[0].ing,
    ing2: ingredients[1].ing,
    ing3: ingredients[2].ing,
    ing4: ingredients[3].ing,
    ing5: ingredients[4].ing,
    ing6: ingredients[5].ing,
    ing7: ingredients[6].ing,
    ing8: ingredients[7].ing,
    ing9: ingredients[8].ing,
    ing10: ingredients[9].ing,
    ing11: ingredients[10].ing,
    ing12: ingredients[11].ing,
    ing13: ingredients[12].ing,
    ing14: ingredients[13].ing,
    ing15: ingredients[14].ing,
    ing16: ingredients[15].ing,
    ing17: ingredients[16].ing,
    ing18: ingredients[17].ing,
    ing19: ingredients[18].ing,
    ing20: ingredients[19].ing,
    amt1: ingredients[0].amount,
    amt2: ingredients[1].amount,
    amt3: ingredients[2].amount,
    amt4: ingredients[3].amount,
    amt5: ingredients[4].amount,
    amt6: ingredients[5].amount,
    amt7: ingredients[6].amount,
    amt8: ingredients[7].amount,
    amt9: ingredients[8].amount,
    amt10: ingredients[9].amount,
    amt11: ingredients[10].amount,
    amt12: ingredients[11].amount,
    amt13: ingredients[12].amount,
    amt14: ingredients[13].amount,
    amt15: ingredients[14].amount,
    amt16: ingredients[15].amount,
    amt17: ingredients[16].amount,
    amt18: ingredients[17].amount,
    amt19: ingredients[18].amount,
    amt20: ingredients[19].amount,
    directions: directions, 
    img: img
  }

  return (
        <div className="card" id='cardBody'>
          <div className="card-body">
            <h1 className="card-title" id='itemName'>{item_name}<img className="panda" src="https://image.freepik.com/free-vector/cute-panda-chef-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-1297.jpg" width= "100px" alt="panda"></img></h1>
            <h5 className="card-subtitle mb-2 text-muted">Category: <span className='category'>{category}</span></h5>
            <br/>
            <div className='lis'>
              {ingredients.map(i => {
                if(!i.ing){
                  return null;
                }
                return (
                  <>
                    <ul className='uls'><li className='ingLi'>{i.amount}</li></ul>
                    <ul className='ulsIng'><li className='ingLi'>{i.ing}</li></ul>
                  </>
              )})}
            </div>
            <p className='card-text'>{directions}</p>
            <img src={img} className='img' alt={item_name} width='600px' height='400px'/>
            <button className='itemBtn' onClick={handleClick}>Add Item</button>
          </div>
        </div>
  );
}


export default ItemSearchCard;

