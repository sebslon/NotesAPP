import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SingleNotePage } from "pages/single-note";
import { NotesContextProvider } from "contexts/notes-context";

describe("<SingleNotePage />", () => {
  it("Should render a specified note if it exists", () => {
    const { getByText, getByTestId } = render(<SingleNotePage id={0} />);

    expect(getByText(/example note/i)).toBeInTheDocument();
    expect(getByTestId('single-note')).toBeInTheDocument();
  });

  it("After deleting - should change path to homepage, note should be deleted", () => {
    const { queryByText, getByTestId } = render(
      <NotesContextProvider>
        <SingleNotePage id={0} />
      </NotesContextProvider>
    );

    expect(queryByText(/example note/i)).toBeInTheDocument();

    userEvent.click(getByTestId("deletenote-btn"));

    expect(window.location.pathname).toBe("/");
    expect(queryByText(/example note/i)).toBeNull();
  });

  it("Renders not found component if given note doesn't exist", () => {
    const notExistingNoteId = 123;
    const { getByTestId } = render(<SingleNotePage id={notExistingNoteId} />);

    expect(getByTestId('not-found')).toBeInTheDocument();
  })
});
