import React from "react";
import { useState } from "react";
export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input
        type="text"
        className="input"
        placeholder="Add New Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}
