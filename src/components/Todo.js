import React from "react";
import useToggle from "../hooks/useToggle";
import useInput from "../hooks/useInput";

function Todo({
  id,
  task,
  isComplete,
  updateTodo,
  deleteTodo,
  toggleComplete,
}) {
  const [isEdit, toggleIsEdit] = useToggle();
  const [newTaskInput, handleNewTaskInput, clearNewTaskInput] = useInput(task);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteTodo(id);
  };
  const handleEdit = () => {
    toggleIsEdit();
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    updateTodo(id, newTaskInput);
    toggleIsEdit();
  };

  const handleComplete = () => {
    toggleComplete(id);
  };
  return (
    <div onClick={handleComplete}>
      <form onSubmit={handleUpdate}>
        {isEdit ? (
          <input
            type="text"
            value={newTaskInput}
            onChange={handleNewTaskInput}
          />
        ) : (
          <span style={{ textDecoration: isComplete && "line-through" }}>
            {task}
          </span>
        )}
      </form>
      <button onClick={handleEdit}>edit</button>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
export default Todo;
