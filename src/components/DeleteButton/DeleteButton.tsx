import { useContext } from "react";

import { Button } from "components/Button/Button";
import { NotesContext } from "contexts/notes-context";
import { changePath } from "utils/change-path";

interface DeleteButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  noteId: number;
}

export const DeleteButton: React.FC<DeleteButtonProps> = ({
  children,
  noteId,
  ...rest
}) => {
  const { dispatch } = useContext(NotesContext);

  const handleDelete: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    dispatch({
      type: "DELETE_NOTE",
      payload: { id: noteId },
    });

    if (window.location.pathname !== "/") {
      changePath("/");
    }
  };

  return (
    <Button onClick={handleDelete} data-testid="deletenote-btn" {...rest}>
      {children}
    </Button>
  );
};
