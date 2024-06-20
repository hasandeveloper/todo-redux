import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Action/actionTypes";

const initialization = {
    todos: []
}

const todoReducer = (state = initialization, action) => {
    if(action.type === ADD_TODO){
        return {
            ...state, 
            todos: [...state.todos, action.payload]
        }
    }else if(action.type === DELETE_TODO){
        return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== action.payload)
        }
    }else if(action.type === UPDATE_TODO){
        return {
            ...state, 
            todos: state.todos.map(todo => todo.id === action.payload.id ? {...todo, name: action.payload.name} : todo )
        }
    }else{
        return state
    }
}

export default todoReducer;
