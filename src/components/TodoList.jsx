import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo} from "../slices/todoSlice";
import { Button, Modal } from "react-bootstrap";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

     const [show, setShow] = useState(true);
     const [deleteTodo, setDeleteTodo] = useState(null);
     const dispatch = useDispatch();

     const handleClickRemove = (todo) => {
       setShow(true);
       setDeleteTodo(todo);
     };

     const handleRemove = () => {
       dispatch(removeTodo(deleteTodo));
       setShow(false);
     };

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
          <button className="btn btn-danger" onClick={()=>handleClickRemove(todo.id)}>Delete</button>
        </li>
      ))}
     <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Remove todo ?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Siz haqiqatdan ham bu item ni uchirmoqchimisiz?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            close
          </Button>
          <Button variant="primary" onClick={handleRemove}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </ul>
  );
};

export default TodoList;
