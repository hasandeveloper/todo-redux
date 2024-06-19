import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from '../Services/Actions/actions';

export const Todo = () => {
  const [todoText, setTodoText] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const onChangeHandler = (e) => {
    setTodoText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      dispatch(addTodo(todoText));
      setTodoText("");
    }
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter your todo"
          value={todoText}
          onChange={onChangeHandler}
          name="todo"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
