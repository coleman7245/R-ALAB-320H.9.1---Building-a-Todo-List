import {useState} from 'react';

function ToDo({item, deleteTask}) {
    const [editEnabled, setEditEnabled] = useState(false);
    const [editInput, setEditInput] = useState('');
    const [todo, setTodo] = useState(item);

    function grabInput(e) {
        setEditInput(e.target.value);
    };

    function editTask() {
        setEditEnabled(!editEnabled);
    };

    function saveTask() {
        let newItem = {
            ...item,
            title : editInput
        };
        
        
        setTodo(newItem);
        editTask(!editEnabled);
    };

    function checkCompleted() {
        let newTodo = {...todo, completed : !todo.completed};
        setTodo(newTodo);
    }

    return (
        <li>
            <input
                className='task-checkbox' 
                name='task-checkbox' 
                type='checkbox' 
                checked={todo.completed} 
                onChange={checkCompleted}
            />
            <button
                className='delete-btn'  
                name='delete-btn' 
                onClick={() => deleteTask(todo.id)} 
                disabled={todo.completed ? false : true}
            >
                X
            </button>
            {editEnabled ? 
                <input 
                    className='edit-field'
                    name='edit-field'
                    defaultValue={todo.title}
                    onChange={(e) => grabInput(e)} 
                /> 
                : todo.title}
            <button
                name='edit-btn' 
                onClick={editTask} 
                hidden={editEnabled? true : false}
                value={todo.id} 
            >
                Edit
            </button>
            <button 
                name='save-btn' 
                onClick={saveTask}
                hidden={editEnabled? false : true}
            >
                Save
            </button>
        </li>
    )
};

export default ToDo;