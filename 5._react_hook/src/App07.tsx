import { useMemo, useState, useCallback } from "react";

type TodoListItemType = {
  id: number;
  todo: string;
};

const getTodoListCount = (todoList: Array<TodoListItemType>) => {
  console.log("## TodoList 카운트 : : ", todoList.length);
  return todoList.length;
};

const App = () => {
  const [todoList, setTodoList] = useState<Array<TodoListItemType>>([]);
  const [todo, setTodo] = useState<string>("");

  const addTodo = useCallback(
    (todo: string) => {
      const newTodoList = [
        ...todoList,
        { id: new Date().getTime(), todo: todo },
      ];
      setTodoList(newTodoList);
      setTodo("");
    },
    [todoList]
  );

  const deleteTodo = useCallback(
    (id: number) => {
      const index = todoList.findIndex((item) => item.id === id);
      const newTodoList = [...todoList];
      newTodoList.splice(index, 1);
      setTodoList(newTodoList);
    },
    [todoList]
  );

  const memoizedCount = useMemo<number>(
    () => getTodoListCount(todoList),
    [todoList]
  );

  return (
    <div className="boxStyle">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => addTodo(todo)}>Add Todo</button>
      <br />
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo}&nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <div>todo 개수 : {memoizedCount}</div>
    </div>
  );
};

export default App;
