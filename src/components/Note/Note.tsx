import "./Note.css";

import Markdown from "markdown-to-jsx";

import { Link } from "components";
import { DeleteButton } from "components";

interface NoteProps {
  id: number;
  text: string;
  date: Date;
}

export const Note = ({ text, date, id }: NoteProps) => {
  return (
    <div className="note" data-testid="note">
      <div className="note__content">
        <Markdown data-testid="note-text">{text}</Markdown>
        <Link href={`/notes/${id}`}>
          <span className="note__date" data-testid="note-date">
            {date.toLocaleDateString()}
          </span>
        </Link>
      </div>
      <DeleteButton
        className="delete-btn note__delete-btn"
        noteId={id}
      >
        Delete note
      </DeleteButton>
    </div>
  );
};
