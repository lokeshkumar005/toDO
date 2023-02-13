import React, { useContext, useEffect } from "react";
import todoContext from "../context/todo-context";

function TodoList() {
  const { todos, deleteTodo, checkTodo } = useContext(todoContext);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }, [todos]);

  if (todos.length === 0) {
    return [];
  }

  return (
    <>
      <div className="container listGroup">
        <h1>toDO's</h1>
        {todos.map((todo, index) => {
          return (
            <div className="listGroup__main" key={index}>
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
                    onClick={() => checkTodo(todo.id)}
                    // className="fa-regular fa-circle-check"
                    className={
                      todo.completed
                        ? "fa-regular fa-circle-check checkColor"
                        : "fa-regular fa-circle-check"
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
          );
        })}
      </div>
    </>
  );
}

export default TodoList;
