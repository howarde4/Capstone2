"use strict";

const db = require("../db.js");
const User = require("../models/user");
const Menu = require("../models/menu");
const MenuItems = require("../models/menuItems");
const { createToken } = require("./tokens");

async function commonBeforeAll() {
  await db.query("DELETE FROM menu_items");
  await db.query("DELETE FROM menus");
  await db.query("DELETE FROM users");

  await User.register({
    username: "testUser1",
    firstName: "U1F",
    lastName: "U1L",
    email: "user1@user.com",
    password: "password1",
  });
  await User.register({
    username: "testUser2",
    firstName: "U2F",
    lastName: "U2L",
    email: "user2@user.com",
    password: "password2",
  });

  await Menu.create(
    {
      username: "testUser1",
      menu_event: "dinner"
    });
  await Menu.create(
    {
      username: "testUser1",
      menu_event: "lunch",
    });
  await Menu.create(
    {
      username: "testUser2",
      menu_event: "breakfast",
    });
  
  const menu = await Menu.getAll("testUser1");
  const menuId = menu[0].id

  await MenuItems.create(
    {
      menu_id: menuId,
      item_name: "Sandwich",
      category: "American",
      ing1: "Bread",
      ing2: "Lettuce",
      ing3: "Turkey",
      ing4: "Cheese",
      ing5: null, 
      ing6: null, 
      ing7: null, 
      ing8: null, 
      ing9: null, 
      ing10: null, 
      ing11: null, 
      ing12: null, 
      ing13: null, 
      ing14: null, 
      ing15: null, 
      ing16: null, 
      ing17: null, 
      ing18: null, 
      ing19: null, 
      ing20: null,
      amt1: "2 slices",
      amt2: "1 leaf",
      amt3: "3 slices",
      amt4: "1 slice", 
      amt5: null,
      amt6: null,
      amt7: null,
      amt8: null,
      amt9: null,
      amt10: null,
      amt11: null,
      amt12: null,
      amt13: null,
      amt14: null,
      amt15: null,
      amt16: null,
      amt17: null,
      amt18: null,
      amt19: null,
      amt20: null,
      directions: "Put together and enjoy",
      img: "sandwich.jpg",
  }); 

  await MenuItems.create(
    {
      menu_id: menuId,
      item_name: "Grilled Cheese",
      category: "American",
      ing1: "Bread",
      ing2: "Cheese",
      ing3: "Butter",
      ing4: null,
      ing5: null, 
      ing6: null, 
      ing7: null, 
      ing8: null, 
      ing9: null, 
      ing10: null, 
      ing11: null, 
      ing12: null, 
      ing13: null, 
      ing14: null, 
      ing15: null, 
      ing16: null, 
      ing17: null, 
      ing18: null, 
      ing19: null, 
      ing20: null,
      amt1: "2 slices",
      amt2: "3 slices",
      amt3: "1 slice",
      amt4: null, 
      amt5: null,
      amt6: null,
      amt7: null,
      amt8: null,
      amt9: null,
      amt10: null,
      amt11: null,
      amt12: null,
      amt13: null,
      amt14: null,
      amt15: null,
      amt16: null,
      amt17: null,
      amt18: null,
      amt19: null,
      amt20: null,
      directions: "Melt butter, grill sandwich",
      img: "grilled.jpg",
  }); 
}

async function commonBeforeEach() {
  await db.query("BEGIN");
}

async function commonAfterEach() {
  await db.query("ROLLBACK");
}

async function commonAfterAll() {
  await db.end();
}

const u1Token = createToken({ username: "testUser1" });
const u2Token = createToken({ username: "testUser2" });

module.exports = {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
  u2Token,
};
