import React from "react";

import {
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Task({ isComplete, toggleIsEdit, task, handleDelete }) {
  const handleEdit = () => {
    !isComplete && toggleIsEdit();
  };
  return (
    <>
      <ListItemText
        style={{
          margin: 0,
        }}
      >
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
  );
}

export default Task;
