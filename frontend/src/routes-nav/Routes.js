import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../homepage/Homepage";
import MenuList from "../menus/MenuList";
import MenuDetail from "../menus/MenuDetail";
import ItemDetail from "../menuItems/ItemDetail";
import ItemForm from "../menuItems/ItemForm";
import LoginForm from "../auth/LoginForm";
import ProfileForm from "../profiles/ProfileForm";
import SignupForm from "../auth/SignupForm";
import PrivateRoute from "./PrivateRoute";
import ItemSearch from "../menuItems/ItemSearch";

function Routes({ login, signup }) {
  console.debug(
      "Routes",
      `login=${typeof login}`,
      `register=${typeof register}`,
  );

  return (
      <div className="pt-5">
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <PrivateRoute exact path="/menus/:username">
            <MenuList />
          </PrivateRoute>

          <PrivateRoute exact path="/menus/:username/:id">
            <MenuDetail />
          </PrivateRoute>

          <PrivateRoute exact path="/menus/:username/:id/addItem">
            <ItemForm />
          </PrivateRoute>

          <PrivateRoute exact path="/menus/:username/:id/recipe">
            <ItemSearch />
          </PrivateRoute>

          <PrivateRoute exact path="/menus/:username/:id/:item">
            <ItemDetail />
          </PrivateRoute>

          <PrivateRoute path="/profile">
            <ProfileForm />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;
