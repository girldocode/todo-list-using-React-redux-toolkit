export const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("todos", JSON.stringify(state.todos));
  return result;
};
