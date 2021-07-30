import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Note } from "components";

describe("<Note />", () => {
  it("Should render <Note /> with text, date and delete button", () => {
    const { getByTestId } = render(
      <Note text="text" date={new Date()} id={1} />
    );

    expect(getByTestId("note")).toBeInTheDocument();
    expect(getByTestId("note-text")).toBeInTheDocument();
    expect(getByTestId("note-date")).toBeInTheDocument();
    expect(getByTestId("deletenote-btn")).toBeInTheDocument();
  });

  it("Should redirect to single note page when date is clicked", () => {
    const { getByTestId } = render(
      <Note text="text" date={new Date()} id={1} />
    );

    userEvent.click(getByTestId("note-date"));

    expect(window.location.pathname).toBe("/notes/1");
  });
});
