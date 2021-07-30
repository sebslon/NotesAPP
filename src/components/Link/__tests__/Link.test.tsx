import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Link } from "components";

describe("<Link />", () => {
  it("Should change location pathname when clicked", () => {
    const { getByText } = render(<Link href="/home">Home</Link>);

    userEvent.click(getByText("Home"));

    expect(window.location.pathname).toBe("/home");
  });
});
