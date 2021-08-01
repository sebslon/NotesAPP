import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SingleNotePage } from "pages/single-note";
import { NotesContextProvider } from "contexts/notes-context";

describe("<SingleNotePage />", () => {
  it("Should render a specified note, with buttons to delete and go back", () => {
    const { getByText, getByTestId, getByRole } = render(<SingleNotePage id={0} />);

    expect(getByRole("button", { name: /delete note/i})).toBeInTheDocument();
    expect(getByRole("button", { name: /go back/i})).toBeInTheDocument();
    expect(getByText(/example note/i)).toBeInTheDocument();
    expect(getByTestId('single-note')).toBeInTheDocument();
  });

  it("After deleting - should change path to homepage, note should be deleted", () => {
    const { queryByText, getByRole } = render(
      <NotesContextProvider>
        <SingleNotePage id={0} />
      </NotesContextProvider>
    );

    expect(queryByText(/example note/i)).toBeInTheDocument();

    userEvent.click(getByRole("button", { name: /delete note/i}));

    expect(window.location.pathname).toBe("/");
    expect(queryByText(/example note/i)).toBeNull();
  });

  it("Renders not found component if given note doesn't exist", () => {
    const notExistingNoteId = 123;
    const { getByTestId, getByRole } = render(<SingleNotePage id={notExistingNoteId} />);

    expect(getByTestId('not-found')).toBeInTheDocument();
    expect(getByRole("button", { name: /go back to homepage/i})).toBeInTheDocument();
  })
});
