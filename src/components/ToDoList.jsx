import { useState } from 'react'

import ToDo from './ToDo.jsx';

import initialState from '../data/data.js';

function ToDoList() {
    const [addInput, setAddInput] = useState('');
    const [todos, setTodos] = useState(initialState);
    
    function grabInput(e) {
        setAddInput(e.target.value);
    };

    function addTask() {
        let newTodos = [...todos];
        let newTodo = {
          "userId": 1,
          "id": newTodos.length + 1,
          "title": addInput,
          "completed": false
        };
    
        newTodos.unshift(newTodo);
        setTodos(newTodos);
    };

    function deleteTask(id) {
        let newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
    };
    
    return (
        <div>
            <input id='add-task-field' type='text' placeholder='Add task...' onChange={(e) => grabInput(e)} />
            <button id='add-btn' htmlFor='add-task-field' onClick={() => addTask()}>Add</button>
            <ul>
                {todos.map((todo) => {
                    return <ToDo 
                                item={todo} 
                                deleteTask={deleteTask}
                                key={todo.id} 
                            />
                })}
            </ul>
        </div>
    )
}

export default ToDoList