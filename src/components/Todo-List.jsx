import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";

const TodoList = ({ handleTodoEdit }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            handleTodoEdit={handleTodoEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
