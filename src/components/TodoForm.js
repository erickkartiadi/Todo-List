import React from "react";
import useInput from "../hooks/useInputState";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  input: {
    flex: 1,
  },
  divider: {
    height: "inherit",
    margin: 4,
  },
}));
export function TodoForm({ addTodo }) {
  const [newTaskInput, handleNewTaskInput, clearNewTaskInput] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(newTaskInput);
    clearNewTaskInput();
  };

  const classes = useStyles();

  return (
    <Grid
      component="form"
      onSubmit={handleSubmit}
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
        inputProps={{ "aria-label": "search google maps" }}
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
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={true}
        autoHideDuration={6000}
        // onClose={handleClose}
        message="Note archived"
        action={
          <React.Fragment>
            <Button color="secondary" size="small">
              UNDO
            </Button>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              // onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </Grid>
  );
}
