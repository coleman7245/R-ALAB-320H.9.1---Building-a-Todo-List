function ToDo({item, deleteTask, editTask, saveTask, editEnabled}) {

    return (
        <li>
            <input
                className='task-checkbox' 
                name='task-checkbox' 
                type='checkbox' 
                checked={item.completed} 
                onChange={deleteTask}
            />
            <button
                className='delete-btn'  
                name='delete-btn' 
                onClick={deleteTask} 
                disabled={item.completed ? false : true}
            >
                X
            </button>
            {editEnabled ? <input className='edit-field'name='edit-field' defaultValue={item.title} /> : item.title}
            <button
                name='edit-btn' 
                onClick={() => editTask(item.id)} 
                disabled={editEnabled? true : false} 
                hidden={editEnabled? true : false} 
            >
                Edit
            </button>
            <button 
                name='save-btn' 
                onClick={() => saveTask(item.id)}>
                Save
            </button>
        </li>
    )
};

export default ToDo;