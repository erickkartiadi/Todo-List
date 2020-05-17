import { useState } from "react";
import { v4 as uuid } from "uuid";

function useTodoState() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("TodoList")) || []
  );

  const addTodo = (newTask) => {
    let newTodo = {
      id: uuid(),
      task: newTask,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, newTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
  };
}

export default useTodoState;
