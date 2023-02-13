import { ADD_TODO, DELETE_TODO, CHECK_TODO } from "./todo-actions";

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
    case CHECK_TODO:
      const checked = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = true;
        }
        return todo;
      });
      return { ...state.todos, todos: checked };

    default:
      return state;
  }
};

export default todoReducer;
