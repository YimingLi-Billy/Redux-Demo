import "./App.css";
import { useState } from "react";
import Todo from "./Todo";

const App = () => {
  const [content, setContent] = useState("");
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    setContent("");
    e.preventDefault();
    setTodos((pre) => {
      return [...pre, { id: new Date().getTime(), content: content }];
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <input disabled={content === ""} type="submit" value="Submit" />
      </form>
      <div>
        {todos.map((todo, id) => (
          <Todo key={id} task={todo} setTodos={setTodos} id={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
