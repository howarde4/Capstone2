import React from "react";
import {useParams, useHistory} from 'react-router-dom';
import MenusApi from "../api/api";
import './ItemSearchCard.css';

// Shows info about an item. ItemDetail -> ItemCard

function ItemCard({ item_name, category, ingredients, directions, img }) {
  console.debug("ItemCard");
  const {username, id, item} = useParams()
  const history = useHistory();

  async function removeItem(username, id, item){
    try {
      await MenusApi.deleteItem(username, id, item, item);
      return {success: true}
    } catch(errors) {
      console.error("failed", errors);
      return {success: false, errors};
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await removeItem(username, id, item);
    if (result.success) {
      history.push(`/menus/${username}/${id}`);
    } else {
      return result.errors;
    }
  }

  return (
    <div className="card" id='cardBody'>
      <div className="card-body">
        <h2 className="card-title" id='itemName'>{item_name}<img className="panda" src="https://image.freepik.com/free-vector/cute-panda-chef-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-1297.jpg" width= "100px" alt="panda"></img></h2>
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
        <div className='image'>
          {img ? <img src={img} className='card-img-bottom' id='img' alt={item_name}/> : <img src="https://image.freepik.com/free-vector/cute-panda-chef-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-1297.jpg" className='card-img-bottom' id='img' alt="panda"/>}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="menuTrash">
        <button className="trashMenu2"><i className="far fa-trash-alt fa-lg" style={{color: "red"}}></i></button>
      </form>
    </div>
  );
}


export default ItemCard;

