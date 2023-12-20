import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../slices/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  return (
    <ul className="list-group mt-3">
      {todos.map((todo, index) => (
        <li
          className="list-group-item primary d-flex justify-content-between"
          key={todo.id}
        >
          <div className="d-flex align-items-center gap-2">
            <h3 className="text text-primary ">
              {index + 1}.{todo.text}
            </h3>
            <span className="fs-5 text-danger">{todo.time}</span>
          </div>
          <button
            className="btn btn-danger"
            onClick={() => dispatch(deleteTodo(todo.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
