import React, { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import MenusApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import './MenuDetail.css'

// Displays specific menu with link to each item and link to add items. MenuCard -> MenuDetail

function MenuDetail() {
  const { username, id } = useParams();
  const history = useHistory();
  const [menuDetail, setMenuDetail] = useState(null);
  console.debug("MenuDetail", "id=", id);

  useEffect(function getMenuDetails() {
    async function getMenu() {
      setMenuDetail(await MenusApi.getMenu(username, id));
    }
    getMenu();
  }, [username, id]);

  async function removeMenu(username, id){
    try {
      await MenusApi.deleteMenu(username, id, id);
      return {success: true}
    } catch(errors) {
      console.error("failed", errors);
      return {success: false, errors};
    }
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await removeMenu(username, id);
    if (result.success) {
      history.push(`/menus/${username}`);
    } else {
      return result.errors;
    }
  }

  if (!menuDetail) return <LoadingSpinner />;
  
  return (
    <div>
      <Link to={`/menus/${username}`}><i className="fas fa-arrow-circle-left fa-2x" id="arrow"></i></Link>
      <div className="menu">
        <h1 className="menuTitle">{menuDetail.menu_event}</h1>
        {menuDetail.items.map(items => (
            <Link to={`/menus/${username}/${id}/${items.id}`}>
              <button className='detailBtn'>{items.item_name}</button>
            </Link>
        ))}
        <div>
          <Link to={`/menus/${username}/${id}/addItem`}>
            <button className='addBtn'>Add Item</button>
          </Link>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="menuTrash">
            <button className="trashMenu"><i className="far fa-trash-alt fa-lg" style={{color: "red"}}></i></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MenuDetail;