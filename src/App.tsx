import "./App.css";

import { HomePage } from "./pages/homepage";
import { SingleNotePage } from "./pages/single-note";
import { Header } from "./components/Header/Header";
import { Route } from "./components/Route";
import { usePath } from "./hooks/use-path";
import { NotesContextProvider } from "./contexts/notes-context";

function App() {
  const { currentPath } = usePath();

  return (
    <>
      <Header />
      <NotesContextProvider>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path={`/notes/${currentPath.slice(7)}`}>
          <SingleNotePage id={+currentPath.slice(7)} />
        </Route>
      </NotesContextProvider>
    </>
  );
}

export default App;
