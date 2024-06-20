import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../../Redux/Action/actions'

const ListTask = () => {
  const [updateId, setUpdateId] = useState(null)
  const [todoText, setTodoText] = useState("")

    const todos = useSelector((state) => { return state.todos })
    const dispatch = useDispatch()

    const deleteHandler = (i) => {
      dispatch(deleteTodo(i))
    }

    const updateHandler = () => {
      if(todoText.trim("") !== ""){
        dispatch(updateTodo(updateId, todoText))
      }
      setTodoText("")
      setUpdateId(null)
    }

  return (
    <div>
      <h1>ListTask</h1>
        <table>
          <thead>
            <tr>
              <th>SI.no</th>
              <th>Todo</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>
                  {updateId === todo.id ? (<input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)}/>) :
                  (todo.name)}
                </td>
                <td> 
                { updateId === todo.id ? 
                  (<button onClick={() => updateHandler()}> Save </button> ) :
                  (<button onClick={() => setUpdateId(todo.id)}> Edit </button> )
                }
                </td>
                <td> <button onClick={() => deleteHandler(todo.id)}> Delete </button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default ListTask;