import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo:(state, action)=>{
      const newTodo = {
        id: state.length + 1,
        text: action.payload,
      };
       state.push(newTodo);
    },
    deleteTodo:(state,action)=>{
       return state.filter((todo)=>todo.id!==action.payload)

    }
  },
});


export const{addTodo,deleteTodo}=todoSlice.actions
export default todoSlice.reducer