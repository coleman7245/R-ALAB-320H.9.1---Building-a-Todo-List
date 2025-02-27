import { useReducer } from 'react'

import ToDo from './ToDoReducer.jsx';

import initialState from '../data/data.js';

function ToDoList() {
    const [state, dispatch] = useReducer(reducer, {todos : initialState, addInput : ''})

    function reducer(state, action) {
        let newState = {...state};

        switch(action.type) {
            case 'ADD_INPUT':
                newState.addInput = action.addInput;
                return newState;
            case 'ADD_TASK':
                function generateKey() {
                    let newId = 0;
            
                    while (state.todos.some((todo) => newId === todo.id)) {
                        newId += 1;
                    }
            
                    return newId;
                }
                if (newState.addInput) {
                    let newTodo = {
                        "userId": 1,
                        "id": generateKey(),
                        "title": newState.addInput,
                        "completed": false
                      };
                      
                    newState.todos.unshift(newTodo);
                }
                return newState;
            case 'DELETE_TASK':
                newState.todos = newState.todos.filter((todo) => todo.id !== action.deleteId);
                return newState;
            default:
                newState;
        }
    };

    function deleteTask(id) {
        dispatch({type : 'DELETE_TASK', deleteId : id});
    };
    
    return (
        <div>
            <input id='add-task-field' type='text' placeholder='Add task...' onChange={(e) => dispatch({type : 'ADD_INPUT', addInput : e.target.value})} />
            <button id='add-btn' htmlFor='add-task-field' onClick={() => dispatch({type : 'ADD_TASK'})}>Add</button>
            <ul>
                {console.log(state)}
                {state.todos.map((todo) => {
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