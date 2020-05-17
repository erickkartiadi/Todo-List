import React from "react";

import { Grid, Box, IconButton, Divider, InputBase } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { SnackbarProvider, useSnackbar } from "notistack";

import useInput from "../../hooks/useInputState";
import { useStyles } from "./useStyles";

function MyApp({ addTodo }) {
  const [newTaskInput, handleNewTaskInput, clearNewTaskInput] = useInput("");
  const { enqueueSnackbar } = useSnackbar();

  const handleAddTodo = (e) => {
    addTodo(newTaskInput);
    clearNewTaskInput();
  };

  const handleSubmit = (variant) => (e) => {
    e.preventDefault();
    handleAddTodo();
    enqueueSnackbar("Task Added", { variant });
  };

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid
        className={classes.form}
        component="form"
        onSubmit={handleSubmit("success")}
        container
      >
        <InputBase
          className={classes.input}
          placeholder="Add New Task"
          type="text"
          value={newTaskInput}
          onChange={handleNewTaskInput}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          type="submit"
          variant="contained"
          color="primary"
          className={classes.iconButton}
          aria-label="directions"
        >
          <AddCircleIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Box>
  );
}

export default function IntegrationNotistack(props) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp {...props} />
    </SnackbarProvider>
  );
}
