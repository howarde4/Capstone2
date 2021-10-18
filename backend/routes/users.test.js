"use strict";

const request = require("supertest");
const app = require("../app");

const {
  commonBeforeAll,
  commonBeforeEach,
  commonAfterEach,
  commonAfterAll,
  u1Token,
  u2Token,
} = require("../helpers/_testCommon");

beforeAll(commonBeforeAll);
beforeEach(commonBeforeEach);
afterEach(commonAfterEach);
afterAll(commonAfterAll);

describe("POST /users", function () {
  test("works", async function () {
    const resp = await request(app)
        .post("/users")
        .send({
          username: "newUser",
          firstName: "newF",
          lastName: "newL",
          password: "password",
          email: "newU@email.com",
        })
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).toEqual({
      user: {
        username: "newUser",
        firstName: "newF",
        lastName: "newL",
        email: "newU@email.com",
      }, token: expect.any(String),
    });
  });

  test("bad request if missing data", async function () {
    const resp = await request(app)
        .post("/users")
        .send({
          username: "newU",
        })
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });

  test("bad request if invalid data", async function () {
    const resp = await request(app)
        .post("/users")
        .send({
          username: "newUser",
          firstName: "newF",
          lastName: "newL",
          password: "password",
          email: "not-an-email",
        })
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });
});


describe("GET /users/:username", function () {

  test("works", async function () {
    const resp = await request(app)
        .get(`/users/testUser1`)
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.body).toEqual({
      user: {
        username: "testUser1",
        firstName: "U1F",
        lastName: "U1L",
        email: "user1@user.com",
      },
    });
  });

  test("unauth for other users", async function () {
    const resp = await request(app)
        .get(`/users/testUser1`)
        .set("authorization", `Bearer ${u2Token}`);
    expect(resp.statusCode).toEqual(401);
  });
});

describe("PATCH /users/:username", () => {
  test("works", async function () {
    const resp = await request(app)
        .patch(`/users/testUser1`)
        .send({
          firstName: "New",
        })
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.body).toEqual({
      user: {
        username: "testUser1",
        firstName: "New",
        lastName: "U1L",
        email: "user1@user.com",
      },
    });
  });

  test("unauth if not same user", async function () {
    const resp = await request(app)
        .patch(`/users/testUser1`)
        .send({
          firstName: "New",
        })
        .set("authorization", `Bearer ${u2Token}`);
    expect(resp.statusCode).toEqual(401);
  });

  test("unauth for anon", async function () {
    const resp = await request(app)
        .patch(`/users/testUser1`)
        .send({
          firstName: "New",
        });
    expect(resp.statusCode).toEqual(401);
  });

  test("bad request if invalid data", async function () {
    const resp = await request(app)
        .patch(`/users/testUser1`)
        .send({
          firstName: 42,
        })
        .set("authorization", `Bearer ${u1Token}`);
    expect(resp.statusCode).toEqual(400);
  });
});
