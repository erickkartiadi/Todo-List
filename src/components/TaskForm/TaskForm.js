import React, { useRef } from "react";

import {
  FormControl,
  InputBase,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ClearIcon from "@material-ui/icons/Clear";

import useInput from "../../hooks/useInputState";

const useStyles = makeStyles(() => ({
  editTaskInput: {
    caretColor: "blue",
    "& :focus": {
      color: "rgba(0,0,0,0.8)",
    },
  },
  form: {
    "& > div": {
      padding: 0,
    },
  },
}));

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
  return (
    <>
      <FormControl
        onBlur={() => {
          toggleIsEdit();
        }}
        style={{
          width: "70%",
        }}
        component="form"
        onSubmit={handleUpdate}
        className={classes.form}
      >
        <InputBase
          id="standard-basic"
          label="Standard"
          value={editTaskInput}
          className={classes.editTaskInput}
          onKeyDown={onEnterPress}
          onChange={handleEditTaskInput}
          onFocus={moveCursorToEndInput}
          inputRef={textInput}
          fullWidth
          multiline
          autoFocus
          style={{
            lineHeight: "1.5",
            paddingRight: "30px",
          }}
        />
      </FormControl>
      <ListItemSecondaryAction>
        <IconButton
          onMouseDown={handleClear}
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
