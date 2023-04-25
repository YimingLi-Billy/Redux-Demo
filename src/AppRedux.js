import "./App.css";
import { useState } from "react";
import TodoRedux from "./TodoRedux";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice";

const AppRedux = () => {
  const [content, setContent] = useState("");
  const { todos } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    setContent("");
    e.preventDefault();
    dispatch(addTodo({ content: content, id: new Date().getTime() }));
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
          <TodoRedux key={id} task={todo} id={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default AppRedux;
