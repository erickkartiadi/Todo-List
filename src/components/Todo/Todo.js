import React from "react";

import { ListItem, ListItemIcon, Checkbox } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import useToggle from "../../hooks/useToggleState";

import Task from "../Task/Task";
import TaskForm from "../TaskForm/TaskForm";
import { useStyles } from "./useStyles";

function Todo({
  id,
  task,
  isComplete,
  updateTodo,
  deleteTodo,
  toggleComplete,
}) {
  const [isEdit, toggleIsEdit] = useToggle();

  const handleDelete = (e) => {
    deleteTodo(id);
  };

  const handleComplete = () => {
    toggleComplete(id);
  };

  const classes = useStyles();
  return (
    <ListItem className={classes.root}>
      <ListItemIcon className={classes.icon}>
        <Checkbox
          onChange={handleComplete}
          className={classes.checkBox}
          checked={isComplete}
          edge="start"
          tabIndex={-1}
          fontSize="small"
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<CheckCircleIcon className={classes.checkedIcon} />}
          inputProps={{ "aria-labelledby": "task completed" }}
        />
      </ListItemIcon>
      {isEdit ? (
        <TaskForm
          id={id}
          task={task}
          toggleIsEdit={toggleIsEdit}
          updateTodo={updateTodo}
        />
      ) : (
        <Task
          isComplete={isComplete}
          toggleIsEdit={toggleIsEdit}
          task={task}
          handleDelete={handleDelete}
        />
      )}
    </ListItem>
  );
}
export default Todo;
