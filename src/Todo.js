import React from "react";

const Todo = ({ task, setTodos, id }) => {
  const handleClick = () => {
    setTodos((pre) => {
      const newTodos = pre.filter((item) => item.id !== id);
      return newTodos;
    });
  };
  return (
    <div>
      <span>{task.content}</span>
      <span> </span>
      <button onClick={handleClick}>Done</button>
    </div>
  );
};

export default Todo;
