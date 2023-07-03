import { produce } from "immer";

export type todoItemTypes = {
  id: number;
  todo: string;
};

export const TODO_ACTIONS = {
  ADD: "addTodo" as const,
  DELETE: "deleteTodo" as const,
};

export const TodoCreator = {
  addTodo: (todo: string) => ({
    type: TODO_ACTIONS.ADD,
    payload: { todo: todo },
  }),
  deleteTodo: (id: number) => ({
    type: TODO_ACTIONS.DELETE,
    payload: { id: id },
  }),
};

export type TodoActionTypes =
  | ReturnType<typeof TodoCreator.addTodo>
  | ReturnType<typeof TodoCreator.deleteTodo>;


  export const TodoReducer = (state: Array<todoItemTypes>, action: TodoActionTypes) => {
    switch(action.type) {
        case TODO_ACTIONS.ADD :
            return produce(state, (draft: Array<todoItemTypes>) => {
                draft.push({ id: new Date().getTime(), todo: action.payload.todo});
            });
            case TODO_ACTIONS.DELETE :
                // eslint-disable-next-line no-case-declarations
                const index = state.findIndex(item => item.id === action.payload.id);
                return produce(state, (draft: Array<todoItemTypes>) => {
                    draft.splice(index, 1);
                });
    }
  };