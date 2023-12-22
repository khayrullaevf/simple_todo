import { createSlice } from "@reduxjs/toolkit";
const loadTodosFromLocalStorage = () => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("Error loading todos from localStorage", error);
    return [];
  }
};

const saveTodosToLocalStorage = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("Error saving todos to localStorage", error);
  }
};

const initialState = loadTodosFromLocalStorage();
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: state.length + 1,
        text: action.payload.text,
        time: action.payload.time,
      };
      state.push(newTodo);
      saveTodosToLocalStorage(state);
    },
    removeTodo: (state, action) => {
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      saveTodosToLocalStorage(filteredTodos);
      return filteredTodos;
    },
    updateStatus:(state, action)=>{
      const updateAt = new Date().toLocaleString();
      const updateStatusState=state.map((todo) =>
        todo.id === action.payload?.id ? { ...todo, isDone: true, updateAt } : todo
      );
      saveTodosToLocalStorage(updateStatusState);
    },
  },
});


export const{addTodo,removeTodo,updateStatus}=todoSlice.actions
export default todoSlice.reducer