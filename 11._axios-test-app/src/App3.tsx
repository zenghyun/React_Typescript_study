import axios from "axios";
import React from "react";

const requestAPI = async () => {
  const url = "/api/todolist/gdhong";
  const response = await axios.get(url, {
    timeout: 2000,
    headers: { Authorization : "Bearer xxxxxxxx"}
  });
  console.log("# 응답 객체 : ", response);
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
requestAPI();

const App = () => {
  return <h2>Console Log를 확인합니다.</h2>;
};

export default App;
