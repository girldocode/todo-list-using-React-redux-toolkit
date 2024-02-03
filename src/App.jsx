import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/Todo-List";
import { useState } from "react";

function App() {
  const [todoToEdit, setTodoToEdit] = useState({ id: 0, title: "" });

  const handleTodoEdit = (todo) => {
    setTodoToEdit(todo);
  };
  return (
    <>
      <Header />
      <div>
        <Form todo={todoToEdit} />
        <TodoList handleTodoEdit={handleTodoEdit} />
      </div>
    </>
  );
}

export default App;
