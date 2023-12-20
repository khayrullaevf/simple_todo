import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault()
    dispatch(addTodo(text));
    setText("");
    e.target.reset();
  };

  return (
    <form onSubmit={handleAddTodo} className="form d-flex gap-3">
      <input
        type="text"
        placeholder="Todo"
        onChange={(e) => setText(e.target.value)}
        required
        className="form-control"
      />
      <button className="btn btn-primary" type="submit">add</button>
    </form>
  );
};

export default TodoForm;
