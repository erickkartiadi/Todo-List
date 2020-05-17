import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, IconButton, Divider, InputBase } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import { SnackbarProvider, useSnackbar } from "notistack";

import useInput from "../../hooks/useInputState";

const useStyles = makeStyles(() => ({
  input: {
    flex: 1,
  },
  divider: {
    height: "inherit",
    margin: 4,
  },
}));

function MyApp({ addTodo }) {
  const [newTaskInput, handleNewTaskInput, clearNewTaskInput] = useInput("");
  const { enqueueSnackbar } = useSnackbar();

  const classes = useStyles();

  const handleAddTodo = (e) => {
    addTodo(newTaskInput);
    clearNewTaskInput();
  };

  const handleSubmit = (variant) => (e) => {
    e.preventDefault();
    handleAddTodo();
    enqueueSnackbar("Task Added", { variant });
  };
  return (
    <Box style={{ marginBottom: "1rem" }}>
      <Grid
        component="form"
        onSubmit={handleSubmit("success")}
        container
        style={{
          borderRadius: "0.25rem",
          border: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <InputBase
          style={{ marginLeft: "1rem" }}
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
