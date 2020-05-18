import React, { useEffect } from "react";

import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import TodoForm from "../TodoForm/TodoForm";
import TodoDate from "../TodoDate/TodoDate";
import TodoList from "../TodoList/TodoList";

import { Box, Grid, Toolbar } from "@material-ui/core";

import useTodoState from "../../hooks/useTodoState";
import { useStyles } from "./useStyles";

function TodoApp() {
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleComplete,
  } = useTodoState();

  useEffect(() => {
    const syncLocalStorage = () => {
      localStorage.setItem("TodoList", JSON.stringify(todos));
    };
    syncLocalStorage();
  }, [todos]);

  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Grid className={classes.container} container justify="center">
        <Grid className={classes.grid} item xs={11} sm={8} md={6} lg={4}>
          <Toolbar />
          <div className={classes.toolbar} />
          <Box
            height="70%"
            display="flex"
            flexDirection="column"
            className={classes.card}
          >
            <TodoDate />
            <TodoForm addTodo={addTodo} />
            <TodoList
              todos={todos}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export default TodoApp;
