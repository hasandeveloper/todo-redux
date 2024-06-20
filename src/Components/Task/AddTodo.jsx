import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../Redux/Action/actions';

const AddTask = () => {
    const [todoText, setTodoText] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        const randomNumber = Math.random();

        if(todoText !== ""){
            dispatch(addTodo(randomNumber, todoText))
            setTodoText("")
        }
    }
  return (
    <div>
        <h1>AddTask</h1>
        <form onSubmit={submitHandler}>
            <input type="text" name="todo" onChange={(e) => {setTodoText(e.target.value)}}/>
            <button type="submit">Add Todo</button>
        </form>
    </div>
  )
}

export default AddTask