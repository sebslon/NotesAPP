import { useContext } from 'react';
import { NotesContext } from '../../contexts/notes-context';
import Note from '../../Note/Note';

import './NotesList.css';

export default function NotesList() {
    const { state } = useContext(NotesContext);
    
    return (
        <div className="notes_list">
            <p className="notes-list__title">Latest Notes</p>
            {state.map(note => <Note key={note.id} text={note.text} date={note.date} id={note.id}/>)}
        </div>
    )
}
