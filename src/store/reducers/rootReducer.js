const { default: formReducer } = require("./formReducer");
const { default: todoReducer } = require("./todosReducer");
const { combineReducers } = require("redux");

const rootReducer = combineReducers({
    formRed: formReducer, 
    todosRed: todoReducer,
});

export default rootReducer;