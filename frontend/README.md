Second final project completed for Springboard bootcamp. Solo, full stack project- responsible for both front and back end development as well as design. Backend developed with Express, created a database with PostgreSQL to store user registration, password, menus, menu items and recipes. Username password encrypted with bcrypt. Frontend developed with React, Bootstrap, HTML, CSS.

*********************************************************************

Title: Menu Builder

Deployed with Surge- https://venomous-boat.surge.sh/

recipeAPI = https://www.themealdb.com/api/json/v1/1/search.php?s=

Menu Builder is a site that searches for recipes or allows you to add your own recipe so you can build custom menus for any event. 

Features: 
Navigation bar with title that links to home page and login or sign up buttons 
Navigation bar if already logged in has links to menus, profile and logout
Register new user to create your own profile
Log In/Out to access your profile with your menus
Profile edit form to update your information
New menu form to add a menu to your account
Add item form to add a menu item to your menu
Search for menu items/recipes to add to your menus
Add your own menu item by entering your own recipe
Delete menu items you no longer want
Delete menus you no longer want

Tests:
Each file has it's own test that can be run with npm test and the file name or npm test to run all tests at once

User Flow:
Begins at the home page with the navigation bar and links to login or sign up
Homepage displays welcome and title with button that takes you to the login form
Login form has link to sign up if you do not already have an account
Sign up form asks for username, password, first name, last name and email with a button to submit
Login form asks for username and password with button to submit
Once logged in, navigation links change to links to your menus, profile and log out 
Main page welcome user to site with their name and a button to their menus
Once user presses button that says "Let's get to it" they are taken to their menus
Page has user's name and lists the menus they've created with a form to add a menu
Add a menu form just asks for the menu event name with button to add menu which will populate on same page under header
Menu is a button that once clicked takes you to that specific menu
Lists all menu items, a button to add an item and a delete icon to delete menu
Menu items are buttons once pushed takes you to recipe card
Recipe card displays recipe name, category type, measurements and ingredients, instructions, recipe image and delete icon to delete menu item
Can use back arrow to return to menu
Once at menu if add item button is pushed it takes you to an add item form or a button to search for recipes 
Add item form asks for item name, category, ingredients and amounts, directions, image and then has a submit item button
Once submit item is pushed user is taken back to the menu where the new item will have populated the menu
If user decides to search for recipe and pushes that button they are taken to a search bar where once they start typing a menu item any results start populating in recipe cards on the page
Once user decides on recipe there is an add item button on each recipe card, when pushed user is taken back to menu with new item populating menu
User can add as many menus and menu items as they like
Once done, user can log out 

API:
Recipe API is listed at top
Created menus database with user, menu and menu items information

Technology:

Backend-
Express
Node
PostgreSQL
Axios
Cors
Bcrypt
Jsonwebtoken
Jsonschema
Supertest

Frontend-
React
React dom
React router dom
Axios
Bootstrap
Google Fonts
Font Awesome




