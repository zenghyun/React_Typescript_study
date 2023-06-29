import React, { useState } from "react";
import Calc from "./Calc";

function App() {
  const [x, setX] = useState<number>(80);
  const [y, setY] = useState<number>(200);
  const [oper, setOper] = useState<string>("+");

  return (
    <>
    <Calc x={x} y={y} oper={oper}/>
    </>
  );
}

export default App;
