import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

// Displays link to specific menus (MenuDetail). MenuList -> MenuCard

function MenuCard({ username, menu_event, id }) {
  console.debug("MenuCard");

  return (
    <div className='linkDiv'>
      <Link to={`/menus/${username}/${id}`}>
        <button className='MenusLink'>{menu_event}</button>
      </Link>
    </div>
);
}

export default MenuCard;
