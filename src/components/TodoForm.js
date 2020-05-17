import React, { useState } from "react";
import useInput from "../hooks/useInputState";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import useToggle from "../hooks/useToggleState";
import MuiAlert from "@material-ui/lab/Alert";
import { SnackbarProvider, useSnackbar } from "notistack";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    addTodo(newTaskInput);
    clearNewTaskInput();
  };

  const classes = useStyles();

  const handleClick = (variant) => (e) => {
    // variant could be success, error, warning, info, or default
    e.preventDefault();
    handleSubmit();
    enqueueSnackbar("Task Added", { variant });
    logging();
  };
  const logging = () => {
    console.log("in");
  };
  return (
    <Grid
      component="form"
      onSubmit={handleClick("success")}
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
      {/* <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={closeSnackbar}
        open={isSnackBarOpen}
        autoHideDuration={3000}
        // onClose={toggleIsSnackBarOpen}
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
              onClick={closeSnackbar}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      >
        <Alert onClose={closeSnackbar} severity="success">
          Task Added
        </Alert>
      </Snackbar> */}
    </Grid>
  );
}

export default function IntegrationNotistack(props) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp {...props} />
    </SnackbarProvider>
  );
}
