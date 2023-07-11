import axios from "axios";
import React from "react";

const requestAPI = async () => {
  const url = "/api/todolist_long/gdhong";
  try {
    const response = await axios.get(url, { timeout: 900});
    console.log("# 응답 객체 : ", response);
  } catch (error) {
    console.log("## 다음 오류가 발생했습니다.");
    if( error instanceof Error ) console.log(error.message);
    else console.log(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-floating-promises
requestAPI();

const App = () => {
  return <h2>Console Log를 확인합니다.</h2>;
};

export default App;
