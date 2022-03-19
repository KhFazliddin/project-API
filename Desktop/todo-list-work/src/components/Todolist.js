import React, { useState } from "react";
import { nanoid } from "nanoid";
import Childtodo from "./Childtodo";
import "../assets/Todolist.css";

function Todolist() {
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState("");

  const addBtn = (e) => {
    e.preventDefault();
    if (!task) {
      alert("Task kiritmadingiz");
    } else {
      const newObj = { task, id: nanoid() };
      const newArr = [...todo, newObj];
      setTodo(newArr);
      setTask("");
    }
  };
  console.log(todo);
  return (
    <div>
      <div className="todo">
        <h1>TODO LIST</h1>
      </div>
      <form className="todo_List" action="">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
        />
        <button onClick={addBtn}>Add todo</button>
      </form>
      <div className="basket">
        {todo.length > 0 ? (
          todo.map((item, index) => (
            <Childtodo
              key={item.id}
              todo={todo}
              setTodo={setTodo}
              vazifa={item.task}
              id={item.id}
              index={index}
            />
          ))
        ) : (
          <p>Basket is empty</p>
        )}
      </div>
    </div>
  );
}

export default Todolist;
