\echo 'Delete and recreate menus db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE menus;
CREATE DATABASE menus;
\connect menus

\i menus-schema.sql
\i menus-seed.sql

\echo 'Delete and recreate menus_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE menus_test;
CREATE DATABASE menus_test;
\connect menus_test

\i menus-schema.sql
