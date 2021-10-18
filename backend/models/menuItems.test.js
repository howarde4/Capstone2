"use strict";

const { NotFoundError } = require("../expressError");
const db = require("../db.js");
const Menu = require("./menu");
const MenuItems = require("./menuItems");
const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
} = require("../helpers/_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

describe("create", function () {

  test("works", async function () {
    let menu = await Menu.getAll("testUser1");
    let menuId = menu[0].id;
    let newItem = {
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
      directions: "Melt butter and grill until cheese is melted",
      img: "grilled.jpg",
    };

    let item = await MenuItems.create(newItem);
    expect(item).toEqual({
      ...newItem,
    });
  });
});

describe("remove", function () {
  const userName = "testUser1";

  test("works", async function () {
    let menus = await Menu.getAll(userName);
    const ids = menus[0].id;

    let menu = await Menu.get(ids)
    const itemId = menu.items[0].id;

    await MenuItems.remove(itemId);
    const res = await db.query(
        "SELECT id FROM menu_items WHERE id=$1", [itemId]);
    expect(res.rows.length).toEqual(0);
  });

  test("not found if no item", async function () {
    try {
      await MenuItems.remove(9999);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});
