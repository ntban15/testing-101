export type Actions =
  | { type: "ADD_TODO"; payload: { todo: Todo } }
  | { type: "REMOVE_TODO"; payload: { todoId: string } }
  | { type: "EDIT_TODO"; payload: { todoId: string; content: string } }
  | { type: "TOGGLE_TODO"; payload: { todoId: string } };

export const addTodoAction = (content: string): Actions => ({
  type: "ADD_TODO",
  payload: {
    todo: {
      id: new Date().toString(),
      content,
      completed: false,
    },
  },
});

export const removeTodoAction = (todoId: string): Actions => ({
  type: "REMOVE_TODO",
  payload: { todoId },
});

export const editTodoAction = (todoId: string, content: string): Actions => ({
  type: "EDIT_TODO",
  payload: { todoId, content },
});

export const toggleTodoAction = (todoId: string): Actions => ({
  type: "TOGGLE_TODO",
  payload: { todoId },
});
