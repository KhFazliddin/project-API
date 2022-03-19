import React from "react";
import "../assets/Childtodo.css";

function Childtodo(props) {
  const { vazifa, id, todo, setTodo, index } = props;

  const deleteTask = (e) => {
    e.preventDefault();
    const filteredTodo = todo.filter((item) => item.id !== id);
    setTodo(filteredTodo);
  };
  // const doneFilterTask = (e) => {
  //   e.preventDefault();
  //   const filteredTodo = todo.filter((item) => item.id !== id);
  //   setTodo(filteredTodo);
  // };
  return (
    <div className="task_item">
      <h1>
        {index + 1}.{vazifa}
      </h1>
      <div>
        {/* <input onClick={doneFilterTask} type="checkbox" /> */}
        <i onClick={deleteTask} className="fa fa-trash"></i>
      </div>
    </div>
  );
}

export default Childtodo;
