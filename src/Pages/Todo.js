import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
const Home = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  const removeAll = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index);
    setTodos(newTodos);
  };

  var newArray = [...todos];
  var result = newArray.length;

  return (
    <div className="todo">
      <div className="container todo-contain">
        <h1>My Todos</h1>
        <TodoForm addTodo={addTodo} />

        <div className="todo-list">
          {todos.map((todo, index) => (
            <u1 className="itemlist">
              <li>
                <TodoItem
                  key={index}
                  index={index}
                  todo={todo}
                  handler={completeTodo}
                  remove={removeTodo}
                />
              </li>
              <hr />
            </u1>
          ))}
        </div>
        <button className="removeall" onClick={removeAll}>
          Remove All
        </button>
        <h3>I have {result} tasks to do </h3>
      </div>
    </div>
  );
};

export default Home;
