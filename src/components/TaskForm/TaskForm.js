import React, { useRef } from "react";

import {
  FormControl,
  InputBase,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

import useInput from "../../hooks/useInputState";
import { useStyles } from "./useStyles";

function TaskForm({ id, task, toggleIsEdit, updateTodo }) {
  const [editTaskInput, handleEditTaskInput, clearEditTaskInput] = useInput(
    task
  );

  let textInput = useRef(null);

  const handleUpdate = (e) => {
    updateTodo(id, editTaskInput);
    toggleIsEdit();
  };

  const handleClear = (e) => {
    e.preventDefault();

    clearEditTaskInput();
    textInput.current.focus();
  };
  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleUpdate();
    }
  };

  const moveCursorToEndInput = (e) => {
    let val = e.target.value;
    e.target.value = "";
    e.target.value = val;
  };

  const classes = useStyles();
  const handleOnBlur = () => {
    toggleIsEdit();
  };
  return (
    <>
      <FormControl
        component="form"
        onBlur={handleOnBlur}
        onSubmit={handleUpdate}
        className={classes.form}
      >
        <InputBase
          id="standard-basic"
          label="Edit Task"
          value={editTaskInput}
          className={classes.editTaskInput}
          onKeyDown={onEnterPress}
          onChange={handleEditTaskInput}
          onFocus={moveCursorToEndInput}
          inputRef={textInput}
          fullWidth
          multiline
          autoFocus
        />
      </FormControl>
      <ListItemSecondaryAction>
        <IconButton
          onMouseDown={handleClear}
          className={classes.clearButton}
          color="secondary"
          edge="end"
          aria-label="delete"
        >
          <ClearIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </>
  );
}

export default TaskForm;
