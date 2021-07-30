import "./NotesList.css";

import { useContext } from "react";

import { Note } from "../Note/Note";
import { NotesContext } from "../../contexts/notes-context";

export const NotesList = () => {
  const { state } = useContext(NotesContext);

  const sorted = state
    .slice()
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="notes_list">
      <p className="notes-list__title">Latest Notes</p>
      {sorted.map((note) => (
        <Note key={note.id} text={note.text} date={note.date} id={note.id} />
      ))}
    </div>
  );
}
