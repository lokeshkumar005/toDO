import React, { useContext, useEffect, useState } from "react";
import todoContext from "../context/todo-context";

function TodoList() {
  const { todos, deleteTodo, toggleCheckTodo, editTodo } =
    useContext(todoContext);

  const [editing, setEditing] = useState(null);
  const [text, setText] = useState();

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  if (todos.length === 0) {
    return [];
  }

  const handleTextChange = (e) => {
    const res = e.target.value;
    setText(res);
  };

  return (
    <>
      <div className="container listGroup">
        <h1>toDO's - {todos.length}</h1>
        {todos.map((todo) => {
          if (todo.id === editing) {
            return (
              <div className="listGroup__main" key={todo.id}>
                <div className="listGroup__edit">
                  <input
                    type="text"
                    value={text}
                    onChange={handleTextChange}
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      editTodo(todo.id, text);
                      setEditing(null);
                      setText("");
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div className="listGroup__main" key={todo.id}>
              <div>
                <div
                  className={
                    todo.completed
                      ? "listGroup__flush checkedUnderline"
                      : "listGroup__flush"
                  }
                >
                  <div
                    className={
                      todo.completed
                        ? "listGroup__item checked "
                        : "listGroup__item "
                    }
                  >
                    {todo.text}
                  </div>
                  <div>
                    <i
                      onClick={() => toggleCheckTodo(todo.id)}
                      // className="fa-regular fa-circle-check"
                      className={
                        todo.completed
                          ? "fa-regular fa-circle-check checkColor"
                          : "fa-regular fa-circle-check"
                      }
                    ></i>
                    <i
                      onClick={() => {
                        // editTodo(todo.id);
                        setEditing(todo.id);
                      }}
                      className={
                        todo.completed
                          ? "fa-regular fa-pen-to-square checkColor"
                          : "fa-regular fa-pen-to-square"
                      }
                    ></i>
                    <i
                      onClick={() => deleteTodo(todo.id)}
                      // className="fa-solid fa-trash"
                      className={
                        todo.completed
                          ? "fa-solid fa-trash checkColor"
                          : "fa-solid fa-trash"
                      }
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
