import { Actions } from "./actions";

export type TodosState = {};

const initialState: TodosState = {};

const todosReducer = (
  state: TodosState = initialState,
  action: Actions
): TodosState => {
  return state;
};

export default todosReducer;
