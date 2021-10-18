"use strict";

const db = require("../db");
const { NotFoundError} = require("../expressError");

class MenuItems {

// Creates menu item for specific menu
  static async create(data) {
    const result = await db.query(
          `INSERT INTO menu_items 
          (menu_id, 
          item_name,
          category, 
              ing1,
              ing2,
              ing3,
              ing4,
              ing5,
              ing6,
              ing7,
              ing8,
              ing9,
              ing10,
              ing11,
              ing12,
              ing13,
              ing14,
              ing15,
              ing16,
              ing17,
              ing18,
              ing19,
              ing20,
              amt1,
              amt2,
              amt3,
              amt4,
              amt5,
              amt6,
              amt7,
              amt8,
              amt9,
              amt10,
              amt11,
              amt12,
              amt13,
              amt14,
              amt15,
              amt16,
              amt17,
              amt18,
              amt19,
              amt20, 
            directions, 
            img) 
           VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45)
           RETURNING 
           menu_id, 
           item_name, 
           category, 
           ing1,
           ing2,
           ing3,
           ing4,
           ing5,
           ing6,
           ing7,
           ing8,
           ing9,
           ing10,
           ing11,
           ing12,
           ing13,
           ing14,
           ing15,
           ing16,
           ing17,
           ing18,
           ing19,
           ing20,
           amt1,
           amt2,
           amt3,
           amt4,
           amt5,
           amt6,
           amt7,
           amt8,
           amt9,
           amt10,
           amt11,
           amt12,
           amt13,
           amt14,
           amt15,
           amt16,
           amt17,
           amt18,
           amt19,
           amt20,
           directions, 
           img`,
        [
          data.menu_id,
          data.item_name,
          data.category,
          data.ing1,
          data.ing2,
          data.ing3,
          data.ing4,
          data.ing5,
          data.ing6,
          data.ing7,
          data.ing8,
          data.ing9,
          data.ing10,
          data.ing11,
          data.ing12,
          data.ing13,
          data.ing14,
          data.ing15,
          data.ing16,
          data.ing17,
          data.ing18,
          data.ing19,
          data.ing20,
          data.amt1,
          data.amt2,
          data.amt3,
          data.amt4,
          data.amt5,
          data.amt6,
          data.amt7,
          data.amt8,
          data.amt9,
          data.amt10,
          data.amt11,
          data.amt12,
          data.amt13,
          data.amt14,
          data.amt15,
          data.amt16,
          data.amt17,
          data.amt18,
          data.amt19,
          data.amt20,
          data.directions,
          data.img,
        ]);
    let menuItem = result.rows[0];

    return menuItem;
  }

// deletes specific menu item from menu
  static async remove(id) {
    const result = await db.query(
          `DELETE
           FROM menu_items
           WHERE id = $1
           RETURNING id`, [id]);
    const menuItem = result.rows[0];

    if (!menuItem) throw new NotFoundError(`No menu: ${id}`);
  }
}

module.exports = MenuItems;
