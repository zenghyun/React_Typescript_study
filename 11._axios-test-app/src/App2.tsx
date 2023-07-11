/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";

type TodoType = { id: number; todo: string; done: boolean; desc: string };

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/";

// 4건의 목록을 조회한 후 첫 번째, 두 번째 Todo를 순차적으로 순회하며 조회하기
const requestAPI = async () => {
  let todo: TodoType;
  let todoList: Array<TodoType>;

  let response = await axios.get(listUrl);
  // eslint-disable-next-line prefer-const
  todoList = response.data;
  console.log("# TodoList : ", todoList);

  for (let i = 0; i < todoList.length; i++) {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    response = await axios.get(todoUrlPrefix + todoList[i].id);
    console.log(`## ${i + 1} 번째 Todo : `, response.data);
  }
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
requestAPI();

const App = () => {
  return <h2>Console.log를 확인하세요</h2>;
};

export default App;
