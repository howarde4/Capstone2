import React from "react";
import { render } from "@testing-library/react";
import ItemCard from "./ItemCard";
import { MemoryRouter } from "react-router-dom";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
    const key = 1;
    const item_name = "Test Item";
    const category = "Test Category";
    const ingredients = [{ing: "Test Ingredients", amount: "Test Amount"}]
    const directions = "Test Directions"
    const img = "Test Image"

  const { asFragment } = render(
      <MemoryRouter>
        <UserProvider>
            <ItemCard key={key} item_name={item_name} category={category} ingredients={ingredients} directions={directions} img={img} />
        </UserProvider>
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
