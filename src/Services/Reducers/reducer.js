import { ADD_TODO } from "../Actions/actionTypes";

const initialState = []

const todoReducer = (state = initialState, action) => {
    if(action.type === ADD_TODO){
        return [...state, action.payload]
    }else{
        return state;
    }
};

export default todoReducer;
