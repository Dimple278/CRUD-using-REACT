import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample-task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let updateInputValue = (event) => {
    setNewTodo(event.target.value);
  };

  let addNewTask = () => {
    setTodos((prevTodos) => [...prevTodos, { task: newTodo, id: uuidv4() }]);

    setNewTodo("");
  };

  let deleteTask = (id) => {
    setTodos((prevTodos) => todos.filter((todo) => todo.id != id));
  };

  let markAsDoneAll = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone: true,
      }))
    );
  };

  let markAsDoneOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a Todo"
        value={newTodo}
        onChange={updateInputValue}
      />
      <button onClick={addNewTask}>Add Todo</button>
      <br />
      <br />
      <hr />
      <h3>Your Todos:</h3>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
          >
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                deleteTask(todo.id);
              }}
            >
              Delete
            </button>
            <button
              onClick={() => {
                markAsDoneOne(todo.id);
              }}
            >
              Mark as done
            </button>
          </li>
        ))}
      </ul>
      <br /> <br />
      <hr />
      <button onClick={markAsDoneAll}>Mark As Done all</button>
    </div>
  );
}
