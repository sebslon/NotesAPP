import { AddNote } from "../components/AddNote/AddNote"
import { NotesList } from "../components/NotesList/NotesList"

export const HomePage = () => {
    return (
        <>
            <AddNote />
            <NotesList />
        </>
    )
}
