import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../testUtils";
import ItemSearch from "./ItemSearch";

it("renders without crashing", function () {
    render(
        <MemoryRouter>
          <UserProvider>
            <ItemSearch />
          </UserProvider>
        </MemoryRouter>,
    );
  });
