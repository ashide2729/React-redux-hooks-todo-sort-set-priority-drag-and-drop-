export const completeTodo = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: "COMPLETE_TODO",
            id: id
        });
    }
}

export const openTodo = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: "OPEN_TODO",
            id: id
        });
    }
}

export const shiftTodoUp = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: "SHIFT_TODO_UP",
            id: id
        });
    }
}

export const shiftTodoDown = (id) => {
    return (dispatch, getState) => {
        dispatch({
            type: "SHIFT_TODO_DOWN",
            id: id
        });
    }
}