import React from 'react';
import './_Todos.scss';
import TodoItem from '../TodoItem/TodoItem';
import { connect } from 'react-redux';
import {completeTodo, openTodo} from '../../store/actions/itemActions';

function Todos(props) {

    const onDragOver = (e) => {
        e.preventDefault();
      }
    
    const onDrop = (e, place) => {
        let id = e.dataTransfer.getData('text');
        if (place==="Completed"){
            props.completeTodo(id);
        }
        if (place==="To-do"){
            props.openTodo(id);
        }
    }

    return (
        <div className="todos-container" onDragOver={(e)=>onDragOver(e)} onDrop={props.title === "Completed" ? (e)=>onDrop(e, "Completed") : (e)=>onDrop(e, "To-do")}>
            <div className="todos-title">
                {props.title}
            </div>
            <ul className="todo-items-list">
                {
                    props.todos.length ?
                    <>
                        {
                            props.todos.map(todo=>
                        <TodoItem title={props.title} todo={todo} key={todo.id}></TodoItem>
                        )}
                        {
                           props.todos.length > 10 ? 
                           <p className="show-more-items-p"><i>Load more...</i></p>
                           :
                           null
                        }
                    </>
                    :
                    <p className="show-more-items-p" style={{cursor: "default"}}>No todos, yay !</p>
                }
            </ul>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      completeTodo: (id) => dispatch(completeTodo(id)),
      openTodo: (id) => dispatch(openTodo(id)),
    }
  }
  
export default connect(null, mapDispatchToProps)(Todos);