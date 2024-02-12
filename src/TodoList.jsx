import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let updateInputValue = (event) => {
    setNewTodo(event.target.value);
  };

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
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
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
