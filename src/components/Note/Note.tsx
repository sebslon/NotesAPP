import './Note.css';
import { FormEvent, useContext } from 'react';

import { NotesContext } from '../../contexts/notes-context';

interface NoteProps {
    text: string;
    date: Date;
    id: number;
}

export default function Note({ text, date, id }: NoteProps) {
    const { dispatch } = useContext(NotesContext);

    const handleClick = (e: FormEvent) => {
        e.preventDefault();

        dispatch({
            type: "DELETE_NOTE",
            payload: { id }
        })
    };

    return (
        <div className="note">
            <p>{text}</p>
            <button onClick={handleClick}>Delete note</button>
            <span className="note__date">{date.toLocaleDateString()}</span>
        </div>
    );
};
