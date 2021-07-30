import "./Note.css";

import { useContext } from "react";
import Markdown from "markdown-to-jsx";

import { Button } from "../Button/Button";
import { Link } from "../Link/Link";
import { NotesContext } from "../../contexts/notes-context";

interface NoteProps {
  id: number;
  text: string;
  date: Date;
}

export const Note = ({ text, date, id }: NoteProps) => {
  const { dispatch } = useContext(NotesContext);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    dispatch({
      type: "DELETE_NOTE",
      payload: { id },
    });
  };

  return (
    <div className="note">
      <div className="note__content">
        <Markdown>{text}</Markdown>
        <Link href={`/notes/${id}`}>
          <span className="note__date">{date.toLocaleDateString()}</span>
        </Link>
      </div>
      <Button onClick={handleDelete} className="delete-btn note__delete-btn">
        Delete note
      </Button>
    </div>
  );
};
