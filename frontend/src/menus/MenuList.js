import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import UserContext from "../auth/UserContext";
import MenusApi from "../api/api";
import LoadingSpinner from "../common/LoadingSpinner";
import MenuCard from "./MenuCard";
import NewMenuForm from "./newMenuForm";
import './Menu.css'

// Shows list of menus once logged in. 

function MenuList() {
  console.debug("MenuList");
  const { currentUser } = useContext(UserContext);
  const history = useHistory();
  const [menus, setMenus] = useState(null);

  useEffect(function getMenu() {
    console.debug("MenuList useEffect getAllMenusOnMount");
    menusList();
  }, []);

  async function menusList() {
    let menus = await MenusApi.getMenus(currentUser.username);
    setMenus(menus);
  }
  
  async function addMenu(menuData){
    try {
      let newMenu = await MenusApi.createMenu(currentUser.username, menuData);
      setMenus(newMenu);
      history.push(`/${currentUser.username}`);
      return {success: true};
    } catch(errors) {
      console.error("failed", errors);
      return {success: false, errors};
    }
  }

  if (!menus) return <LoadingSpinner />;
 
  return (
      <div className="col-md-8 offset-md-2">
        <h1 className='menusTitle'>{currentUser.firstName || currentUser.username}'s Menus</h1>
          {menus.map(menu => (
            <MenuCard menu_event={menu.menu_event} username={currentUser.username} id={menu.id} key={menu.id} />
        ))}
        <NewMenuForm addMenu={addMenu} />
      </div>
  );
}

export default MenuList;
