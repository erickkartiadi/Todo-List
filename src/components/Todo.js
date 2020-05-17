import React, { useRef } from "react";
import useToggle from "../hooks/useToggleState";
import useInput from "../hooks/useInputState";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import EditIcon from "@material-ui/icons/Edit";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import TextField from "@material-ui/core/TextField";
import ClearIcon from "@material-ui/icons/Clear";
import {
  FormControl,
  Input,
  InputAdornment,
  InputBase,
  Divider,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  icon: {
    minWidth: "42px",
  },
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
  // checkBox: {
  //   width: 4,
  //   height: 4,
  // },
}));

function Todo({
  id,
  task,
  isComplete,
  updateTodo,
  deleteTodo,
  toggleComplete,
}) {
  const [isEdit, toggleIsEdit] = useToggle();
  const [editTaskInput, handleEditTaskInput, clearEditTaskInput] = useInput(
    task
  );

  let textInput = useRef(null);
  let formRef = useRef(null);
  const handleDelete = (e) => {
    deleteTodo(id);
  };
  const handleEdit = () => {
    !isComplete && toggleIsEdit();
  };
  const handleUpdate = (e) => {
    // e.preventDefault();

    updateTodo(id, editTaskInput);
    toggleIsEdit();
  };

  const handleComplete = () => {
    toggleComplete(id);
  };

  const handleClear = (e) => {
    e.preventDefault();

    clearEditTaskInput();
    textInput.current.focus();
  };

  const classes = useStyles();

  const onEnterPress = (e) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleUpdate();
    }
  };
  return (
    <>
      <ListItem>
        <ListItemIcon className={classes.icon}>
          <Checkbox
            onChange={handleComplete}
            className={classes.checkBox}
            edge="start"
            checked={isComplete}
            tabIndex={-1}
            fontSize="small"
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
            inputProps={{ "aria-labelledby": "test" }}
          />
        </ListItemIcon>
        {isEdit ? (
          <>
            <FormControl
              onBlur={() => {
                toggleIsEdit();
                console.log("fire");
              }}
              style={{
                width: "70%",
              }}
              component="form"
              onSubmit={handleUpdate}
              className={classes.form}
            >
              <InputBase
                onKeyDown={onEnterPress}
                multiline
                className={classes.editTaskInput}
                inputRef={textInput}
                // style={{ height: "29px" }}
                value={editTaskInput}
                autoFocus
                onChange={handleEditTaskInput}
                fullWidth
                id="standard-basic"
                label="Standard"
                onFocus={(e) => {
                  let val = e.target.value;
                  e.target.value = "";
                  e.target.value = val;
                }}
                style={{ lineHeight: "1.5", paddingRight: "30px" }}
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
        ) : (
          <>
            <ListItemText style={{ margin: 0 }}>
              <div
                style={{
                  cursor: "pointer",
                  textDecoration: isComplete ? "line-through" : "none",
                  width: "70%",
                  wordBreak: "break-all",
                }}
                onClick={handleEdit}
              >
                {task}
              </div>
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                color="primary"
                edge="end"
                aria-label="edit"
                onClick={handleEdit}
                disabled={isComplete}
              >
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton
                color="secondary"
                onClick={handleDelete}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItemSecondaryAction>
          </>
        )}
      </ListItem>
    </>
  );
}
export default Todo;
