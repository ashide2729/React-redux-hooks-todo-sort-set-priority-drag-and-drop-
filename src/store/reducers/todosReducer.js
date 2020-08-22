import uuid from 'react-uuid';

const todoReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_TODO":
            const todo = {id: uuid(), title: action.todo, completed: false};
            return [...state, todo]
        case "COMPLETE_TODO":
            return [
                ...state.map(item => item.id === action.id ? { ...item, completed: true } : item )
            ];
        case "OPEN_TODO":
            return [
                ...state.map(item => item.id === action.id ? { ...item, completed: false } : item )
            ];
        case "SHIFT_TODO_UP":
            var pos = state.map(function(todo) { return todo.id; }).indexOf(action.id);
            if (pos===0){
                return state;
            }else{
                [state[pos-1], state[pos]] = [state[pos], state[pos-1]];
                return [...state];
            }
        case "SHIFT_TODO_DOWN":
            var pos = state.map(function(todo) { return todo.id; }).indexOf(action.id);
            if (pos===state.length-1){
                return state;
            }else{
                [state[pos+1], state[pos]] = [state[pos], state[pos+1]];
                return [...state];
            }
        default:
            return state;
    }   
}

export default todoReducer;