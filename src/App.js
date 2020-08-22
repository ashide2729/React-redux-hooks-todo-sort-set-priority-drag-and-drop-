import React from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import Todos from './components/Todos/Todos';
import { connect } from 'react-redux';

function App(props) {

  const {todos} = props;

  const sortFuncByTitle = (arr) => {
  return arr.sort(function (a, b) {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    })
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="app-title">Tasks</div>
        <TodoForm></TodoForm>
        <div className="todos-containers">
          <Todos title="To-do" todos={props.sortActive ? sortFuncByTitle(todos.filter(obj=>obj.completed===false)) :  todos.filter(obj=>obj.completed===false)} ></Todos>
          <Todos title="Completed" todos={ props.sortActive ? sortFuncByTitle(todos.filter(obj=>obj.completed===true)) : todos.filter(obj=>obj.completed===true)} ></Todos>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todosRed,
    sortActive: state.formRed
  }
}

export default connect(mapStateToProps)(App);
