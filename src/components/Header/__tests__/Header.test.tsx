import { render } from '@testing-library/react';

import { Header } from "../Header";

describe("<Header />", () => {
  it("Renders <Header /> with name of the app", () => {
    const { getByText } = render(<Header />);

    expect(getByText(/Notes APP/i)).toBeInTheDocument();
  });
})

