import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState(["sample task"]);
  let [newTodo, setNewTodo] = useState("");

  let updateInputValue = (event) => {
    setNewTodo(event.target.value);
  };

  let addNewTask = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
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
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
