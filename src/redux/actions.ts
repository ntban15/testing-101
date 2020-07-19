export type Actions =
  | { type: "ADD_TODO"; payload: { todo: Todo } }
  | { type: "REMOVE_TODO"; payload: { todoId: string } }
  | { type: "EDIT_TODO"; payload: { todoId: string; content: string } }
  | { type: "TOGGLE_TODO"; payload: { todoId: string } };
