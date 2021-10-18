import React, { useState, useEffect } from "react";
import MenusApi from "../api/api";
import {Link} from 'react-router-dom';
import { useParams } from "react-router";
import LoadingSpinner from "../common/LoadingSpinner";
import ItemCard from "./ItemCard";

// ItemCard parent. MenuDetail -> ItemDetail 

 function ItemDetail() {
  console.debug("ItemCard");
  const { username, id, item } = useParams();
  const [menu_item, setMenu_item] = useState(null);

  useEffect(function getItem() {
    console.debug("item useEffect getAllItemsOnMount");
    getMenuItem();
  }, []);
 
  async function getMenuItem() {
    let menuItem = await MenusApi.getItem(username, id, item);
    setMenu_item(menuItem);
  }
  
  if (!menu_item) return <LoadingSpinner />;

  const ingredients = []
  ingredients.push({ing: menu_item.ing1, amount: menu_item.amt1})
  ingredients.push({ing: menu_item.ing2, amount: menu_item.amt2})
  ingredients.push({ing: menu_item.ing3, amount: menu_item.amt3})
  ingredients.push({ing: menu_item.ing4, amount: menu_item.amt4})
  ingredients.push({ing: menu_item.ing5, amount: menu_item.amt5})
  ingredients.push({ing: menu_item.ing6, amount: menu_item.amt6})
  ingredients.push({ing: menu_item.ing7, amount: menu_item.amt7})
  ingredients.push({ing: menu_item.ing8, amount: menu_item.amt8})
  ingredients.push({ing: menu_item.ing9, amount: menu_item.amt9})
  ingredients.push({ing: menu_item.ing10, amount: menu_item.amt10})
  ingredients.push({ing: menu_item.ing11, amount: menu_item.amt11})
  ingredients.push({ing: menu_item.ing12, amount: menu_item.amt12})
  ingredients.push({ing: menu_item.ing13, amount: menu_item.amt13})
  ingredients.push({ing: menu_item.ing14, amount: menu_item.amt14})
  ingredients.push({ing: menu_item.ing15, amount: menu_item.amt15})
  ingredients.push({ing: menu_item.ing16, amount: menu_item.amt16})
  ingredients.push({ing: menu_item.ing17, amount: menu_item.amt17})
  ingredients.push({ing: menu_item.ing18, amount: menu_item.amt18})
  ingredients.push({ing: menu_item.ing19, amount: menu_item.amt19})
  ingredients.push({ing: menu_item.ing20, amount: menu_item.amt20})

  return (
    <div>
      <Link to={`/menus/${username}/${id}`}><i className="fas fa-arrow-circle-left fa-2x" id="arrow"></i></Link>
      <div className="JobList col-md-8 offset-md-2">
        <ItemCard key={menu_item.id} item_name={menu_item.item_name} category={menu_item.category} ingredients={ingredients} directions={menu_item.directions} img={menu_item.img} />
      </div>
    </div>
  );
}


export default ItemDetail;
