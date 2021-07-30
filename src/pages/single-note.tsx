import { useContext } from "react";

import { Note } from "../components/Note/Note";
import { NotesContext } from "../contexts/notes-context";
import { HomePage } from "./homepage";

interface SingleNotePageProps {
  id: number;
}

export const SingleNotePage = ({ id }: SingleNotePageProps) => {
  const { state } = useContext(NotesContext);
  const [note] = state.filter((note) => note.id === id);

  return note ? <Note text={note.text} date={note.date} id={note.id} /> : <p>Note doesn't exist</p>;
};