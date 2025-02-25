import './App.css';

import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {

  return (
    <div>
      <Header header='ToDo List' />
      <ToDoList />
    </div>
  );
};

export default App;
