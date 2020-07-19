import { TodosState } from "./todosReducer";

export const todosSelector = (state: TodosState): Todo[] => state.todos;
