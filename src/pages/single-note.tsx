import "./styles/single-note.css";

import Markdown from "markdown-to-jsx";
import { useContext } from "react";

import { Button, DeleteButton } from "components";
import { NotesContext } from "contexts/notes-context";
import { changePath } from "utils/change-path";

interface SingleNotePageProps {
  id: number;
}

const goToHomePage = () => {
  changePath("/");
};

export const SingleNotePage = ({ id }: SingleNotePageProps) => {
  const { state } = useContext(NotesContext);
  const [note] = state.filter((note) => note.id === id);

  return note ? (
    <div className="single-note">
      <div className="single-note__buttons">
        <Button className="primary-btn" onClick={goToHomePage}>
          Go back
        </Button>
        <DeleteButton className="delete-btn" noteId={id}>
          Delete note
        </DeleteButton>
      </div>

      <div className="single-note__content">
        <Markdown>{note.text}</Markdown>
        <span className="single-note__date">
          {note.date.toLocaleDateString()}
        </span>
      </div>
    </div>
  ) : (
    <NoteNotFound id={id} />
  );
};

const NoteNotFound = ({ id }: { id: number | string }) => {
  return (
    <>
      <div className="note__not-found">
        <p>Note with ID: {id} doesn't exist :(</p>
        <button onClick={goToHomePage}>Go back to homepage</button>
      </div>
    </>
  );
};
