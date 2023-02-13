import React, { useContext } from "react";
import todoContext from "../context/todo-context";

function NavBar() {
  const { date } = useContext(todoContext);

  return (
    <>
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="/"
              style={{ marginLeft: "15rem" }}
            >
              toDO-list
            </a>
            <p className="navDate">{date}</p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
