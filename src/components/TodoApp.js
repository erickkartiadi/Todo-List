import React, { useEffect } from "react";

import { TodoForm } from "./TodoForm";
import { TodoDate } from "./TodoDate";
import { TodoList } from "./TodoList";
import useTodoState from "../hooks/useTodoState";
import { makeStyles } from "@material-ui/core/styles";

import {
  Paper,
  Box,
  Grid,
  AppBar,
  Typography,
  Toolbar,
} from "@material-ui/core";

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
    <Grid container justify="center" style={{ height: "100vh" }}>
      <Grid item xs={11}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">TodayList</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
        <div className={classes.toolbar} />
        <Box
          height="70vh"
          display="flex"
          flexDirection="column"
          style={{ border: "1px solid black", padding: "1rem" }}
        >
          <Box style={{ marginBottom: "1rem" }}>
            <TodoDate />
          </Box>
          <Box style={{ marginBottom: "1rem" }}>
            <TodoForm addTodo={addTodo} />
          </Box>
          <Box height="72.5%">
            <TodoList
              todos={todos}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default TodoApp;
