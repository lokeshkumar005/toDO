import React, { useReducer } from "react";
import TodoContext from "./todo-context";
import todoReducer from "./todo-reducer";
import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "./todo-actions";

const getLocalData = () => {
  let listItem = localStorage.getItem("todoList");

  if (listItem) {
    return JSON.parse(localStorage.getItem("todoList"));
  } else {
    return [];
  }
};

function TodoState({ children }) {
  const initialState = {
    todos: getLocalData(),
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  const deleteTodo = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  const checkTodo = (todoID) => {
    dispatch({
      type: CHECK_TODO,
      payload: todoID,
    });
  };

  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentTime = new Date();
  const date =
    weekday[currentTime.getDay()] +
    " / " +
    month[currentTime.getMonth()] +
    " " +
    currentTime.getDate();

  return (
    <TodoContext.Provider
      value={{ todos: state.todos, addTodo, deleteTodo, checkTodo, date }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoState;
