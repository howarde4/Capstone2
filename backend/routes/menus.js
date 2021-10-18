"use strict";

const jsonschema = require("jsonschema");
const express = require("express");
const { BadRequestError } = require("../expressError");
const Menu = require("../models/menu");
const MenuItems = require("../models/menuItems");
const Recipe = require("../models/recipe");
const menuNewSchema = require("../schemas/menusNew.json");
const menuNewItemSchema = require("../schemas/menusNewItem.json");

const router = express.Router({ mergeParams: true });

// post creates new menu
router.post("/:username", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, menuNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const menu = await Menu.create(req.body);
    return res.status(201).json({ menu });
  } catch (err) {
    return next(err);
  }
});

// gets all menus for user
router.get("/:username", async function (req, res, next) {
  const {username} = req.params;

  try {
    const menus = await Menu.getAll(username);
    return res.json({ menus });
  } catch (err) {
    return next(err);
  }
});

// gets specific menu items
router.get("/:username/:id", async function (req, res, next) {
  try {
    const menu = await Menu.get(req.params.id);
    return res.json({ menu });
  } catch (err) {
    return next(err);
  }
});

// post create new menu item
router.post("/:username/:id/addItem", async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, menuNewItemSchema);
    if (!validator.valid) {
      const errs = validator.errors.map(e => e.stack);
      throw new BadRequestError(errs);
    }

    const menu_item = await MenuItems.create(req.body);
    return res.status(201).json({ menu_item });
  } catch (err) {
    return next(err);
  }
});

// get specific item from menu
router.get("/:username/:id/:item", async function (req, res, next) {
  try {
    const {id, item} = req.params;
    const items = await Menu.getItem(item);
    return res.json({ items });
  } catch (err) {
    return next(err);
  }
});

// delete removes specific menu item
router.delete("/:username/:id/:item", async function (req, res, next) {
  try {
    const {item} = req.params;
    await MenuItems.remove(item);
    return res.json({ deleted: +req.params.item });
  } catch (err) {
    return next(err);
  }
});

// delete removes specific menu
router.delete("/:username/:id", async function (req, res, next) {
  try {
    await Menu.remove(req.params.id);
    return res.json({ deleted: req.params.id });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
