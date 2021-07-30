import { render } from "@testing-library/react";

import { Header } from "components";

describe("<Header />", () => {
  it("Renders <Header /> with name of the app", () => {
    const { getByText, getByTestId } = render(<Header />);

    expect(getByTestId("header")).toBeInTheDocument();
    expect(getByText(/Notes APP/i)).toBeInTheDocument();
  });
});
