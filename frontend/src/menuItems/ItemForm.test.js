import React from "react";
import { render } from "@testing-library/react";
import ItemForm from "./ItemForm";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../testUtils";

it("renders without crashing", function () {
    render(
        <MemoryRouter>
          <UserProvider>
            <ItemForm />
          </UserProvider>
        </MemoryRouter>,
    );
  });
