import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import useInput from "../hooks/useInput";

import Todo from "./Todo";
import { TodoForm } from "./TodoForm";
import { TodoDate } from "./TodoDate";

function TodoList() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("TodoList")) || []
  );
  const [newTodoInput, handleNewTodoInput, clearNewTodoInput] = useInput();

  useEffect(() => {
    const syncLocalStorage = () => {
      localStorage.setItem("TodoList", JSON.stringify(todos));
    };
    syncLocalStorage();
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newTodo = {
      id: uuid(),
      task: newTodoInput,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);

    clearNewTodoInput();
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

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  const todosLocal = todos.map((todo) => (
    <Todo
      key={todo.id}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
      toggleComplete={toggleComplete}
      {...todo}
    />
  ));
  return (
    <div>
      <TodoDate />
      <TodoForm
        handleSubmit={handleSubmit}
        newTodoInput={newTodoInput}
        handleNewTodoInput={handleNewTodoInput}
      />
      <div>{todosLocal}</div>
    </div>
  );
}

export default TodoList;
