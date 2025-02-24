import './App.css';
import {useState} from 'react';

import Header from './components/Header';
import ToDoList from './components/ToDoList';

import initialState from './data/data.js';

function App() {
  const [todos, setToDos] = useState([]);
  const [input, setInput] = useState('');
  const [editEnabled, setEditEnabled] = useState(false);

  function addTask() {

  }

  function deleteTask() {

  }

  function editTask(id) {
    console.log(event.target)
    setEditEnabled(true)
  }

  function saveTask(id, event) {
    // let newTodos = [...todos];
    // let todoEdit = newTodos.find((element) => id === element.id);
    // todoEdit.name = event.target.value;
    // newTodos.splice()

    setEditEnabled(false)
  }

  return (
    <div>
      <Header header='ToDo List' />
      <ToDoList 
        todos={initialState} 
        addTask={addTask} 
        deleteTask={deleteTask} 
        editTask={editTask} 
        saveTask={saveTask} 
        editEnabled={editEnabled} 
      />
    </div>
  );
};

export default App;
