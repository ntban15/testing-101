import { Actions } from "./actions";
import todosReducer from "./todosReducer";

const mockTodo1: Todo = {
  id: "1234",
  content: "haha",
  completed: false,
};

const mockTodo2: Todo = {
  id: "12345",
  content: "hehe",
  completed: false,
};

const mockTodo3: Todo = {
  id: "123456",
  content: "hihi",
  completed: false,
};

describe("todosReducer", () => {
  it("should add new todo on ADD_TODO", () => {
    const addTodoAction: Actions = {
      type: "ADD_TODO",
      payload: {
        todo: mockTodo1,
      },
    };

    const initialState = { todos: [] };
    const expectedState = { todos: [mockTodo1] };

    expect(todosReducer(initialState, addTodoAction)).toEqual(expectedState);
  });

  it("should remove a todo on REMOVE_TODO", () => {
    const removeTodoAction: Actions = {
      type: "REMOVE_TODO",
      payload: {
        todoId: mockTodo1.id,
      },
    };

    const initialState = { todos: [mockTodo1, mockTodo2] };
    const expectedState = { todos: [mockTodo2] };

    expect(todosReducer(initialState, removeTodoAction)).toEqual(expectedState);
  });

  it("should edit a todo on EDIT_TODO", () => {
    const editTodoAction: Actions = {
      type: "EDIT_TODO",
      payload: {
        todoId: mockTodo1.id,
        content: "edited todo",
      },
    };

    const editedTodo: Todo = { ...mockTodo1, content: "edited todo" };

    const initialState = { todos: [mockTodo2, mockTodo1, mockTodo3] };
    const expectedState = { todos: [mockTodo2, editedTodo, mockTodo3] };

    expect(todosReducer(initialState, editTodoAction)).toEqual(expectedState);
  });

  it("should toggle a todo completed state on TOGGLE_TODO", () => {
    const toggleTodoAction: Actions = {
      type: "TOGGLE_TODO",
      payload: {
        todoId: mockTodo2.id,
      },
    };

    const toggledTodo: Todo = { ...mockTodo2, completed: true };
    const toggledAgainTodo: Todo = { ...toggledTodo, completed: false };

    const initialState = { todos: [mockTodo1, mockTodo2, mockTodo3] };
    const expectedState = { todos: [mockTodo1, toggledTodo, mockTodo3] };
    const expectedState2 = { todos: [mockTodo1, toggledAgainTodo, mockTodo3] };

    expect(todosReducer(initialState, toggleTodoAction)).toEqual(expectedState);
    expect(todosReducer(expectedState, toggleTodoAction)).toEqual(
      expectedState2
    );
  });
});
