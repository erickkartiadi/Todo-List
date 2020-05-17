import React from "react";
import Todo from "../Todo/Todo";
import { List, Box } from "@material-ui/core";
import "./TodoList.css";

function TodoList({ todos, updateTodo, deleteTodo, toggleComplete }) {
  return (
    <Box height="72.5%">
      <List className="TodoList" style={{ height: "100%", overflowY: "auto" }}>
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
    </Box>
  );
}

export default TodoList;
