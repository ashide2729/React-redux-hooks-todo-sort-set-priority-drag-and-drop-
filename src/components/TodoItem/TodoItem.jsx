import React, {useState} from 'react';
import './_TodoItem.scss';
import UncheckedIcon from "../../assets/not-checked.svg";
import CheckedIcon from "../../assets/checked.svg";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { connect } from 'react-redux';
import {completeTodo, shiftTodoUp, shiftTodoDown, openTodo} from '../../store/actions/itemActions';

function TodoItem(props) {

    const [isShown, setIsShown] = useState(false);

    const onDragStart = (e, id) => {
        e.dataTransfer.setData('text/plain', id);
    }

    return (
        <li className="todo-item" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} key={props.todo.id}>
            <div className="item-info" onDragStart={(e)=>onDragStart(e, props.todo.id)} draggable onClick={props.title==="Completed" ? ()=>props.openTodo(props.todo.id) : ()=>props.completeTodo(props.todo.id)}>
                {
                    props.title==="Completed" ?
                    <img className="completion-icon" src={ CheckedIcon } alt="CheckedIcon"/>
                    :
                    <img className="completion-icon" src={ isShown ? CheckedIcon : UncheckedIcon} alt={ isShown ? "CheckedIcon" : "UncheckedIcon"}/>
                }
                <span className="task-title" style={ props.title==="Completed" ? {textDecorationLine: 'line-through'} : null}>{props.todo.title}</span>
            </div>
            {isShown && props.title!=="Completed" && (
                <div className="arrow-icons">
                    <ArrowUpwardIcon className="arrow-icon" onClick={()=>props.shiftTodoUp(props.todo.id)} fontSize="small" color="primary"></ArrowUpwardIcon>
                    <ArrowDownwardIcon className="arrow-icon" onClick={()=>props.shiftTodoDown(props.todo.id)} fontSize="small" color="primary"></ArrowDownwardIcon>
                </div>
            )}
        </li>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
      completeTodo: (id) => dispatch(completeTodo(id)),
      openTodo: (id) => dispatch(openTodo(id)),
      shiftTodoUp: (id) => dispatch(shiftTodoUp(id)),
      shiftTodoDown: (id) => dispatch(shiftTodoDown(id)),
    }
  }
  
export default connect(null, mapDispatchToProps)(TodoItem);