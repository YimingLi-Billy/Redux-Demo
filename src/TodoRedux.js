import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "./redux/todoSlice";

const TodoRedux = ({ task, id }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      <span>{task.content}</span>
      <span> </span>
      <button onClick={handleClick}>Done</button>
    </div>
  );
};

export default TodoRedux;
