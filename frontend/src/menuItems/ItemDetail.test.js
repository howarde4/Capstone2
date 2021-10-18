import React from "react";
import { render } from "@testing-library/react";
import ItemDetail from "./ItemDetail";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <ItemDetail />
        </UserProvider>
      </MemoryRouter>,
  );
});
