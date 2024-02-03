import { createSlice } from "@reduxjs/toolkit";

const storedTodos = JSON.parse(localStorage.getItem("todos"));

const initialState = storedTodos || [
  { id: 1, title: "todo1", completed: false },
  { id: 2, title: "todo2", completed: false },
  { id: 3, title: "todo3", completed: true },
];

const createListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },

    toggleInput: (state, action) => {
      const inputId = state.findIndex((todo) => todo.id === action.payload.id);
      state[inputId].completed = action.payload.completed;
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      const updatedState = [...state];
      updatedState[index].title = action.payload.title;
    },
  },
});

export const { addTodo, toggleInput, removeTodo, updateTodo } =
  createListSlice.actions;

export default createListSlice.reducer;
