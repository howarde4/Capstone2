import React from "react";
import { render } from "@testing-library/react";
import MenuCard from "./MenuCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", function () {
    const event = "Test Event";
    const user = "testUser1";
    const id = 1;
    const key = 1;

  const { asFragment } = render(
      <MemoryRouter>
        <MenuCard menu_event={event} username={user} id={id} key={key} />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});

