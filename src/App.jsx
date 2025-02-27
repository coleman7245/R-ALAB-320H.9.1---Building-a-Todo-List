import './App.css';

import Header from './components/Header';
import ToDoList from './components/ToDoListReducer';

function App() {

  return (
    <div>
      <Header className='header' header='ToDo List' />
      <ToDoList name='todo-list' />
    </div>
  );
};

export default App;
