"use strict";

const request = require("supertest");

const app = require("../app");

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

describe("POST /menus/:username", function () {
  const username = "testUser1";
  const newMenu = {
    username: "testUser1",
    menu_event: "Test Event",
  };

  test("ok", async function () {
    const resp = await request(app)
        .post(`/menus/${username}`)
        .send(newMenu);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      menu: {menu_event: "Test Event"},
    });
  });

  test("bad request with missing data", async function () {
    const resp = await request(app)
        .post(`/menus/${username}`)
        .send({
          username: "testUser1",
        });
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request with invalid data", async function () {
    const resp = await request(app)
        .post(`/menus/${username}`)
        .send({
          username: "testUser1",
          menu_event: 1,
        });
    expect(resp.statusCode).toEqual(400);
  });
});


describe("GET /menus/:username", function () {
  const username = "testUser1";

  test("ok", async function () {
    const resp = await request(app).get(`/menus/${username}`);
    expect(resp.body).toEqual({
      menus:
          [
            {
              id: expect.any(Number),
              menu_event: "dinner",
            },
            {
              id: expect.any(Number),
              menu_event: "lunch",
            },
          ],
    });
  });
});


describe("GET /menus/:username/:id", function () {
  const username = "testUser1";

  test("works", async function () {
    const menuid = await request(app).get(`/menus/${username}`);
    const mId = menuid.body.menus[0].id;

    const resp = await request(app).get(`/menus/${username}/${mId}`);
    expect(resp.body).toEqual({
      menu: {
        id: mId,
        menu_event: "dinner",
        items: [
        {
          id: expect.any(Number),
          menu_id: mId,
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
          menu_id: mId,
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
      }
    });
  });

  test("not found for no menu", async function () {
    const resp = await request(app).get(`/menus/${username}/9999`);
    expect(resp.statusCode).toEqual(404);
  });
});


describe("POST /menus/:username/:id/addItem", function () {
  const username = "testUser1";

  test("ok", async function () {
    const menuid = await request(app).get(`/menus/${username}`);
    const mId = menuid.body.menus[0].id;

    let newItem = {
      menu_id: mId,
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

    const resp = await request(app)
        .post(`/menus/${username}/${mId}/addItem`)
        .send(newItem);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      menu_item: {...newItem,},
    });
  });

  test("bad request with missing data", async function () {
    const menuid = await request(app).get(`/menus/${username}`);
    const mId = menuid.body.menus[0].id;

    let newItem = {
      menu_id: mId,
      item_name: "Grilled Cheese",
      category: "American",
      ing1: "Bread",
      amt1: "2 slices",
      img: "grilled.jpg",
    };
    
    const resp = await request(app)
        .post(`/menus/${username}/${mId}/addItem`)
        .send(newItem);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request with invalid data", async function () {
    const menuid = await request(app).get(`/menus/${username}`);
    const mId = menuid.body.menus[0].id;

    let newItem = {
      menu_id: 9999,
      item_name: "Grilled Cheese",
      category: "American",
      ing1: "Bread",
      amt1: "2 slices",
      img: "grilled.jpg",
    };

    const resp = await request(app)
        .post(`/menus/${username}/${mId}/addItem`)
        .send(newItem);
    expect(resp.statusCode).toEqual(400);
  });
});


describe("GET /menus/:username/:id/:item", function () {
  const username = "testUser1";

  test("works", async function () {
    const menuid = await request(app).get(`/menus/${username}`);
    const mId = menuid.body.menus[0].id;

    const itemid = await request(app).get(`/menus/${username}/${mId}/`)
    const iId = itemid.body.menu.items[0].id;

    const resp = await request(app).get(`/menus/${username}/${mId}/${iId}`);

    expect(resp.body).toEqual({
          items: [
            {
              id: iId,
              menu_id: mId,
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
          ]
        });
  });
});


describe("DELETE /menus/:username/:id/:item", function () {
  const username = "testUser1";
 
  test("works", async function () {
    const menuid = await request(app).get(`/menus/${username}`);
    const mId = menuid.body.menus[0].id;

    const itemid = await request(app).get(`/menus/${username}/${mId}/`)
    const iId = itemid.body.menu.items[0].id;
    
    const resp = await request(app)
        .delete(`/menus/${username}/${mId}/${iId}`);
    expect(resp.body).toEqual({ deleted: iId });
  });
});


describe("DELETE /menus/:username/:id", function () {
  const username = "testUser1";
 
  test("works", async function () {
    const menuid = await request(app).get(`/menus/${username}`);
    const mId = menuid.body.menus[0].id;

    const resp = await request(app)
        .delete(`/menus/${username}/${mId}`);
    expect(resp.body).toEqual({ deleted: `${mId}` });
  });
});
