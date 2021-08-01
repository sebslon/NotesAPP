import { render } from "@testing-library/react";

import { Header } from "components";

describe("<Header />", () => {
  it("Renders <Header /> with name of the app", () => {
    const { getByText, getByRole } = render(<Header />);

    expect(getByRole("banner")).toBeInTheDocument();
    expect(getByText(/Notes APP/i)).toBeInTheDocument();
  });
});
