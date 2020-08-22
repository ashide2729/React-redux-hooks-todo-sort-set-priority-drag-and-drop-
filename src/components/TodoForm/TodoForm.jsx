import React, { useState, useRef, useEffect } from 'react';
import './_TodoForm.scss';
import AddBlueSVG from '../../assets/add-blue.svg';
import AddGraySVG from '../../assets/add-gray.svg';
import { connect } from 'react-redux';
import {addTodo, sortTodosActive} from '../../store/actions/formActions';

function TodoForm(props) {

    const [inputValue, setInputValue] = useState('');

    const [isInputFocussed, setIsInputFocussed] = useState(false);

    const validationErrorStyle = {borderColor: '#c22a22'};
    
    const focusStyle = {borderColor: '#0082D4'};

    const refInput = useRef();

    useEffect(() => {
      const { current } = refInput;
  
      const handleFocus = () => {
        setIsInputFocussed(true)
      }
      const handleBlur = () => {
        setIsInputFocussed(false)
      }
  
      current.addEventListener('focus', handleFocus);
      current.addEventListener('blur', handleBlur);
  
      return () => {
        current.removeEventListener('focus', handleFocus);
        current.removeEventListener('blur', handleBlur);
      }
    });

    return (
        <>
            <div className="todo-form-container">
                <div className="form-input-div" style={isInputFocussed ? (inputValue.length > 20 ? validationErrorStyle : focusStyle) : null}>
                    <img src={isInputFocussed ? AddGraySVG : AddBlueSVG} alt="Add Icon"/>
                    <input className="form-input-div-textfield" ref={refInput} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="Add a task"/>
                </div>
                <button className="form-add-button" disabled={inputValue.length > 20} onClick={()=>props.addTodo(inputValue)}>Add</button>
                <button className="form-sort-button" onClick={()=>props.sortTodo()}>Sort</button>
            </div>
            {
                inputValue.length > 20 ?
                <p className="validation-message">Must be 20 characters or less.</p>
                :
                null
            }
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    sortTodo: () => dispatch(sortTodosActive())
  }
}

export default connect(null, mapDispatchToProps)(TodoForm);