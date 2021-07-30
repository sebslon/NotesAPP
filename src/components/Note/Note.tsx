import "./Note.css";

import { useContext } from "react";
import Markdown from "markdown-to-jsx";

import { Link } from "../Link/Link";
import { NotesContext } from "../../contexts/notes-context";
import { changePath } from "../../utils/change-path";
import { Button } from "../Button/Button";

interface NoteProps {
  id: number;
  text: string;
  date: Date;
}

export const Note = ({ text, date, id }: NoteProps) => {
  const { dispatch } = useContext(NotesContext);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
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
      <Button onClick={handleDelete} className="note__delete-btn">Delete note</Button>
      <Link href={`/notes/${id}`}>
        <span className="note__date">{date.toLocaleDateString()}</span>
      </Link>
    </div>
  );
};
