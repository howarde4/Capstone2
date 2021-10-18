"use strict";

const request = require("supertest");

const app = require("../app");


describe("GET /recipes", function () {

  test("ok", async function () {
    const resp = await request(app).get(`/recipes`);
    expect(resp.status).toEqual(200);
  });
});

