import React, { useEffect } from "react";

import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import TodoForm from "../TodoForm/TodoForm";
import TodoDate from "../TodoDate/TodoDate";
import TodoList from "../TodoList/TodoList";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Toolbar } from "@material-ui/core";

import useTodoState from "../../hooks/useTodoState";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 48,
  },
}));

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
      <Grid container justify="center" style={{ height: "100vh" }}>
        <Grid item xs={11}>
          <Toolbar />
          <div className={classes.toolbar} />
          <Box
            height="70vh"
            display="flex"
            flexDirection="column"
            style={{ border: "1px solid black", padding: "1rem" }}
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
