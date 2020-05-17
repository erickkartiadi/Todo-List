import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";

export function TodoList({ todos, updateTodo, deleteTodo, toggleComplete }) {
  return (
    <List style={{ height: "100%", overflowY: "auto" }}>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          {...todo}
        />
      ))}
    </List>
  );
}
