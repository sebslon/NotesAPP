import React, { createContext, useReducer } from "react";

import { lorem } from "../utils/constants";

interface Note {
  id: number;
  text: string;
  date: Date;
}

type ActionType =
  | { type: "ADD_NOTE"; payload: Note }
  | { type: "DELETE_NOTE"; payload: { id: number } };

const initialState: Note[] = [
  {
    id: 0,
    text: "This is your example note. You can delete it or go to single note view by clicking on it's date.",
    date: new Date(),
  },
  { id: 1, text: lorem, date: new Date() },
];

export const NotesContext = createContext<{
  state: Note[];
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: Note[], action: ActionType) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload.id);
    default:
      return state;
  }
};

export const NotesContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
