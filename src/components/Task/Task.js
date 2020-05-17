import React from "react";

import {
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import { useStyles } from "./useStyles";

function Task({ isComplete, toggleIsEdit, task, handleDelete }) {
  const handleEdit = () => {
    !isComplete && toggleIsEdit();
  };

  const classes = useStyles();
  return (
    <>
      <ListItemText className={classes.taskItem}>
        <div
          onClick={handleEdit}
          style={{ textDecoration: isComplete ? "line-through" : "none" }}
          className={classes.taskText}
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
  );
}

export default Task;
