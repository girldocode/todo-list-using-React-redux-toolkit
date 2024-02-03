import React, { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../Redux/createListSlice";

const Form = ({ todo }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const [scope, animate] = useAnimate();

  const onSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      setError("Please write something");
      animate(
        "input",
        { x: [-10, 0, 10, 0] },
        { type: "spring", duration: 0.2, delay: stagger(0.05) }
      );
      return;
    }

    if (todo.id) {
      dispatch(
        updateTodo({
          id: todo.id,
          title: todo.title,
        })
      );
    } else {
      dispatch(
        addTodo({
          title: inputValue,
        })
      );
    }

    setInputValue("");
    setError("");
  };

  useEffect(() => {
    if (todo.title) {
      setInputValue(todo.title);
    }
  }, [todo.title]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setError("");
  };

  return (
    <form onSubmit={onSubmit} ref={scope}>
      <div style={{ position: "relative" }}>
        <input
          type="text"
          className="todo-input"
          placeholder="write here..."
          value={inputValue}
          onChange={handleChange}
        />
        {error && (
          <p
            className="error-message"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              color: "maroon",
            }}
          >
            {error}
          </p>
        )}
      </div>
      <motion.button
        type="submit"
        className="todo-button"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        whileTap={{ scale: 0.9 }}
      >
        Add
      </motion.button>
    </form>
  );
};

export default Form;
