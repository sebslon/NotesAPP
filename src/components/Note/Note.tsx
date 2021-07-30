import "./Note.css";

import { FormEvent, useContext } from "react";
import Markdown from "markdown-to-jsx";

import { Link } from "../Link/Link";
import { NotesContext } from "../../contexts/notes-context";
import { changePath } from "../../utils/change-path";

interface NoteProps {
  id: number;
  text: string;
  date: Date;
}

export const Note = ({ text, date, id }: NoteProps) => {
  const { dispatch } = useContext(NotesContext);

  const handleDelete = (e: FormEvent) => {
    e.preventDefault();

    if (window.location.pathname !== "/") {
      changePath("/");
    }

    dispatch({
      type: "DELETE_NOTE",
      payload: { id },
    });
  };

  return (
    <div className="note">
      <Markdown>{text}</Markdown>
      <button onClick={handleDelete}>Delete note</button>
      <Link href={`/notes/${id}`}>
        <span className="note__date">{date.toLocaleDateString()}</span>
      </Link>
    </div>
  );
};
