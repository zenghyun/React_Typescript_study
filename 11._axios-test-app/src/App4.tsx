import axios from "axios";
import React from "react";

const requestAPI = async () => {
  const url = "/api/todolist/gdhong";
  const data = { todo: "윗몸일으키기 3세트", desc: "너무 빠르지 않게..." };
  const response = await axios.post(url, data);
  console.log(response.data);
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
requestAPI();

const App = () => {
  return <h2>Console Log를 확인합니다.</h2>;
};

export default App;
