import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddNote } from "components";
import { NotesContextProvider } from "contexts/notes-context";

describe("<AddNote />", () => {
  it("Should clean textarea after submitting", () => {
    const { getByTestId } = render(
      <NotesContextProvider>
        <AddNote />
      </NotesContextProvider>
    );

    const textarea = getByTestId("addnote-textarea") as HTMLTextAreaElement;

    userEvent.type(textarea, "example text");
    expect(textarea.value).toBe("example text");

    userEvent.click(getByTestId("addnote-btn"));
    expect(textarea.value).toBe("");
  });
});
