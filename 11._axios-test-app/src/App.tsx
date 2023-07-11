import axios from "axios";

type TodoType = { id: number; todo: string; done: boolean; desc: string; };

const listUrl = "/api/todolist_long/gdhong";
const todoUrlPrefix = "/api/todolist_long/gdhong/"; 

// 4건의 목록을 조회한 후 첫 번째 할 일만 한 번 더 조회하기 
const requestAPI = () => {
  let todoList: Array<TodoType> = [];
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  axios.get(listUrl)
  .then((response) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    todoList = response.data;
    console.log("# TodoList : ", todoList);
    return todoList[0].id;
  })
  .then(id => {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    return axios.get(todoUrlPrefix + id);
  })
  .then(response => {
    console.log("## 첫 번째 Todo : ", response.data);
    return todoList[1].id;
  })
  .then(id => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises, @typescript-eslint/restrict-plus-operands
    axios.get(todoUrlPrefix + id).then(response => {
      console.log("## 두 번째 Todo : ", response.data);
    });
  });
};
requestAPI();

// type Props = {};

const App = () => {
  return <h2>Console.log를 확인하세요</h2>;
};

export default App;
