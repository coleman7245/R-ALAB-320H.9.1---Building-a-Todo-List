import { useReducer } from 'react';

function ToDo({item, deleteTask}) {
    const [state, dispatch] = useReducer(reducer, {todo : item, editEnabled : false, editInput : ''});

    function reducer(state, action) {
        let newState = {...state};

        switch(action.type) {
            case 'EDIT_INPUT':
                newState.editInput = action.editInput;
                return newState;
            case 'EDIT_ENABLED':
                newState.editEnabled = !state.editEnabled
                return newState;
            case 'SAVE_TASK':
                newState.editEnabled = !state.editEnabled;
                if (state.editInput)
                    newState.todo.title = state.editInput;
                return newState;
            case 'CHECK_COMPLETED':
                console.log(newState.todo.completed);
                newState.todo.completed = !state.todo.completed;
                console.log(newState.todo.completed);
                return newState;
            default:
                return state;
        }
    }

    return (
        <li>
            <input
                className='task-checkbox' 
                name='task-checkbox' 
                type='checkbox' 
                checked={state.todo.completed} 
                onChange={() => dispatch({type : 'CHECK_COMPLETED'})}
            />
            <button
                className='delete-btn'  
                name='delete-btn' 
                onClick={() => deleteTask(state.todo.id)} 
                disabled={state.todo.completed ? false : true}
            >
                X
            </button>
            {state.editEnabled ? 
                <input 
                    className='edit-field'
                    name='edit-field'
                    defaultValue={state.todo.title}
                    onChange={(e) => dispatch({type : 'EDIT_INPUT', editInput : [e.target.value]})} 
                /> 
                : state.todo.title}
            <button
                name='edit-btn' 
                onClick={() => dispatch({type : 'EDIT_ENABLED'})} 
                hidden={state.editEnabled? true : false}
                value={state.todo.id} 
            >
                Edit
            </button>
            <button 
                name='save-btn' 
                onClick={() => dispatch({type : 'SAVE_TASK'})}
                hidden={state.editEnabled? false : true}
            >
                Save
            </button>
        </li>
    )
};

export default ToDo;