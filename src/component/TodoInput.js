import React, { useContext, useState } from "react";
import todoContext from "../context/todo-context";

function TodoInput() {
  const [todo, setTodo] = useState("");
  const { todos, addTodo } = useContext(todoContext);

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: todos?.length + 1 ?? 1,
      text: todo,
    };

    addTodo(newTodo);
    setTodo("");
  };

  return (
    <>
      <div className="container my-5 addTodo">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <h1 htmlFor="exampleInputEmail1" className="form-label">
              Add toDO
            </h1>
            <input
              placeholder="Enter here"
              type="text"
              value={todo}
              onChange={onChange}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>

          <button
            disabled={todo.length === 0}
            type="submit"
            className="btn btn-secondary"
          >
            Add to list
          </button>
        </form>
      </div>
    </>
  );
}

export default TodoInput;
