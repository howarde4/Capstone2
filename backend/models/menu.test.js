"use strict";

const db = require("../db.js");
const { NotFoundError } = require("../expressError");
const Menu = require("./menu.js");
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
  const newMenu = {
    username: "testUser1",
    menu_event: "Test Event",
  };

  test("works", async function () {
    let menu = await Menu.create(newMenu);
    expect(menu).toEqual({menu_event: "Test Event",});
  });
});

describe("getAll Menus", function () {
  const userName = "testUser1";

  test("works: all", async function () {
    let menus = await Menu.getAll(userName);
    expect(menus).toEqual([
      {
        id: expect.any(Number),
        menu_event: "dinner",
      },
      {
        id: expect.any(Number),
        menu_event: "lunch",
      },
    ]);
  });
});

describe("getAll Items", function () {
  const userName = "testUser1";
  test("works", async function () {
    let menus = await Menu.getAll(userName);
    const ids = menus[0].id;

    let menuItems = await Menu.get(ids);
    expect(menuItems).toEqual({
      id: ids,
      menu_event: "dinner",
      items: [
        {
          id: expect.any(Number),
          menu_id: ids,
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
          amt18: null,
          amt16: null,
          amt17: null,
          amt19: null,
          amt20: null,
          directions: "Put together and enjoy",
          img: "sandwich.jpg",
        },
        {
          id: expect.any(Number),
          menu_id: ids,
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
        },
      ],
    });
  });

  test("not found if no menu", async function () {
    try {
      await Menu.get(9999);
      fail();
    } catch (err) {
      expect(err instanceof NotFoundError).toBeTruthy();
    }
  });
});

describe("getItem", function () {
  const userName = "testUser1";

  test("works", async function () {
    let menus = await Menu.getAll(userName);
    const ids = menus[0].id;

    let menu = await Menu.get(ids)
    const itemId = menu.items[0].id;

    let item = await Menu.getItem(itemId);
    expect(item).toEqual([
      {
          id: itemId,
          menu_id: ids,
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
          amt18: null,
          amt16: null,
          amt17: null,
          amt19: null,
          amt20: null,
          directions: "Put together and enjoy",
          img: "sandwich.jpg",
      },
    ]);
  });
});

describe("remove", function () {
  const userName = "testUser1";
  test("works", async function () {
    let menus = await Menu.getAll(userName);
    const ids = menus[0].id;
    await Menu.remove(ids);
    const res = await db.query(
        `SELECT id FROM menus WHERE id=${ids}`);
    expect(res.rows.length).toEqual(0);
  });
});
