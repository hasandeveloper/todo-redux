import React from 'react'
import AddTask from './Task/AddTodo'
import ListTask from './Task/ListTodo'

export const Home = () => {
  return (
    <div>
        <AddTask/>
        <ListTask/>
    </div>
  )
}
