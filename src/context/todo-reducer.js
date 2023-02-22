import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_CHECK_TODO,
  EDIT_TODO,
} from "./todo-actions";

const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          const todoCopy = { ...todo };
          if (todo.id === action.payload) {
            todoCopy.completed = !todo.completed;
          }
          return todoCopy;
        }),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, text: action.payload.text };
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
