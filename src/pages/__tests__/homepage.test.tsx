import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NotesContextProvider } from "contexts/notes-context";
import { HomePage } from "pages/homepage";

describe("<HomePage />", () => {
  it("Should render AddNote component, and NotesList", () => {
    const { getByTestId } = render(<HomePage />);

    expect(getByTestId("notes-list")).toBeInTheDocument();
    expect(getByTestId("addnote-form")).toBeInTheDocument();
  });

  it("Should render two example notes", () => {
    const { getAllByTestId } = render(<HomePage />);

    const notes = getAllByTestId("note");
    expect(notes.length).toBe(2);
  });

  it("Should add new note when AddNote is submitted with value", () => {
    const { getByTestId, getAllByTestId, getByText } = render(
      <NotesContextProvider>
        <HomePage />
      </NotesContextProvider>
    );

    const textarea = getByTestId("addnote-textarea") as HTMLTextAreaElement;
    let notes = getAllByTestId("note");

    expect(notes.length).toBe(2);

    userEvent.type(textarea, "example text");
    expect(textarea.value).toBe("example text");
    userEvent.click(getByTestId("addnote-btn"));
    expect(textarea.value).toBe("");

    notes = getAllByTestId("note");

    expect(getByText(/example text/i)).toBeInTheDocument();
    expect(notes.length).toBe(3);
  });

  it("Should remove note when delete button is clicked", () => {
    const { getAllByTestId } = render(
      <NotesContextProvider>
        <HomePage />
      </NotesContextProvider>
    );
    let notes = getAllByTestId("note");

    expect(notes.length).toBe(2);

    userEvent.click(getAllByTestId("deletenote-btn")[0]);

    notes = getAllByTestId("note");

    expect(notes.length).toBe(1);
  });
});
