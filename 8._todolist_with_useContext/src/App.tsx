import InputTodo from './components/InputTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <div className='container'>
      <div className='card card-body bg-light'>
        <div className='title'>
          :: TodoList App
        </div>
        <div className='card card-default card-borderless'>
          <div className='card-body'>
            <InputTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 