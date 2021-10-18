
CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1)
);

CREATE TABLE menus (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25)
    REFERENCES users ON DELETE CASCADE,
    menu_event TEXT NOT NULL
);

CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    menu_id INTEGER NOT NULL REFERENCES menus,
    item_name TEXT NOT NULL,
    category TEXT NOT NULL,
    ing1 TEXT NOT NULL,
    ing2 TEXT,
    ing3 TEXT,
    ing4 TEXT,
    ing5 TEXT,
    ing6 TEXT,
    ing7 TEXT,
    ing8 TEXT,
    ing9 TEXT,
    ing10 TEXT,
    ing11 TEXT,
    ing12 TEXT,
    ing13 TEXT,
    ing14 TEXT,
    ing15 TEXT,
    ing16 TEXT,
    ing17 TEXT,
    ing18 TEXT,
    ing19 TEXT,
    ing20 TEXT,
    amt1 TEXT NOT NULL,
    amt2 TEXT,
    amt3 TEXT,
    amt4 TEXT,
    amt5 TEXT,
    amt6 TEXT,
    amt7 TEXT,
    amt8 TEXT,
    amt9 TEXT,
    amt10 TEXT,
    amt11 TEXT,
    amt12 TEXT,
    amt13 TEXT,
    amt14 TEXT,
    amt15 TEXT,
    amt16 TEXT,
    amt17 TEXT,
    amt18 TEXT,
    amt19 TEXT,
    amt20 TEXT,
    directions TEXT NOT NULL,
    img TEXT
);


