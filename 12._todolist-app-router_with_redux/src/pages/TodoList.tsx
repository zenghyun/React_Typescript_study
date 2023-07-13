import { Link } from "react-router-dom";
import TodoItem from "./TodoItem";
import TodoActionCreator from "../redux/TodoActionCreator";
import { useSelector, useDispatch } from "react-redux";
import { RootStatesType } from "../redux/AppStore";
import { TodoItemType } from "../AppContainer";

type PropsType = {
  todoList: Array<TodoItemType>;
  deleteTodo: (id:number) => void;
  toggleDone: (id: number) => void;
};


const TodoList = ({ todoList, deleteTodo, toggleDone }: PropsType ) => {
  const todoItems = todoList.map((item) => {
    return <TodoItem key={item.id} todoItem={item} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
  });

  return (
    <>
      <div className="row">
        <div className="col p-3">
          <Link className="btn btn-primary" to="/todos/add">
            할 일 추가
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="list-group">{todoItems}</ul>
        </div>
      </div>
    </>
  );
};

// 훅을 이용한 컨테이너 컴포넌트 생성
const TodoListContainer = () => {
  const todoList = useSelector((state: RootStatesType) => state.todos.todoList);
  const dispatch = useDispatch();

  const deleteTodo = (id:number) => {
    dispatch(TodoActionCreator.deleteTodo({ id }));
  };

  const toggleDone = (id:number) => {
    dispatch(TodoActionCreator.toggleDone({ id }));
  };
  
  return <TodoList todoList={todoList} deleteTodo={deleteTodo} toggleDone={toggleDone} />;
};

export default TodoListContainer;
