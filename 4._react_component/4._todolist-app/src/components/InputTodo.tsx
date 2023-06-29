import React, { useState } from "react";

type InputTodoProps = {
  addTodo: (todo: string) => void;
};

const InputTodo = (props: InputTodoProps) => {
  const [todo, setTodo] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addHandler = () => {
    if(todo.trim().length === 0) {
        return;
    }
    props.addTodo(todo);
    setTodo("");
  };

  const enterInput = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") addHandler();
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group">
          <input
            id="msg"
            type="text"
            className="form-control"
            name="msg"
            placeholder="할 일을 여기에 입력"
            onChange={changeHandler}
            value={todo}
            onKeyUp={enterInput}
          />
          <span
            className="btn btn-primary input-group-addon"
            onClick={addHandler}
          >
            추가
          </span>
        </div>
      </div>
    </div>
  );
};

export default InputTodo;
