import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

export const addTodo = (id, text) => {
  return {
    type: ADD_TODO,
    payload: {
        id: id,
        name: text
    }
  };
};

export const deleteTodo = (id) => {
    return {
      type: DELETE_TODO,
      payload: id
    };
};

export const updateTodo = (id, text) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id: id,
            name: text
        }
      };
}