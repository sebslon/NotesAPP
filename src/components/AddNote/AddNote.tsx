import "./AddNote.css";

import { useContext, useState } from "react";

import { Button } from "../Button/Button";
import { NotesContext } from "../../contexts/notes-context";

export const AddNote = () => {
  const [text, setText] = useState("");
  const { state, dispatch } = useContext(NotesContext);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch({
      type: "ADD_NOTE",
      payload: {
        id: state[state.length - 1]?.id + 1 || 0,
        text,
        date: new Date(),
      },
    });

    setText("");
  };

  return (
    <form className="addnote" onSubmit={handleSubmit}>
      <p>Note</p>
      <textarea
        placeholder="Enter your note.."
        value={text}
        onChange={handleTextChange}
        required
      ></textarea>
      <Button className="primary-btn" type="submit">
        Add note
      </Button>
    </form>
  );
};
