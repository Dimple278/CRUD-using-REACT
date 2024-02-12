import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
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
      <br />
      <hr />
      <h3>Your Todos:</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button
              onClick={() => {
                deleteTask(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
