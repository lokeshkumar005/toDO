import "./App.scss";
import NavBar from "./component/NavBar";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
