import React from "react";
export function TodoForm({ handleSubmit, newTodoInput, handleNewTodoInput }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTodoInput} onChange={handleNewTodoInput} />
      <button type="submit">Add</button>
    </form>
  );
}
