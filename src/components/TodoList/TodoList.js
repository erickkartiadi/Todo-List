import React from "react";
import Todo from "../Todo/Todo";
import { List, Box } from "@material-ui/core";
import "./TodoList.css";

import { useStyles } from "./useStyles";

function TodoList({ todos, updateTodo, deleteTodo, toggleComplete }) {
  const classes = useStyles();
  return (
    <Box height="72.5%">
      <List className={`${classes.todoList} TodoList`}>
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
