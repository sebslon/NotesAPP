import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddNote } from "components";
import { NotesContextProvider } from "contexts/notes-context";

describe("<AddNote />", () => {
  it("Should clean textarea after submitting", async () => {
    const { getByRole } = render(
      <NotesContextProvider>
        <AddNote />
      </NotesContextProvider>
    );

    const textarea = await getByRole("textbox") as HTMLTextAreaElement;

    userEvent.type(textarea, "example text");
    expect(textarea.value).toBe("example text");

    userEvent.click(getByRole("button", { name: "Add note"}));
    expect(textarea.value).toBe("");
  });
});
