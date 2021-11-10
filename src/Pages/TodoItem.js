import React from "react";
import { FaTrash, FaCheck } from "react-icons/fa";

export default function TodoItem({ todo, index, handler, remove }) {
  return (
    <div
      className="todo-item"
      style={{ color: todo.isCompleted ? "grey" : "" }}
    >
      {todo.text}
      <div className="icon">
        <FaCheck onClick={() => handler(index)} />
        <FaTrash onClick={remove} />
      </div>
    </div>
  );
}
