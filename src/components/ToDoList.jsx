import ToDo from './ToDo.jsx';

function ToDoList({todos, addTask, deleteTask, editTask, saveTask, editEnabled, input}) {
    console.log(editEnabled)

    return (
        <div>
            <input id='add-task-field' type='text' placeholder='Add task...' />
            <button id='add-btn' htmlFor='add-task-field' onClick={addTask}>Add</button>
            <ul>
                {todos.map((todo) => {
                    return <ToDo 
                                item={todo} 
                                deleteTask={deleteTask} 
                                editTask={editTask} 
                                saveTask={saveTask} 
                                editEnabled={editEnabled}
                                input={input} 
                                key={todo.id} 
                            />
                })}
            </ul>
        </div>
    )
}

export default ToDoList