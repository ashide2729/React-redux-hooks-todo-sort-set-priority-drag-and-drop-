
const formReducer = (state=false, action) => {
    switch (action.type) {
        case "SORT_TODOS_ACTIVE":
            return !state;
        default:
            return state;
    }
}

export default formReducer;