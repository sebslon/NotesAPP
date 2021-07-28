import './App.css';

import AddNote from './components/AddNote/AddNote';
import Header from './components/Header/Header';
import NotesList from './components/NotesList/NotesList';
import { NotesContextProvider } from './contexts/notes-context';

function App() {
  return (
    <>
      <Header />
      <NotesContextProvider>
        <AddNote />
        <NotesList />
      </NotesContextProvider>
    </>
  );
}

export default App;
