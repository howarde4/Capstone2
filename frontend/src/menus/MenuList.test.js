import React from "react";
import { render } from "@testing-library/react";
import Menus from "./MenuList";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../testUtils";


it("renders without crashing", function () {
    render(
        <MemoryRouter>
          <UserProvider>
            <Menus />
          </UserProvider>
        </MemoryRouter>,
    );
  });
  
