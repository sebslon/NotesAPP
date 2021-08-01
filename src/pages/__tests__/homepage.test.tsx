import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NotesContextProvider } from "contexts/notes-context";
import { HomePage } from "pages/homepage";

describe("<HomePage />", () => {
  it("Should render AddNote component, and NotesList", () => {
    const { getByTestId, getByRole } = render(<HomePage />);

    expect(getByTestId("notes-list")).toBeInTheDocument();
    expect(getByRole("button", { name: /add note/i})).toBeInTheDocument();
    expect(getByRole("textbox")).toBeInTheDocument();
  });

  it("Should render two example notes", () => {
    const { getAllByTestId } = render(<HomePage />);

    const notes = getAllByTestId("note");
    expect(notes.length).toBe(2);
  });

  it("Should add new note when AddNote is submitted with value", () => {
    const { getByTestId, getAllByTestId, getByText, getByRole } = render(
      <NotesContextProvider>
        <HomePage />
      </NotesContextProvider>
    );

    const textarea = getByTestId("addnote-textarea") as HTMLTextAreaElement;
    let notes = getAllByTestId("note");

    expect(notes.length).toBe(2);

    userEvent.type(textarea, "example text");
    userEvent.click(getByRole("button", { name: /add note/i}));

    notes = getAllByTestId("note");

    expect(getByText(/example text/i)).toBeInTheDocument();
    expect(notes.length).toBe(3);
  });

  it("Should remove note when delete button is clicked", () => {
    const { getAllByTestId, getAllByRole } = render(
      <NotesContextProvider>
        <HomePage />
      </NotesContextProvider>
    );
    let notes = getAllByTestId("note");

    expect(notes.length).toBe(2);

    userEvent.click(getAllByRole("button", { name: /delete note/i})[0]);

    notes = getAllByTestId("note");

    expect(notes.length).toBe(1);
  });
});
