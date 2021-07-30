import "./styles/single-note.css";

import Markdown from "markdown-to-jsx";
import { useContext } from "react";
import { Button } from "../components/Button/Button";

import { NotesContext } from "../contexts/notes-context";
import { changePath } from "../utils/change-path";

interface SingleNotePageProps {
  id: number;
}

const goToHomePage = () => {
  changePath("/");
};

export const SingleNotePage = ({ id }: SingleNotePageProps) => {
  const { state, dispatch } = useContext(NotesContext);
  const [note] = state.filter((note) => note.id === id);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    dispatch({
      type: "DELETE_NOTE",
      payload: { id },
    });

    changePath("/");
  };

  return note ? (
    <div className="single-note">
      <div className="single-note__buttons">
        <Button className="primary-btn" onClick={goToHomePage}>
          Go back
        </Button>
        <Button className="delete-btn" onClick={handleDelete}>
          Delete note
        </Button>
      </div>

      <div className="single-note__content">
        <Markdown className="">{note.text}</Markdown>
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
