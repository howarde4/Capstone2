"use strict";

const db = require("../db");
const { NotFoundError} = require("../expressError");

class Menu {

  // Create new menu with username and event name
  static async create(data) {
    const result = await db.query(
          `INSERT INTO menus (username, menu_event)
           VALUES ($1, $2)
           RETURNING menu_event`,
        [
          data.username,
          data.menu_event,
        ]);
    let menu = result.rows[0];

    return menu;
  }

// Returns user's menus
  static async getAll(username) {
    const menuRes = await db.query(
          `SELECT menu_event, id
            FROM menus
            WHERE username=$1`,
        [username],
    );

    return menuRes.rows;
  }

  // Deletes user's specific menu
  static async remove(id) {
    await db.query(
          `DELETE
           FROM menu_items
           WHERE menu_id = $1
           RETURNING menu_id`, [id]);

    await db.query(
      `DELETE
      FROM menus
      WHERE id = $1
      RETURNING id`, [id]);
    
  }

// Gets specific menu from user's menus
  static async get(id) {
    const menuRes = await db.query(
          `SELECT menu_event, id
           FROM menus
           WHERE id = $1`,
        [id]);

    const menu = menuRes.rows[0];

    if (!menu) throw new NotFoundError(`No menu: ${id}`);

    const itemsRes = await db.query(
          `SELECT *
           FROM menu_items
           WHERE menu_id = $1
           ORDER BY id`,
        [id],
    );

    menu.items = itemsRes.rows;

    return menu;
  }

  // gets Menu Items from specific menu
  static async getItem(item) {

    const itemRes = await db.query(
          `SELECT *
           FROM menu_items
           WHERE id = $1
           ORDER BY id`,
        [item],
    );

    return itemRes.rows;
  }

}

module.exports = Menu;
