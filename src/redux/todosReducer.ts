import { Actions } from "./actions";

export type TodosState = {
  todos: Todo[];
};

const initialState: TodosState = { todos: [] };

const todosReducer = (
  state: TodosState = initialState,
  action: Actions
): TodosState => {
  switch (action.type) {
    case "ADD_TODO": {
      const { todo } = action.payload;
      return {
        ...state,
        todos: [...state.todos, todo],
      };
    }

    case "REMOVE_TODO": {
      const { todoId } = action.payload;
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== todoId),
      };
    }

    case "EDIT_TODO": {
      const { todoId, content } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, content };
          }
          return todo;
        }),
      };
    }

    case "TOGGLE_TODO": {
      const { todoId } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export default todosReducer;
