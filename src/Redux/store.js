import { configureStore } from "@reduxjs/toolkit";
import createListSliceReducer from "./createListSlice";
import { localStorageMiddleware } from "./localStorageMiddleware";

export default configureStore({
  reducer: {
    todos: createListSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
