import React, { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleInput, removeTodo, updateTodo } from "../Redux/createListSlice";
const Todo = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const addItemHandler = () => {
    dispatch(toggleInput({ id: id, completed: !completed }));
  };

  const removeItemHandler = () => {
    dispatch(removeTodo({ id: id }));
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const updateItemHandler = () => {
    if (editedTitle.trim() === "") {
      console.error("Title cannot be empty");
      return;
    }

    dispatch(
      updateTodo({
        id: id,
        title: editedTitle,
      })
    );

    toggleEditMode();
  };

  return (
    <li>
      <div className="todo">
        {isEditing ? (
          <input
            className="input2"
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <h3 className={`todo-item ${completed ? "completed" : undefined}`}>
            {title}
          </h3>
        )}

        <div>
          {isEditing ? (
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              whileTap={{ scale: 0.9 }}
              onClick={updateItemHandler}
              className="update-btn"
              disabled={!editedTitle.trim()}
            >
              <i className="fa fa-save"></i>
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleEditMode}
              className="edit-btn"
            >
              <i className="fas fa-pen"></i>
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            whileTap={{ scale: 0.9 }}
            onClick={addItemHandler}
            className="complete-btn"
            disabled={isEditing}
          >
            <i className="fas fa-check"></i>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
            whileTap={{ scale: 0.9 }}
            onClick={removeItemHandler}
            className="trash-btn"
            disabled={isEditing}
          >
            <i className="fas fa-trash"></i>
          </motion.button>
        </div>
      </div>
    </li>
  );
};

export default Todo;
