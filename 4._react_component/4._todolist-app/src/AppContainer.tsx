import { produce } from "immer";
import { useState } from "react";
import App from "./components/App";

export type TodoListItemType = {
 no: number;
 todo: string; 
 done: boolean;
};

const AppContainer = () => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([
    { no: 1, todo: "React 학습", done: true },
    { no: 2, todo: "TypeScript 학습", done: true },
    { no: 3, todo: "React with TypeScript 학습", done: false },
    { no: 4, todo: "Next js 학습", done: false },
  ]);

  const addTodo = (todo: string) => {
    const newTodoList = produce( todoList, draft => {
        draft.push({ no: new Date().getTime(), todo: todo, done: false});
    });
    setTodoList(newTodoList);
  };

  const deleteTodo = (no: number) => {
    // const newTodoList = todoList.filter((todo) => todo.no !== no);
    const index = todoList.findIndex( todo => todo.no === no); 
    const newTodoList = produce(todoList, draft => {
        draft.splice(index, 1);
    });
    setTodoList(newTodoList);
  };

  const toggleDone = (no: number) => {
    // const newTodoList = todoList.map((todo) =>
    //   todo.no === no ? { ...todo, done: !todo.done } : todo
    // );
    const index = todoList.findIndex( todo => todo.no === no); 
    const newTodoList = produce(todoList, draft => {
        draft[index].done = !draft[index].done;
    });
    setTodoList(newTodoList);
  };

  return (
    <App
      todoList={todoList}
      addTodo={addTodo}
      deleteTodo={deleteTodo}
      toggleDone={toggleDone}
    />
  );
};

export default AppContainer;
