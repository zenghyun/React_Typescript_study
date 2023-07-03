import { useState, useReducer } from "react";
import { todoItemTypes, TodoReducer, TodoCreator } from "./TodoReducer";

const idNow = new Date().getTime();

const initialTodoItems: Array<todoItemTypes> = [
  { id: idNow, todo: "React" },
  { id: idNow + 1, todo: "TypeScript" },
  { id: idNow + 2, todo: "React with TypeScript" },
];

const App04 = () => {
  const [todoList, dispatchTodoList] = useReducer(
    TodoReducer,
    initialTodoItems
  );
  const [todo, setTodo] = useState<string>("");

  const addTodo = () => {
    dispatchTodoList(TodoCreator.addTodo(todo));
    setTodo("");
  };

  const deleteTodo = (id: number) => {
    dispatchTodoList(TodoCreator.deleteTodo(id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={addTodo}>할 일 추가</button>
      <ul>
        {todoList.map((item) => (
          <li key={item.id}>
            {item.todo} &nbsp;&nbsp;
            <button onClick={() => deleteTodo(item.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App04;
