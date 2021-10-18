import React from "react";
import { render } from "@testing-library/react";
import Menu from "./MenuDetail";
import { MemoryRouter, Route } from "react-router-dom";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <Menu />
        </UserProvider>
      </MemoryRouter>,
  );
});
