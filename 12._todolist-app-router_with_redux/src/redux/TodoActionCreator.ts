import { createAction } from "@reduxjs/toolkit";

export const TODO_ACTION = {
  ADD_TODO: "addTodo" as const,
  DELETE_TODO: "deleteTodo" as const,
  TOGGLE_DONE: "toggleDone" as const,
  UPDATE_TODO: "updateTodo" as const,
};

const TodoActionCreator = {
  addTodo: createAction<{ todo: string; desc: string; }>("addTodo"),
  deleteTodo: createAction<{ id: number; }>("deleteTodo"),
  toggleDone: createAction<{ id: number; }>("toggleDone"),
  updateTodo: createAction<{ id: number; todo: string; desc: string; done: boolean; }>("updateTodo"),
};

export default TodoActionCreator;
