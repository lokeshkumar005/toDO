import "./App.scss";
import NavBar from "./component/NavBar";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import TodoState from "./context/TodoState";

function App() {
  return (
    <div className="App">
      <TodoState>
        <NavBar />
        <TodoInput />
        <TodoList />
      </TodoState>
    </div>
  );
}

export default App;
