import React from "react";
import { render } from "@testing-library/react";
import MenuForm from "./newMenuForm";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../testUtils";


it("renders without crashing", function () {
    render(
        <MemoryRouter>
          <UserProvider>
            <MenuForm />
          </UserProvider>
        </MemoryRouter>,
    );
  });
  
