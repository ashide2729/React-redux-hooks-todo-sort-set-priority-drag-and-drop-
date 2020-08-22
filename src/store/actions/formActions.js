export const addTodo = (todo) => {
    return (dispatch, getState) => {
        dispatch({
            type: "ADD_TODO",
            todo: todo
        });
    }
}

export const sortTodosActive = () => {
    return (dispatch, getState) => {
        dispatch({
            type: "SORT_TODOS_ACTIVE",
        });
    }
}